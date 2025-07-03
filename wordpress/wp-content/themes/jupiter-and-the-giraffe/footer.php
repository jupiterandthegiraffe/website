
</main>
        <footer class="footer">
            <div class="container">
                <div class="footer__main-wrap">
                    <div>
                        <p class="footer__header" data-footer-lets-connect data-pg-ia-hide> <?php _e( 'Let&apos;s Connect', 'jupiter_and_the_giraffe' ); ?> <a href="mailto:info@jupiterandthegiraffe.com" class="footer__header-link"><?php _e( 'info@jupiterandthegiraffe.com', 'jupiter_and_the_giraffe' ); ?></a> </p>
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
                            <div class="footer__socials"><a href="https://www.linkedin.com/company/jupiterandthegiraffe/" target="_blank" aria-label="Go to Jupiter and the Giraffe Linkedin"><svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M26 10C26.5304 10 27.0391 10.2107 27.4142 10.5858C27.7893 10.9609 28 11.4696 28 12V26C28 26.5304 27.7893 27.0391 27.4142 27.4142C27.0391 27.7893 26.5304 28 26 28H12C11.4696 28 10.9609 27.7893 10.5858 27.4142C10.2107 27.0391 10 26.5304 10 26V12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10H26ZM25.5 25.5V20.2C25.5 19.3354 25.1565 18.5062 24.5452 17.8948C23.9338 17.2835 23.1046 16.94 22.24 16.94C21.39 16.94 20.4 17.46 19.92 18.24V17.13H17.13V25.5H19.92V20.57C19.92 19.8 20.54 19.17 21.31 19.17C21.6813 19.17 22.0374 19.3175 22.2999 19.5801C22.5625 19.8426 22.71 20.1987 22.71 20.57V25.5H25.5ZM13.88 15.56C14.3256 15.56 14.7529 15.383 15.0679 15.0679C15.383 14.7529 15.56 14.3256 15.56 13.88C15.56 12.95 14.81 12.19 13.88 12.19C13.4318 12.19 13.0019 12.3681 12.685 12.685C12.3681 13.0019 12.19 13.4318 12.19 13.88C12.19 14.81 12.95 15.56 13.88 15.56ZM15.27 25.5V17.13H12.5V25.5H15.27Z" fill="currentColor"/>
                                        <path d="M36 36V1H9.23529L1 11.9804V36H36Z" stroke="currentColor" stroke-width="2"/>
                                    </svg> </a><a href="https://be.net/jatg" target="_blank" aria-label="Go to Jupiter and the Giraffe Behance"> <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36 36.3789V1.37891H9.23529L1 12.3593V36.3789H36Z" stroke="currentColor" stroke-width="2"/>
                                        <g clip-path="url(#clip0_1920_548)">
                                            <path d="M30 14H23V12H30V14ZM31.726 24C31.284 25.297 29.697 27 26.625 27C23.551 27 21.061 25.271 21.061 21.325C21.061 17.415 23.386 15.405 26.527 15.405C29.609 15.405 31.491 17.187 31.902 19.831C31.98 20.337 32.011 21.019 31.997 21.971H23.97C24.1 25.182 27.453 25.283 28.558 24H31.726ZM24.04 20H29.005C28.9 18.453 27.869 17.781 26.528 17.781C25.062 17.781 24.251 18.549 24.04 20ZM14.466 26.988H8V12.021H14.953C20.429 12.102 20.533 17.465 17.673 18.927C21.134 20.187 21.25 26.988 14.466 26.988ZM11 18H14.584C17.092 18 17.49 15 14.272 15H11V18ZM14.391 21H11V24.016H14.341C17.396 24.016 17.209 21 14.391 21Z" fill="currentColor"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1920_548">
                                                <rect width="24" height="24" fill="white" transform="translate(8 7)"/>
                                            </clipPath>
                                        </defs>
                                    </svg> </a><a href="https://youtube.com/@jupiterandthegiraffe" target="_blank" aria-label="Go to Jupiter and the Giraffe Youtube"> <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36 36.3789V1.37891H9.23529L1 12.3593V36.3789H36Z" stroke="currentColor" stroke-width="2"/>
                                        <g clip-path="url(#clip0_1920_567)">
                                            <path d="M26.2232 11.3633H12.7768C10.1386 11.3633 8 13.5019 8 16.1401V22.8619C8 25.5 10.1386 27.6387 12.7768 27.6387H26.2232C28.8614 27.6387 31 25.5 31 22.8619V16.1401C31 13.5019 28.8614 11.3633 26.2232 11.3633ZM22.9927 19.828L16.7034 22.8276C16.5358 22.9076 16.3422 22.7854 16.3422 22.5997V16.413C16.3422 16.2247 16.5409 16.1027 16.7088 16.1878L22.9981 19.3749C23.1851 19.4696 23.1819 19.7378 22.9927 19.828Z" fill="currentColor"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1920_567">
                                                <rect width="23" height="23" fill="white" transform="translate(8 8)"/>
                                            </clipPath>
                                        </defs>
                                    </svg> </a>
                            </div>
                        </div>
                        <div class="footer__copyright-wrap">
                            <p class="footer__copyright" data-footer-copyright> <?php the_time('Y'); ?> <?php _e( 'J&amp;TG', 'jupiter_and_the_giraffe' ); ?> </p>
                        </div>
                    </div>
                </div>
                <p class="footer__copyright-notice"> <?php _e( '&copy; 2019 -', 'jupiter_and_the_giraffe' ); ?> <span><?php the_time('Y'); ?></span> </p>
            </div>
        </footer>
        <div class="cookie-banner" data-pg-ia-hide id="cookie-consent">
            <div class="cookie-banner__content">
                <p class="cookie-banner__text"> <?php _e( 'Let\'s be clear, we use anonymised analytics to see how you got here as', 'jupiter_and_the_giraffe' ); ?> <?php _e( 'well as what pages you visit to better understand our users and', 'jupiter_and_the_giraffe' ); ?> <?php _e( 'improve the website. We DON\'T use ad trackers. If you want to read', 'jupiter_and_the_giraffe' ); ?> <?php _e( 'more about it, check out our', 'jupiter_and_the_giraffe' ); ?> <a href="<?php echo esc_url( get_permalink( '5430' ) ); ?>"><?php _e( 'privacy policy', 'jupiter_and_the_giraffe' ); ?></a> <?php _e( 'but we believe we are using essential trackers that most websites', 'jupiter_and_the_giraffe' ); ?> <?php _e( 'don\'t let you switch off anyway.', 'jupiter_and_the_giraffe' ); ?> </p>
                <button class="cookie-banner__accept" data-cookie-accept>
                    <?php _e( 'Acknowledge message', 'jupiter_and_the_giraffe' ); ?>
                </button>
            </div>
        </div>
        <?php wp_footer(); ?>
    </body>
</html>
