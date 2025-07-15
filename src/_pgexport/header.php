<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <!-- prettier-ignore -->
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
        <?php wp_head(); ?>
    </head>
    <body class="<?php echo implode(' ', get_body_class()); ?>">
        <?php if( function_exists( 'wp_body_open' ) ) wp_body_open(); ?>
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PC4ZCSK" height="0" width="0" style="display: none; visibility: hidden"></iframe>
        </noscript>
        <nav data-mobile-menu-moon data-pg-ia-hide data-main-nav>
            <div class="main-nav">
                <div class="container">
                    <div class="main-nav-wrapper"><a class="main-nav-home" href="<?php echo esc_url( home_url() ); ?>"><svg width="57" height="30" viewBox="0 0 57 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M56.8923 10.1575H48.8707V14.8874H35.5155V9.93106L38.7921 6.53504H56.8256V0H36.274L29.0352 7.50184V21.4286H50.4119L56.8923 14.8874V10.1575Z" fill="var(--dark)"/>
                                <path d="M20.263 7.5H12.7908V13.9715H20.263V16.2166V16.7329V18.6239L15.7822 22.9402L15.1181 23.5886H0.105469V30H8.48376H8.80648H17.8799L26.8912 21.2833V16.7329V16.2166V7.5H20.263Z" fill="var(--dark)"/>
                            </svg> </a>
                        <div class="main-nav__nav" data-main-menu>
                            <?php if ( has_nav_menu( 'primary' ) ) : ?>
                                <?php
                                    PG_Smart_Walker_Nav_Menu::init();
                                    PG_Smart_Walker_Nav_Menu::$options['template'] = '<li>
                                                                        <a class="main-nav__list-link {CLASSES}" id="{ID}" {ATTRS}>{TITLE}</a>
                                                                    </li>';
                                    PG_Smart_Walker_Nav_Menu::$options['current_class'] = 'current_page_item';
                                    wp_nav_menu( array(
                                        'container' => '',
                                        'theme_location' => 'primary',
                                        'items_wrap' => '<ul class="%2$s main-nav__list" id="%1$s">%3$s</ul>',
                                        'walker' => new PG_Smart_Walker_Nav_Menu()
                                ) ); ?>
                            <?php endif; ?>
                            <button type="button" aria-label="Open menu" class="main-nav__menu-button" data-pg-ia='{"l":[{"name":"Open Navigation","t":"$.main-nav__mobile-menu","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"x":0}}]},{"t":"li","l":[{"t":"set","p":0,"d":0,"l":{"x":"-38px","y":"-29px"}},{"t":"tween","p":0,"d":1,"s":0.025,"l":{"x":0,"y":0}}]},{"t":"$body","l":[{"t":"set","p":0,"d":0,"l":{"overflow":"hidden","height":"100%"}}]}]}}]}'>
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: middle">
                                    <path d="M47.9007 35.0251L34.104 48.2829L14.9737 47.9019L1.71586 34.1052L2.09687 14.9749L15.8935 1.71706L35.0239 2.09807L48.2817 15.8947L47.9007 35.0251Z" stroke="var(--dark)" stroke-width="2"/>
                                    <line x1="12.8555" y1="21.8574" x2="37.8555" y2="21.8574" stroke="var(--dark)" stroke-width="2"/>
                                    <line x1="12.8555" y1="26.8574" x2="37.8555" y2="26.8574" stroke="var(--dark)" stroke-width="2"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main-nav__mobile-menu">
                <div class="main-nav__mobile-menu-header">
                    <button aria-label="Close navigation" style="
              background-color: transparent;
              border-width: 0;
              padding: 1.375rem;
              margin: 0;
            " data-pg-ia='{"l":[{"name":"Close Navigation","t":"$.main-nav__mobile-menu","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.25,"l":{"x":"100%"}}]},{"t":"li","l":[{"t":"tween","p":0,"d":0.25,"l":{"pgCall":{"complete":"clearDialogAttributes"}}}]},{"t":"$body","l":[{"t":"tween","p":0,"d":0.5,"l":{"pgCall":{"complete":"clearDialogAttributes"}}}]}]}}]}' data-close-navigation-link>
                        <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2.70711" y1="1.29289" x2="27.4558" y2="26.0416" stroke="#FF4D14" stroke-width="2"/>
                            <line x1="1.29289" y1="26.2933" x2="26.0416" y2="1.54452" stroke="#FF4D14" stroke-width="2"/>
                        </svg>
                    </button>
                    <h2 style="
              -webkit-text-stroke: 1px #555355;
              font-size: 2.1875rem;
              text-transform: uppercase;
              background-color: transparent;
            "> <?php _e( 'Navigation', 'jupiter_and_the_giraffe' ); ?> </h2>
                </div>
                <div class="main-nav__mobile-menu-links">
                    <?php if ( has_nav_menu( 'primary' ) ) : ?>
                        <?php
                            PG_Smart_Walker_Nav_Menu::init();
                            PG_Smart_Walker_Nav_Menu::$options['template'] = '<li class="main-nav__mobile-menu-list-item {CLASSES}" id="{ID}">
                                                        <a class="main-nav__mobile-menu-link" {ATTRS}><img src="/wp-content/uploads/2024/08/moon.png" class="main-nav__mobile-menu-moon" data-mobile-menu-moon/>{TITLE}</a>
                                                    </li>';
                            wp_nav_menu( array(
                                'container' => '',
                                'theme_location' => 'primary',
                                'items_wrap' => '<ul class="%2$s main-nav__mobile-menu-list" id="%1$s">%3$s</ul>',
                                'walker' => new PG_Smart_Walker_Nav_Menu()
                        ) ); ?>
                    <?php endif; ?>
                    <img src="<?php echo get_template_directory_uri(); ?>/wp-content/uploads/2024/08/rings.png" width="428" class="main-nav__mobile-menu-rings"/>
                </div>
            </div>
        </nav>
        <main>