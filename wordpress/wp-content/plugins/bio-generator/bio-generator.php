<?php
/**
 * Plugin Name: Biography Generator
 * Description: Generates biographies using ChatGPT API
 * Version: 1.0.0
 * Author: Samuel Gregory
 */

if (!defined('ABSPATH')) {
    exit;
}

class BioGenerator {
    private $post_type = 'team'; // Change this to your specific post type
    private $api_key_option = 'bio_generator_api_key';
    private $encryption_key;
    
    public function __construct() {
        add_action('admin_init', array($this, 'register_settings'));
        add_action('admin_menu', array($this, 'add_settings_page'));
        add_action('admin_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('wp_ajax_generate_bio', array($this, 'ajax_generate_bio'));
        add_action('admin_footer', array($this, 'add_generate_button'));
        
        // Generate or retrieve encryption key
        $this->encryption_key = get_option('bio_generator_encryption_key');
        if (empty($this->encryption_key)) {
            $this->encryption_key = bin2hex(random_bytes(32));
            update_option('bio_generator_encryption_key', $this->encryption_key);
        }
    }

    public function register_settings() {
        register_setting('bio_generator_settings', $this->api_key_option, array(
            'sanitize_callback' => array($this, 'encrypt_api_key')
        ));
    }

    public function encrypt_api_key($key) {
        if (empty($key)) return '';
        
        $iv = random_bytes(16);
        $encrypted = openssl_encrypt(
            $key,
            'AES-256-CBC',
            hex2bin($this->encryption_key),
            0,
            $iv
        );
        
        return base64_encode($iv . $encrypted);
    }

    public function add_settings_page() {
        add_options_page(
            'Bio Generator Settings',
            'Bio Generator',
            'manage_options',
            'bio-generator-settings',
            array($this, 'render_settings_page')
        );
    }

    public function render_settings_page() {
        ?>
        <div class="wrap">
            <h2>Bio Generator Settings</h2>
            <form method="post" action="options.php">
                <?php
                settings_fields('bio_generator_settings');
                do_settings_sections('bio_generator_settings');
                ?>
                <table class="form-table">
                    <tr>
                        <th scope="row">OpenAI API Key</th>
                        <td>
                            <input type="password" name="<?php echo esc_attr($this->api_key_option); ?>" value="<?php echo esc_attr($this->decrypt_api_key(get_option($this->api_key_option))); ?>" class="regular-text">
                            <p class="description">Enter your OpenAI API key. For security, the key will be stored in encrypted form.</p>
                        </td>
                    </tr>
                </table>
                <?php submit_button(); ?>
            </form>
        </div>
        <?php
    }

    public function add_generate_button() {
        global $post_type;
        if ($post_type !== $this->post_type) {
            return;
        }
        ?>
        <script type="text/javascript">
            jQuery(document).ready(function($) {
                // Add the generate button after the target textarea
                $('#acf-field_6690f09290fcd').after(
                    '<div style="display: flex; align-items: center; margin-top: 5px; gap: 10px">' +
                    '<button type="button" id="generate_bio_button" class="button button-secondary" style="display: flex;align-items: center; gap: 5px"><img src="<?php echo plugins_url('assets/ai.png', __FILE__); ?>" width="16" height="16" alt=""/>Generate Biography</button>' +
                    '<span id="bio_generator_status" style="display: none;"></span>' +
                    '</div>'
                );
            });
        </script>
        <?php
    }

    public function save_bio($post_id) {
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }

        if (!current_user_can('edit_post', $post_id)) {
            return;
        }

        if (isset($_POST['content'])) {
            update_post_meta($post_id, '_generated_bio', sanitize_textarea_field($_POST['content']));
        }
    }

    public function enqueue_scripts($hook) {
        global $post;
        if ($hook == 'post.php' || $hook == 'post-new.php') {
            if ($post->post_type === $this->post_type) {
                wp_enqueue_script(
                    'bio-generator',
                    plugins_url('js/bio-generator.js', __FILE__),
                    array('jquery'),
                    '1.0.0',
                    true
                );

                wp_localize_script('bio-generator', 'bioGeneratorData', array(
                    'ajaxurl' => admin_url('admin-ajax.php'),
                    'nonce' => wp_create_nonce('bio_generator_ajax_nonce')
                ));
            }
        }
    }

    public function ajax_generate_bio() {
        check_ajax_referer('bio_generator_ajax_nonce', 'nonce');

        if (!current_user_can('edit_posts')) {
            wp_send_json_error('Unauthorized');
            return;
        }

        $business_name = sanitize_text_field($_POST['title']);
        
        if (empty($business_name)) {
            wp_send_json_error('No name provided');
            return;
        }

        $api_key = $this->get_api_key();
        if (empty($api_key)) {
            wp_send_json_error('API key not configured');
            return;
        }

        $bio = $this->generate_bio_from_openai($business_name);
        
        if (is_wp_error($bio)) {
            wp_send_json_error($bio->get_error_message());
            return;
        }

        wp_send_json_success(array('bio' => $bio));
    }

    private function generate_bio_from_openai($business_name) {
        $api_endpoint = 'https://api.openai.com/v1/chat/completions';
        
        $headers = array(
            'Authorization' => 'Bearer ' . $this->get_api_key(),
            'Content-Type' => 'application/json'
        );

        $body = array(
            'model' => 'gpt-3.5-turbo',
            'messages' => array(
                array(
                    'role' => 'system',
                    'content' => 'You are a professional biography writer. Create a concise, engaging biography based on the provided content for the specified business.'
                ),
                array(
                    'role' => 'user',
                    'content' => sprintf('Generate a short, professional biography for the business named "%s". They are a hair salon.', $business_name)
                )
            ),
            'max_tokens' => 300,
            'temperature' => 0.7
        );

        $response = wp_remote_post($api_endpoint, array(
            'headers' => $headers,
            'body' => json_encode($body),
            'timeout' => 30
        ));

        if (is_wp_error($response)) {
            return new WP_Error('api_error', $response->get_error_message());
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);

        if (isset($body['error'])) {
            return new WP_Error('api_error', $body['error']['message']);
        }

        return $body['choices'][0]['message']['content'];
    }

    private function get_api_key() {
        $encrypted_key = get_option($this->api_key_option);
        return $this->decrypt_api_key($encrypted_key);
    }

    private function decrypt_api_key($encrypted_key) {
        if (empty($encrypted_key)) return '';
        
        $decoded = base64_decode($encrypted_key);
        $iv = substr($decoded, 0, 16);
        $encrypted = substr($decoded, 16);
        
        return openssl_decrypt(
            $encrypted,
            'AES-256-CBC',
            hex2bin($this->encryption_key),
            0,
            $iv
        );
    }
}

new BioGenerator();
