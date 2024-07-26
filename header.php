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
        <header>
            <div class="container">
                <div class="main-nav-wrapper">
                    <a class="main-nav-home" href="<?php echo esc_url( home_url() ); ?>"><svg width="57" height="30" viewBox="0 0 57 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M56.8923 10.1575H48.8707V14.8874H35.5155V9.93106L38.7921 6.53504H56.8256V0H36.274L29.0352 7.50184V21.4286H50.4119L56.8923 14.8874V10.1575Z" fill="#3A373A"/>
                            <path d="M20.263 7.5H12.7908V13.9715H20.263V16.2166V16.7329V18.6239L15.7822 22.9402L15.1181 23.5886H0.105469V30H8.48376H8.80648H17.8799L26.8912 21.2833V16.7329V16.2166V7.5H20.263Z" fill="#3A373A"/>
                        </svg></a>
                    <div style="display: flex; flex-grow: 1; justify-content: flex-end; align-items: center; padding-right: 1rem;">
                        <button type="button" aria-label="Open menu" style="background-color: transparent; border-style: none; display: flex; align-items: center; justify-content: center; padding: 0; margin: 0;">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M47.9007 35.0251L34.104 48.2829L14.9737 47.9019L1.71586 34.1052L2.09687 14.9749L15.8935 1.71706L35.0239 2.09807L48.2817 15.8947L47.9007 35.0251Z" stroke="#3A373A" stroke-width="2"/>
                                <line x1="12.8555" y1="21.8574" x2="37.8555" y2="21.8574" stroke="#3A373A" stroke-width="2"/>
                                <line x1="12.8555" y1="26.8574" x2="37.8555" y2="26.8574" stroke="#3A373A" stroke-width="2"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
        <main>