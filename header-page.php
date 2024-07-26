<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
        <?php wp_head(); ?>
    </head>
    <body class="<?php echo implode(' ', get_body_class()); ?>">
        <?php if( function_exists( 'wp_body_open' ) ) wp_body_open(); ?>
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
        <main class="page-main">