<?php
    /* 
    Use this file to add custom PHP code to your theme or plugin 
    */
    function contact_form_process() {
        // do whatever you need in order to process the form.
        $name = ($_POST['name']);
        $email = ($_POST['email']);
        $company = ($_POST['company']);
        $message = ($_POST['message']);
        $source = ($_POST['source']);

        if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || !empty($_POST['hnypt'])):
             die("Required fields are missing");
        endif;

        $email_message = "You've recieved a new message from the Jupiter and the Giraffe website.\n\n";
        $email_message .= "Name: ".$name."\n";
        $email_message .= "Email: ".$email."\n";
        if(!empty($_POST['company'])):
            $email_message .= "Company: ".$company ."\n";
        endif;
        $email_message .= "Source: ".$source."\n";
        $email_message .= "Message: ".$message."\n";

        $headers = array(
            'From: '.$name.' <'.$email.'>', 
            'Reply-To: '.$email, 
            'X-Mailer: PHP/'.phpversion(), 
        );

        wp_mail("hello@jupiterandthegiraffe.com", "✉️ New message from jatg.co", $email_message, $headers);
    }
    //use this version for if you want the callback to work for users who are not logged in
    add_action( 'wp_ajax_contact_form', 'contact_form_process' );
    add_action("wp_ajax_nopriv_contact_form", "contact_form_process");

    function localized_scripts() {
        wp_localize_script( "main_javascript", "formProcessing",
            array(
                'ajaxUrl' => admin_url( 'admin-ajax.php' ), //url for php file that process ajax request to WP
                'nonce' => wp_create_nonce( "unique_id_nonce" ) // this is a unique token to prevent form hijacking
            )
        );
    }

    add_action( 'wp_enqueue_scripts', 'localized_scripts' );
?>