<?php get_header( 'page-home' ); ?>

    <header class="main-nav">
        <div class="container">
            <div class="main-nav-wrapper">
                <a class="main-nav-home" href="<?php echo esc_url( home_url() ); ?>"><svg width="57" height="30" viewBox="0 0 57 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.8923 10.1575H48.8707V14.8874H35.5155V9.93106L38.7921 6.53504H56.8256V0H36.274L29.0352 7.50184V21.4286H50.4119L56.8923 14.8874V10.1575Z" fill="var(--dark)"/>
                        <path d="M20.263 7.5H12.7908V13.9715H20.263V16.2166V16.7329V18.6239L15.7822 22.9402L15.1181 23.5886H0.105469V30H8.48376H8.80648H17.8799L26.8912 21.2833V16.7329V16.2166V7.5H20.263Z" fill="var(--dark)"/>
                    </svg></a>
                <div class="main-nav__nav" data-main-nav>
                    <?php if ( has_nav_menu( 'primary' ) ) : ?>
                        <?php
                            PG_Smart_Walker_Nav_Menu::init();
                            PG_Smart_Walker_Nav_Menu::$options['template'] = '<li><a class="main-nav__list-link {CLASSES}" id="{ID}" {ATTRS}>{TITLE}</a>
                                                        </li>';
                            PG_Smart_Walker_Nav_Menu::$options['current_class'] = 'current_page_item';
                            wp_nav_menu( array(
                                'container' => '',
                                'theme_location' => 'primary',
                                'items_wrap' => '<ul class="%2$s main-nav__list" id="%1$s">%3$s</ul>',
                                'walker' => new PG_Smart_Walker_Nav_Menu()
                        ) ); ?>
                    <?php endif; ?>
                    <button type="button" aria-label="Open menu" class="main-nav__menu-button">
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.9007 35.0251L34.104 48.2829L14.9737 47.9019L1.71586 34.1052L2.09687 14.9749L15.8935 1.71706L35.0239 2.09807L48.2817 15.8947L47.9007 35.0251Z" stroke="var(--dark)" stroke-width="2"/>
                            <line x1="12.8555" y1="21.8574" x2="37.8555" y2="21.8574" stroke="var(--dark)" stroke-width="2"/>
                            <line x1="12.8555" y1="26.8574" x2="37.8555" y2="26.8574" stroke="var(--dark)" stroke-width="2"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
    <main class="container">
        <section class="home-hero" style="display: flex; flex-direction: column;" data-home-hero>
            <div data-empty-placeholder class="home-hero__block"></div>
            <div class="home-hero__content">
                <div>
                    <div class="home-hero__heading-top-bar" data-home-hero-top-bar><span><?php _e( 'Jupiter &amp; the Giraffe', 'jupiter_and_the_giraffe' ); ?></span><span style="max-width: 226px;"><?php _e( 'DESIGN, DEVELOPMENT AND DIGITAL EXPERIENCES', 'jupiter_and_the_giraffe' ); ?></span>
                    </div>
                    <h1 class="home-hero__heading" data-home-hero-heading> <div class="home-hero__heading-text">
                            <?php _e( 'Building gateways to', 'jupiter_and_the_giraffe' ); ?> 
                        </div><div class="home-hero__heading-stagger">
                            <?php _e( 'the digital realm', 'jupiter_and_the_giraffe' ); ?>
                        </div><span style="height: 1px; background-color: var(--dark); display: block;" data-home-hero-title-line data-pg-ia-hide></span></h1>
                    <div style="text-align: center; display: flex; flex-direction: column; gap: 20px; align-items: center;">
                        <p class="home-hero__tagline" data-hero-home-tagline><?php _e( 'J&amp;TG build Immersive Websites, Apps and digital experiences', 'jupiter_and_the_giraffe' ); ?></p>
                        <div class="home-hero__content-button-wrap" data-pg-ia-hide home-hero-button-wrap><a href="<?php echo esc_url( get_page_link( '191' ) ); ?>" class="angled-button"> <span style="display: block;"><?php _e( 'Discover more', 'jupiter_and_the_giraffe' ); ?></span></a>
                        </div>
                    </div>
                </div>
                <div class="home-hero__bottom-section">
                    <svg width="235" height="69" viewBox="0 0 235 69" fill="none" xmlns="http://www.w3.org/2000/svg" class="home-hero__bottom-section-graphic" data-home-hero-v4>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M127.979 68.7332V52.6736H87.7852V40.7009L129.14 3.38306H141.068V39.495H150.03V52.6736H141.068V68.7332H127.979ZM140.335 51.9403H149.297V40.2283H140.335V4.11634H129.422L88.5184 41.0268V51.9403H128.712V67.9999H140.335V51.9403ZM128.712 40.2283H106.619L128.712 21.773V40.2283ZM127.979 23.3411L108.64 39.495H127.979V23.3411Z" fill="#FF4D14"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M38.6807 68.7332L0.832031 3.38306H16.1923L44.3392 52.3342L72.5736 3.38306H87.8445L49.9959 68.7332H38.6807ZM44.3383 53.8036L15.7681 4.11634H2.10411L39.1033 67.9999H49.5732L86.5724 4.11634H72.9971L44.3383 53.8036Z" fill="#FF4D14"/>
                        <g clip-path="url(#clip0_618_298)">
                            <path d="M201.72 0H199.283L166 33.2834V35.7199L201.72 0Z" fill="#FF4D14"/>
                            <path d="M195.118 0H192.682L166 26.6819V29.1184L195.118 0Z" fill="#FF4D14"/>
                            <path d="M214.92 0H212.483L166 46.4831V48.9196L214.92 0Z" fill="#FF4D14"/>
                            <path d="M208.318 0H205.885L166 39.8849V42.3181L208.318 0Z" fill="#FF4D14"/>
                            <path d="M221.521 0H219.085L166 53.0846V55.5211L221.521 0Z" fill="#FF4D14"/>
                            <path d="M168.716 0H166.279L166 0.279218V2.71572L168.716 0Z" fill="#FF4D14"/>
                            <path d="M188.517 0H186.08L166 20.0804V22.5169L188.517 0Z" fill="#FF4D14"/>
                            <path d="M175.314 0H172.881L166 6.88072V9.3139L175.314 0Z" fill="#FF4D14"/>
                            <path d="M181.915 0H179.479L166 13.4789V15.9154L181.915 0Z" fill="#FF4D14"/>
                            <path d="M235.001 26.1235V23.6903L189.691 69H192.125L235.001 26.1235Z" fill="#FF4D14"/>
                            <path d="M235.001 39.3265V36.89L202.891 69H205.327L235.001 39.3265Z" fill="#FF4D14"/>
                            <path d="M235.001 32.725V30.2885L196.289 69H198.726L235.001 32.725Z" fill="#FF4D14"/>
                            <path d="M235.001 19.5254V17.0889L183.09 69.0001H185.526L235.001 19.5254Z" fill="#FF4D14"/>
                            <path d="M235.001 45.928V43.4915L209.492 69H211.929L235.001 45.928Z" fill="#FF4D14"/>
                            <path d="M235.001 12.9238V10.4873L176.488 69H178.925L235.001 12.9238Z" fill="#FF4D14"/>
                            <path d="M234.724 0H232.288L166 66.2876V68.7241L234.724 0Z" fill="#FF4D14"/>
                            <path d="M235.001 6.32225V3.88574L169.887 69H172.323L235.001 6.32225Z" fill="#FF4D14"/>
                            <path d="M228.123 0H225.686L166 59.6861V62.1226L228.123 0Z" fill="#FF4D14"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_618_298">
                                <rect width="69" height="69" fill="white" transform="translate(166)"/>
                            </clipPath>
                        </defs>
                    </svg><span>
    &copy; <span data-date-target><?php the_time('Y'); ?></span> </span>
                    <span data-home-hero-adventure style="overflow: hidden;"><?php _e( 'Since 2018 — A space adventure', 'jupiter_and_the_giraffe' ); ?></span>
                </div>
                <img src="https://midnightblue-beaver-232018.hostingersite.com/wp-content/uploads/2024/07/hero.webp" width="621" height="621" data-home-hero-bg-image data-pg-ia-hide class="home-hero__content-image">
            </div>
        </section>
        <section class="our-work" data-pg-ia-scene='{"s":"custom","s_t":"start","s_s":"end","l":[{"a":{"l":[{"t":".our-work__featured-item #gt# div:nth-of-type(1)","l":[{"t":"set","p":0,"d":0,"l":{"x":"-50px","autoAlpha":0}},{"t":"tween","p":0,"d":0.5,"l":{"x":0,"autoAlpha":1}}]},{"t":".our-work__featured-item-content-col","l":[{"t":"set","p":0,"d":0,"l":{"x":"50px","autoAlpha":0}},{"t":"tween","p":0.2,"d":0.5,"l":{"x":0,"autoAlpha":1}}]}]},"p":"time"}],"s_o":"-100px"}' home-section-header>
            <h2 class="home__section-header"><?php _e( 'Our work', 'jupiter_and_the_giraffe' ); ?></h2>
            <?php
                $featured_result_args = array(
                    'post_type' => 'result',
                    'posts_per_page' => 1,
                    'meta_key' => 'featured',
                    'meta_value' => '1'
                )
            ?>
            <?php $featured_result = new WP_Query( $featured_result_args ); ?>
            <?php if ( $featured_result->have_posts() ) : ?>
                <?php $featured_result_item_number = 0; ?>
                <?php while ( $featured_result->have_posts() && $featured_result_item_number++ < 1 ) : $featured_result->the_post(); ?>
                    <?php PG_Helper_v2::rememberShownPost(); ?>
                    <div><a class="our-work__featured-item" href="<?php echo esc_url( get_page_link( '189', false, true ) ); ?>"><div data-pg-ia-hide>
                                <?php echo PG_Image::getPostImage( null, 'full', array(
                                        'class' => 'our-work__featured-item-image',
                                        'loading' => 'lazy'
                                ), null, null ) ?>
                            </div><div class="our-work__featured-item-content-col" data-pg-ia-hide>
                                <h3 class="our-work__featured-item-title"> <div>
                                        <?php the_title(); ?>
                                    </div> <div>
                                        <?php echo get_field( 'misc_info' ); ?>
                                    </div></h3>
                                <div class="our-work__featured-item-client">
                                    <?php _e( 'Client:', 'jupiter_and_the_giraffe' ); ?> <span><?php echo get_field( 'client' ); ?></span>
                                </div>
                                <?php the_excerpt( ); ?>
                                <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" class="our-work__featured-item-arrow">
                                    <path d="M28.0303 20.3359L0.499998 20.3359L0.499998 16.6641L28.0303 16.6641L29.2374 16.6641L28.3839 15.8106L15.8902 3.31692L18.5 0.70711L36.2929 18.5L18.5 36.2929L15.8902 33.6831L28.3839 21.1894L29.2374 20.3359L28.0303 20.3359Z" stroke="#FF4D14"/>
                                </svg>
                            </div></a>
                    </div>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            <?php endif; ?>
        </section>
        <section class="our-process" home-section-header home-our-process-section>
            <h2 class="home__section-header"><?php _e( 'Our Process', 'jupiter_and_the_giraffe' ); ?></h2>
            <div style="display: flex; flex-direction: column; gap: 56px;">
                <p class="our-process__content"> <svg width="34" height="32" viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_543_80)">
                            <path d="M33.9016 1.26432L25.4674 1.26432V0L14.9246 0L13.359 0.609847L1.14838 12.0948L0.5 13.5674L0.5 23.4836H2.34499L2.34499 31.9371H3.08298L3.08298 23.4836H4.92797L4.92797 14.4301L15.8419 4.16481L25.4674 4.16481V1.95845L33.9016 1.95845V1.26432Z" fill="#CECFCF"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_543_80">
                                <rect width="33.4016" height="31.9371" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                    </svg><svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_543_82)">
                            <path d="M33.1558 31.6761L33.1558 23.7431L34.5 23.7431L34.5 13.8269L33.8516 12.3543L21.641 0.869368L20.0754 0.259521L9.53259 0.25952L9.53259 1.99486L0.544868 1.99486L0.544868 2.68899L9.53259 2.68899L9.53259 4.42433L19.1581 4.42433L30.072 14.6896L30.072 23.7431L32.4178 23.7431L32.4178 31.6761L33.1558 31.6761Z" fill="#CECFCF"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_543_82">
                                <rect width="31.4165" height="33.9551" fill="white" transform="translate(34.5 0.259521) rotate(90)"/>
                            </clipPath>
                        </defs>
                    </svg><svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_543_88)">
                            <path d="M1.84421 0.198216L1.84421 8.13118L0.500003 8.13118L0.500002 18.0474L1.14838 19.5199L13.359 31.0049L14.9246 31.6147L25.4674 31.6147L25.4674 29.8794L34.4551 29.8794L34.4551 29.1853L25.4674 29.1853L25.4674 27.4499L15.8419 27.4499L4.92797 17.1847L4.92797 8.13118L2.5822 8.13118L2.5822 0.198216L1.84421 0.198216Z" fill="#CECFCF"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_543_88">
                                <rect width="31.4165" height="33.9551" fill="white" transform="translate(0.5 31.6147) rotate(-90)"/>
                            </clipPath>
                        </defs>
                    </svg><svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_543_86)">
                            <path d="M0.0983621 31.6099L8.53259 31.6099L8.53259 32.8743L19.0754 32.8743L20.641 32.2644L32.8516 20.7795L33.5 19.3069L33.5 9.39071L31.655 9.3907L31.655 0.937137L30.917 0.937137L30.917 9.3907L29.072 9.3907L29.072 18.4442L18.1581 28.7095L8.53259 28.7095L8.53259 30.9158L0.0983621 30.9158L0.0983621 31.6099Z" fill="#CECFCF"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_543_86">
                                <rect width="33.4016" height="31.9371" fill="white" transform="translate(33.5 32.8743) rotate(-180)"/>
                            </clipPath>
                        </defs>
                    </svg> <span data-pg-ia-hide> <?php _e( 'J&amp;TG&rsquo;s unique working process is set up to bring web experiences to life. It guarantees informed, smart decision making and compliments our clients&apos; brand or marketing endeavours.', 'jupiter_and_the_giraffe' ); ?> </span></p>
                <div style="text-align: center;"><a href="<?php echo esc_url( get_page_link( '187' ) ); ?>" class="angled-button"> <span style="display: block;"><?php _e( 'Discover more', 'jupiter_and_the_giraffe' ); ?></span></a>
                </div>
                <div class="our-process__graphics"><code> <?php _e( 'engine_start() {', 'jupiter_and_the_giraffe' ); ?> <div>
                                <?php _e( '^57lQNz>57rK@49 qL57NkR!xlP', 'jupiter_and_the_giraffe' ); ?> 
                                <?php _e( 'Kx!57Nrz@49Ql zN57^kR#57lP', 'jupiter_and_the_giraffe' ); ?> 
                                <?php _e( 'qL57Nz@57klG ^z57lQ@57Nzk', 'jupiter_and_the_giraffe' ); ?> 
                                <?php _e( 'rK57Nl!xG49 ^lQ57NkR!zP', 'jupiter_and_the_giraffe' ); ?> 
                                <?php _e( '57rQk>l@57NzG ^57kRl!Q57Nz', 'jupiter_and_the_giraffe' ); ?> 
                            </div>
}</code>
                    <img src="https://midnightblue-beaver-232018.hostingersite.com/wp-content/uploads/2024/07/process-eye-bottom-left.webp" width="245" height="245" loading="lazy" class="our-process__graphics-bottom-left" data-graphic-bottom-left>
                    <img src="https://midnightblue-beaver-232018.hostingersite.com/wp-content/uploads/2024/07/process-eye-centre.webp" width="675" height="675" data-graphic-center class="our-process__graphics-center">
                    <img src="https://midnightblue-beaver-232018.hostingersite.com/wp-content/uploads/2024/07/process-eye-top-right.webp" width="245" height="245" loading="lazy" class="our-process__graphics-top-right" data-graphic-top-right>
                </div>
            </div><span aria-hidden="true" class="vertical-text-right" style="color: var(--primary);"><?php _e( 'Our Process SECTION -----------------', 'jupiter_and_the_giraffe' ); ?> <span data-number><?php _e( '18%', 'jupiter_and_the_giraffe' ); ?></span></span><span aria-hidden="true" class="vertical-text-left" style="color: var(--primary);"><?php _e( 'Our Process SECTION -----------------', 'jupiter_and_the_giraffe' ); ?> <span data-number><?php _e( '23', 'jupiter_and_the_giraffe' ); ?></span>%</span>
        </section>
        <section class="prices" home-section-header>
            <h2 style="color: var(--light); font-size: 3.375rem; font-weight: 700;"><?php _e( 'Our Packages', 'jupiter_and_the_giraffe' ); ?></h2>
            <div class="our-packages__packages" data-pg-ia-scene='{"s":"custom","s_t":"start","s_s":"end","s_o":"-300px","l":[{"a":{"l":[{"t":"#gt# div:nth-of-type(2)","l":[{"t":"tween","p":0,"d":0.5,"l":{"autoAlpha":1}}]},{"t":"#gt# div:nth-of-type(1)","l":[{"t":"set","p":0,"d":0,"l":{"x":"100%"}},{"t":"tween","p":0.29,"d":0.5,"l":{"x":0,"autoAlpha":1}}]},{"t":"#gt# div:nth-of-type(3)","l":[{"t":"set","p":0,"d":0,"l":{"x":"-100%"}},{"t":"tween","p":0.29,"d":0.5,"l":{"x":0,"autoAlpha":1}}]},{"t":"","l":[{"t":"set","p":0,"d":0,"l":{"scale":1.3}},{"t":"tween","p":0,"d":0.5,"l":{"scale":1,"autoAlpha":1}}]}]},"p":"time"}],"on":"desktop"}' data-pg-ia-hide="desktop">
                <div class="our-packages__package" style="--package-color: var(--primary);" data-pg-ia-hide="desktop">
                    <h3 class="our-packages__package-title"><?php _e( 'Webflow Website', 'jupiter_and_the_giraffe' ); ?></h3><span class="our-packages__package-price"><?php _e( '&pound;6,000', 'jupiter_and_the_giraffe' ); ?></span>
                    <div class="our-packages__package-break"></div>
                    <ul class="our-packages__package-benefit-list">
                        <li>
                            <div class="our-packages__package-benefit-title">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="our-packages__package-benefit-title-point">
                                    <path d="M0 7.71647V4.10824L3.60824 0.5H7.21647V4.10824H5.4129L3.60824 5.95794V7.71647H0Z" fill="var(--package-color)"></path>
                                    <path d="M19.9977 7.71647V4.10824L16.3895 0.5H12.7812V4.10824H14.5859L16.3895 5.95794V7.71647H19.9977Z" fill="var(--package-color)"></path>
                                    <path d="M19.9977 13.2837V16.8919L16.3895 20.5002H12.7812V16.8919H14.5859L16.3895 15.0422V13.2837H19.9977Z" fill="var(--package-color)"></path>
                                    <path d="M0 13.2837V16.8919L3.60824 20.5002H7.21647V16.8919H5.4129L3.60824 15.0422V13.2837H0Z" fill="var(--package-color)"></path>
                                    <path d="M14.6377 5.86084H12.7816L9.99797 8.64445L7.21436 5.86084H5.35938V7.71583L8.14298 10.4994L5.35938 13.283V15.1392H7.21436L9.99797 12.3555L12.7816 15.1392H14.6377V13.283L11.8541 10.4994L14.6377 7.71583V5.86084Z" fill="var(--package-color)"></path>
                                </svg>
                                <?php _e( 'BYOD', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <p><?php _e( 'We use Webflow (or other appropriate no code platform) to bring to life your design.', 'jupiter_and_the_giraffe' ); ?></p>
                        </li>
                        <li>
                            <div class="our-packages__package-benefit-title">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="our-packages__package-benefit-title-point">
                                    <path d="M0 7.71647V4.10824L3.60824 0.5H7.21647V4.10824H5.4129L3.60824 5.95794V7.71647H0Z" fill="var(--package-color)"/>
                                    <path d="M19.9977 7.71647V4.10824L16.3895 0.5H12.7812V4.10824H14.5859L16.3895 5.95794V7.71647H19.9977Z" fill="var(--package-color)"/>
                                    <path d="M19.9977 13.2837V16.8919L16.3895 20.5002H12.7812V16.8919H14.5859L16.3895 15.0422V13.2837H19.9977Z" fill="var(--package-color)"/>
                                    <path d="M0 13.2837V16.8919L3.60824 20.5002H7.21647V16.8919H5.4129L3.60824 15.0422V13.2837H0Z" fill="var(--package-color)"/>
                                    <path d="M14.6377 5.86084H12.7816L9.99797 8.64445L7.21436 5.86084H5.35938V7.71583L8.14298 10.4994L5.35938 13.283V15.1392H7.21436L9.99797 12.3555L12.7816 15.1392H14.6377V13.283L11.8541 10.4994L14.6377 7.71583V5.86084Z" fill="var(--package-color)"/>
                                </svg>
                                <?php _e( '1 Month Timeline', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <p><?php _e( 'Design dependent, we aim to deliver your project within one month of recieving completed designs, copy and assets.', 'jupiter_and_the_giraffe' ); ?></p>
                        </li>
                        <li>
                            <div class="our-packages__package-benefit-title">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="our-packages__package-benefit-title-point">
                                    <path d="M0 7.71647V4.10824L3.60824 0.5H7.21647V4.10824H5.4129L3.60824 5.95794V7.71647H0Z" fill="var(--package-color)"/>
                                    <path d="M19.9977 7.71647V4.10824L16.3895 0.5H12.7812V4.10824H14.5859L16.3895 5.95794V7.71647H19.9977Z" fill="var(--package-color)"/>
                                    <path d="M19.9977 13.2837V16.8919L16.3895 20.5002H12.7812V16.8919H14.5859L16.3895 15.0422V13.2837H19.9977Z" fill="var(--package-color)"/>
                                    <path d="M0 13.2837V16.8919L3.60824 20.5002H7.21647V16.8919H5.4129L3.60824 15.0422V13.2837H0Z" fill="var(--package-color)"/>
                                    <path d="M14.6377 5.86084H12.7816L9.99797 8.64445L7.21436 5.86084H5.35938V7.71583L8.14298 10.4994L5.35938 13.283V15.1392H7.21436L9.99797 12.3555L12.7816 15.1392H14.6377V13.283L11.8541 10.4994L14.6377 7.71583V5.86084Z" fill="var(--package-color)"/>
                                </svg>
                                <?php _e( 'No Code Power', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <p><?php _e( 'Whether we use Webflow or another tool, you\'ll rest assured in the flexibility of updating and maintaining the website without worrying about writing a line of code. We also support you with 1 month FREE', 'jupiter_and_the_giraffe' ); ?> <a href="https://flowst8.dev" target="_blank"><?php _e( 'FlowSt8', 'jupiter_and_the_giraffe' ); ?></a> <?php _e( 'our unlimited no code maintainance service.', 'jupiter_and_the_giraffe' ); ?></p>
                        </li>
                    </ul>
                    <button type="button" class="angled-button" data-pg-ia='{"l":[{"name":"Open Dialog","t":"$.contact-us__dialog","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"autoAlpha":1,"display":"flex","pointerEvents":"auto","attr":{"open":"true"}}}]},{"t":".contact-us__dialog-inner","l":[{"t":"set","p":0,"d":0,"l":{"y":"50px","autoAlpha":0}},{"t":"tween","p":0,"d":0.5,"l":{"y":0,"autoAlpha":1,"pgCall":{"complete":"focusEl"}}}]}]}}]}' style="--primary: var(--package-color); margin-top: auto;">
                        <span style="display: block;"><?php _e( 'Let\'s talk', 'jupiter_and_the_giraffe' ); ?></span>
                    </button>
                </div>
                <div class="our-packages__package" style="--package-color: var(--dark); position: relative; z-index: 1;" data-pg-ia-hide="desktop">
                    <h3 class="our-packages__package-title"><?php _e( 'Production Microsite', 'jupiter_and_the_giraffe' ); ?></h3><span class="our-packages__package-price"><?php _e( '&pound;12,000', 'jupiter_and_the_giraffe' ); ?></span>
                    <div class="our-packages__package-break"></div>
                    <ul class="our-packages__package-benefit-list" style="--package-color: #A5A5A7;">
                        <li>
                            <div class="our-packages__package-benefit-title">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="our-packages__package-benefit-title-point">
                                    <path d="M0 7.71647V4.10824L3.60824 0.5H7.21647V4.10824H5.4129L3.60824 5.95794V7.71647H0Z" fill="var(--package-color)"></path>
                                    <path d="M19.9977 7.71647V4.10824L16.3895 0.5H12.7812V4.10824H14.5859L16.3895 5.95794V7.71647H19.9977Z" fill="var(--package-color)"></path>
                                    <path d="M19.9977 13.2837V16.8919L16.3895 20.5002H12.7812V16.8919H14.5859L16.3895 15.0422V13.2837H19.9977Z" fill="var(--package-color)"></path>
                                    <path d="M0 13.2837V16.8919L3.60824 20.5002H7.21647V16.8919H5.4129L3.60824 15.0422V13.2837H0Z" fill="var(--package-color)"></path>
                                    <path d="M14.6377 5.86084H12.7816L9.99797 8.64445L7.21436 5.86084H5.35938V7.71583L8.14298 10.4994L5.35938 13.283V15.1392H7.21436L9.99797 12.3555L12.7816 15.1392H14.6377V13.283L11.8541 10.4994L14.6377 7.71583V5.86084Z" fill="var(--package-color)"></path>
                                </svg>
                                <?php _e( 'Everything you need', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <p><?php _e( 'TICKETING, MARKETING and WEBSITE rolled into one easy to use platform.', 'jupiter_and_the_giraffe' ); ?></p>
                        </li>
                        <li>
                            <div class="our-packages__package-benefit-title">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="our-packages__package-benefit-title-point">
                                    <path d="M0 7.71647V4.10824L3.60824 0.5H7.21647V4.10824H5.4129L3.60824 5.95794V7.71647H0Z" fill="var(--package-color)"/>
                                    <path d="M19.9977 7.71647V4.10824L16.3895 0.5H12.7812V4.10824H14.5859L16.3895 5.95794V7.71647H19.9977Z" fill="var(--package-color)"/>
                                    <path d="M19.9977 13.2837V16.8919L16.3895 20.5002H12.7812V16.8919H14.5859L16.3895 15.0422V13.2837H19.9977Z" fill="var(--package-color)"/>
                                    <path d="M0 13.2837V16.8919L3.60824 20.5002H7.21647V16.8919H5.4129L3.60824 15.0422V13.2837H0Z" fill="var(--package-color)"/>
                                    <path d="M14.6377 5.86084H12.7816L9.99797 8.64445L7.21436 5.86084H5.35938V7.71583L8.14298 10.4994L5.35938 13.283V15.1392H7.21436L9.99797 12.3555L12.7816 15.1392H14.6377V13.283L11.8541 10.4994L14.6377 7.71583V5.86084Z" fill="var(--package-color)"/>
                                </svg>
                                <?php _e( 'Built with No Code', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <p><?php _e( 'Whether we use Webflow or another tool, you\'ll rest assured in the flexibility of updating and maintaining the website without worrying about writing a line of code. We also support you with 1 month FREE', 'jupiter_and_the_giraffe' ); ?> <a href="https://flowst8.dev" target="_blank"><?php _e( 'FlowSt8', 'jupiter_and_the_giraffe' ); ?></a> <?php _e( 'our unlimited no code maintainance service.', 'jupiter_and_the_giraffe' ); ?></p>
                        </li>
                    </ul>
                    <button type="button" class="angled-button" data-pg-ia='{"l":[{"name":"Open Dialog","t":"$.contact-us__dialog","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"autoAlpha":1,"display":"flex","pointerEvents":"auto","attr":{"open":"true"}}}]},{"t":".contact-us__dialog-inner","l":[{"t":"set","p":0,"d":0,"l":{"y":"50px","autoAlpha":0}},{"t":"tween","p":0,"d":0.5,"l":{"y":0,"autoAlpha":1,"pgCall":{"complete":"focusEl"}}}]}]}}]}' style="--primary: var(--package-color); margin-top: auto;">
                        <span style="display: block;"><?php _e( 'Let\'s talk', 'jupiter_and_the_giraffe' ); ?></span>
                    </button>
                </div>
                <div class="our-packages__package" style="--package-color: #6AB092;" data-pg-ia-hide="desktop">
                    <h3 class="our-packages__package-title"><?php _e( 'Custom Experience', 'jupiter_and_the_giraffe' ); ?></h3><span class="our-packages__package-price"><?php _e( '&pound;60,000', 'jupiter_and_the_giraffe' ); ?></span>
                    <div class="our-packages__package-break"></div>
                    <ul class="our-packages__package-benefit-list">
                        <li>
                            <div class="our-packages__package-benefit-title">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="our-packages__package-benefit-title-point">
                                    <path d="M0 7.71647V4.10824L3.60824 0.5H7.21647V4.10824H5.4129L3.60824 5.95794V7.71647H0Z" fill="var(--package-color)"></path>
                                    <path d="M19.9977 7.71647V4.10824L16.3895 0.5H12.7812V4.10824H14.5859L16.3895 5.95794V7.71647H19.9977Z" fill="var(--package-color)"></path>
                                    <path d="M19.9977 13.2837V16.8919L16.3895 20.5002H12.7812V16.8919H14.5859L16.3895 15.0422V13.2837H19.9977Z" fill="var(--package-color)"></path>
                                    <path d="M0 13.2837V16.8919L3.60824 20.5002H7.21647V16.8919H5.4129L3.60824 15.0422V13.2837H0Z" fill="var(--package-color)"></path>
                                    <path d="M14.6377 5.86084H12.7816L9.99797 8.64445L7.21436 5.86084H5.35938V7.71583L8.14298 10.4994L5.35938 13.283V15.1392H7.21436L9.99797 12.3555L12.7816 15.1392H14.6377V13.283L11.8541 10.4994L14.6377 7.71583V5.86084Z" fill="var(--package-color)"></path>
                                </svg>
                                <?php _e( 'No limits', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <p><?php _e( 'Your wildest dreams brought into reality by partenring with our all-star team to strategise, design and develop a web-based game/app or website.', 'jupiter_and_the_giraffe' ); ?></p>
                        </li>
                        <li>
                            <div class="our-packages__package-benefit-title">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="our-packages__package-benefit-title-point">
                                    <path d="M0 7.71647V4.10824L3.60824 0.5H7.21647V4.10824H5.4129L3.60824 5.95794V7.71647H0Z" fill="var(--package-color)"/>
                                    <path d="M19.9977 7.71647V4.10824L16.3895 0.5H12.7812V4.10824H14.5859L16.3895 5.95794V7.71647H19.9977Z" fill="var(--package-color)"/>
                                    <path d="M19.9977 13.2837V16.8919L16.3895 20.5002H12.7812V16.8919H14.5859L16.3895 15.0422V13.2837H19.9977Z" fill="var(--package-color)"/>
                                    <path d="M0 13.2837V16.8919L3.60824 20.5002H7.21647V16.8919H5.4129L3.60824 15.0422V13.2837H0Z" fill="var(--package-color)"/>
                                    <path d="M14.6377 5.86084H12.7816L9.99797 8.64445L7.21436 5.86084H5.35938V7.71583L8.14298 10.4994L5.35938 13.283V15.1392H7.21436L9.99797 12.3555L12.7816 15.1392H14.6377V13.283L11.8541 10.4994L14.6377 7.71583V5.86084Z" fill="var(--package-color)"/>
                                </svg>
                                <?php _e( 'Hand crafted', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <p><?php _e( 'We utilise the latest technologies, whatever it takes to hand-build your experience using code.', 'jupiter_and_the_giraffe' ); ?></p>
                        </li>
                        <li>
                            <div class="our-packages__package-benefit-title">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" class="our-packages__package-benefit-title-point">
                                    <path d="M0 7.71647V4.10824L3.60824 0.5H7.21647V4.10824H5.4129L3.60824 5.95794V7.71647H0Z" fill="var(--package-color)"/>
                                    <path d="M19.9977 7.71647V4.10824L16.3895 0.5H12.7812V4.10824H14.5859L16.3895 5.95794V7.71647H19.9977Z" fill="var(--package-color)"/>
                                    <path d="M19.9977 13.2837V16.8919L16.3895 20.5002H12.7812V16.8919H14.5859L16.3895 15.0422V13.2837H19.9977Z" fill="var(--package-color)"/>
                                    <path d="M0 13.2837V16.8919L3.60824 20.5002H7.21647V16.8919H5.4129L3.60824 15.0422V13.2837H0Z" fill="var(--package-color)"/>
                                    <path d="M14.6377 5.86084H12.7816L9.99797 8.64445L7.21436 5.86084H5.35938V7.71583L8.14298 10.4994L5.35938 13.283V15.1392H7.21436L9.99797 12.3555L12.7816 15.1392H14.6377V13.283L11.8541 10.4994L14.6377 7.71583V5.86084Z" fill="var(--package-color)"/>
                                </svg>
                                <?php _e( 'No compromises', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <p><?php _e( 'Whether you need your immersive experience to exist online or offline, in a show or at a convention, we know there are no compromises made with web technologies.', 'jupiter_and_the_giraffe' ); ?></p>
                        </li>
                    </ul>
                    <button type="button" class="angled-button" data-pg-ia='{"l":[{"name":"Open Dialog","t":"$.contact-us__dialog","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"autoAlpha":1,"display":"flex","pointerEvents":"auto","attr":{"open":"true"}}}]},{"t":".contact-us__dialog-inner","l":[{"t":"set","p":0,"d":0,"l":{"y":"50px","autoAlpha":0}},{"t":"tween","p":0,"d":0.5,"l":{"y":0,"autoAlpha":1,"pgCall":{"complete":"focusEl"}}}]}]}}]}' style="--primary: var(--package-color); margin-top: auto;">
                        <span style="display: block;"><?php _e( 'Let\'s talk', 'jupiter_and_the_giraffe' ); ?></span>
                    </button>
                </div>
            </div>
        </section>
        <section class="contact-us" id="contact-us" data-lets-connect>
            <div class="contact-us__content">
                <h2 class="contact-us__header"><?php _e( 'Contact', 'jupiter_and_the_giraffe' ); ?> <div class="contact-us__header-us">
                        <?php _e( 'us', 'jupiter_and_the_giraffe' ); ?>
                    </div></h2>
                <p class="contact-us__content-paragraph"><?php _e( 'Send a message regarding your immersive project or website and we&apos;ll get back to you as soon as possible.', 'jupiter_and_the_giraffe' ); ?></p>
                <a href="" class="angled-button"> <span style="display: block;"><?php _e( 'Send Transmition', 'jupiter_and_the_giraffe' ); ?></span></a>
            </div>
            <img src="https://midnightblue-beaver-232018.hostingersite.com/wp-content/uploads/2024/07/contact-us.webp" width="904px" height="619px" loading="lazy" class="contact-us__image">
        </section>
    </main>
    <footer class="footer">
        <button id="btn">
            <?php _e( 'Click me!', 'jupiter_and_the_giraffe' ); ?>
        </button>
        <div class="container">
            <div class="footer__main-wrap">
                <div>
                    <p class="footer__header"><?php _e( 'Let&apos;s Connect', 'jupiter_and_the_giraffe' ); ?> <a href="mailto:info@jupiterandthegiraffe.com" class="footer__header-link"><?php _e( 'info@jupiterandthegiraffe.com', 'jupiter_and_the_giraffe' ); ?></a></p>
                </div>
                <div>
                    <div class="footer__bottom" data-footer-bottom>
                        <?php if ( has_nav_menu( 'footer' ) ) : ?>
                            <?php
                                PG_Smart_Walker_Nav_Menu::init();
                                PG_Smart_Walker_Nav_Menu::$options['template'] = '<a class="footer__menu-link {CLASSES}" id="{ID}" {ATTRS}>{TITLE}</a>';
                                wp_nav_menu( array(
                                    'container' => '',
                                    'theme_location' => 'footer',
                                    'items_wrap' => '<div class="%2$s footer__menu" id="%1$s">%3$s</div>',
                                    'walker' => new PG_Smart_Walker_Nav_Menu()
                            ) ); ?>
                        <?php endif; ?>
                        <div class="footer__socials"><a href=""><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36 36V1H9.23529L1 11.9804V36H36Z" stroke="#3A373A" stroke-width="2"/>
                                    <path d="M29.4591 13C28.6891 13.35 27.8591 13.58 26.9991 13.69C27.8791 13.16 28.5591 12.32 28.8791 11.31C28.0491 11.81 27.1291 12.16 26.1591 12.36C25.3691 11.5 24.2591 11 22.9991 11C20.6491 11 18.7291 12.92 18.7291 15.29C18.7291 15.63 18.7691 15.96 18.8391 16.27C15.2791 16.09 12.1091 14.38 9.99906 11.79C9.62906 12.42 9.41906 13.16 9.41906 13.94C9.41906 15.43 10.1691 16.75 11.3291 17.5C10.6191 17.5 9.95906 17.3 9.37906 17V17.03C9.37906 19.11 10.8591 20.85 12.8191 21.24C12.1899 21.4129 11.5291 21.4369 10.8891 21.31C11.1607 22.1625 11.6926 22.9084 12.4101 23.4429C13.1276 23.9775 13.9945 24.2737 14.8891 24.29C13.3727 25.4905 11.4931 26.1394 9.55906 26.13C9.21906 26.13 8.87906 26.11 8.53906 26.07C10.4391 27.29 12.6991 28 15.1191 28C22.9991 28 27.3291 21.46 27.3291 15.79C27.3291 15.6 27.3291 15.42 27.3191 15.23C28.1591 14.63 28.8791 13.87 29.4591 13Z" fill="#3A373A"/>
                                </svg></a><a href=""><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26 10C26.5304 10 27.0391 10.2107 27.4142 10.5858C27.7893 10.9609 28 11.4696 28 12V26C28 26.5304 27.7893 27.0391 27.4142 27.4142C27.0391 27.7893 26.5304 28 26 28H12C11.4696 28 10.9609 27.7893 10.5858 27.4142C10.2107 27.0391 10 26.5304 10 26V12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10H26ZM25.5 25.5V20.2C25.5 19.3354 25.1565 18.5062 24.5452 17.8948C23.9338 17.2835 23.1046 16.94 22.24 16.94C21.39 16.94 20.4 17.46 19.92 18.24V17.13H17.13V25.5H19.92V20.57C19.92 19.8 20.54 19.17 21.31 19.17C21.6813 19.17 22.0374 19.3175 22.2999 19.5801C22.5625 19.8426 22.71 20.1987 22.71 20.57V25.5H25.5ZM13.88 15.56C14.3256 15.56 14.7529 15.383 15.0679 15.0679C15.383 14.7529 15.56 14.3256 15.56 13.88C15.56 12.95 14.81 12.19 13.88 12.19C13.4318 12.19 13.0019 12.3681 12.685 12.685C12.3681 13.0019 12.19 13.4318 12.19 13.88C12.19 14.81 12.95 15.56 13.88 15.56ZM15.27 25.5V17.13H12.5V25.5H15.27Z" fill="#3A373A"/>
                                    <path d="M36 36V1H9.23529L1 11.9804V36H36Z" stroke="#3A373A" stroke-width="2"/>
                                </svg></a>
                        </div>
                    </div>
                    <div class="footer__copyright-wrap">
                        <p class="footer__copyright"><span><?php the_time('Y'); ?></span> <?php _e( 'J&amp;TG', 'jupiter_and_the_giraffe' ); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>        

<?php get_footer( 'page-home' ); ?>