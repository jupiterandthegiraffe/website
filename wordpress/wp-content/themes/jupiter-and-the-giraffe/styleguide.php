<?php get_header(); ?>

<header class="main-nav">
    <div class="container">
        <div class="main-nav-wrapper">
            <a class="main-nav-home" href="<?php echo esc_url( home_url() ); ?>"><svg width="57" height="30" viewBox="0 0 57 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.8923 10.1575H48.8707V14.8874H35.5155V9.93106L38.7921 6.53504H56.8256V0H36.274L29.0352 7.50184V21.4286H50.4119L56.8923 14.8874V10.1575Z" fill="var(--dark)"/>
                    <path d="M20.263 7.5H12.7908V13.9715H20.263V16.2166V16.7329V18.6239L15.7822 22.9402L15.1181 23.5886H0.105469V30H8.48376H8.80648H17.8799L26.8912 21.2833V16.7329V16.2166V7.5H20.263Z" fill="var(--dark)"/>
                </svg></a>
            <div class="main-nav__nav" data-main-menu>
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
    <a href="" class="angled-button"> <span style="display: block;"><?php _e( 'Discover more', 'jupiter_and_the_giraffe' ); ?></span></a>
    <section class="contact-us" id="contact-us" data-contact-us-section>
        <div class="contact-us__content">
            <h2 class="contact-us__header" data-contact-us-header><?php _e( 'Contact', 'jupiter_and_the_giraffe' ); ?> <div class="contact-us__header-us">
                    <?php _e( 'us', 'jupiter_and_the_giraffe' ); ?>
                </div></h2>
            <p class="contact-us__content-paragraph" data-contact-us-paragraph><?php _e( 'Send a message regarding your immersive project or website and we&apos;ll get back to you as soon as possible.', 'jupiter_and_the_giraffe' ); ?></p>
            <button class="angled-button" data-contact-us-button="" data-pg-ia='{"l":[{"name":"Open Contact Us Dialog","t":"$.contact-us__dialog","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"autoAlpha":1,"display":"flex","attr":{"open":"true"},"pointerEvents":"auto"}}]},{"t":".contact-us__dialog-inner","l":[{"t":"set","p":0,"d":0,"l":{"y":"50px"}},{"t":"tween","p":0,"d":0.5,"l":{"y":0,"autoAlpha":1,"pgCall":{"complete":"focusEl"}}}]}]}}]}'> <span><?php _e( 'Send Transmition', 'jupiter_and_the_giraffe' ); ?></span>
            </button>
        </div>
        <img src="<?php echo get_template_directory_uri(); ?>/wp-content/uploads/2024/07/contact-us.webp" width="904px" height="619px" loading="lazy" class="contact-us__image" data-contact-us-image/>
        <div class="contact-us__dialog" open="false">
            <div class="contact-us__dialog-inner">
                <button class="contact-us__dialog-close-button" aria-label="Close contact us dialog" data-pg-ia="{&quot;l&quot;:[{&quot;name&quot;:&quot;Close Contact Us Dialog&quot;,&quot;t&quot;:&quot;$.contact-us__dialog&quot;,&quot;a&quot;:{&quot;l&quot;:[{&quot;t&quot;:&quot;&quot;,&quot;l&quot;:[{&quot;t&quot;:&quot;tween&quot;,&quot;p&quot;:0,&quot;d&quot;:0.5,&quot;l&quot;:{&quot;autoAlpha&quot;:0,&quot;pgCall&quot;:{&quot;complete&quot;:&quot;clearDialogAttributes&quot;},&quot;attr&quot;:{&quot;open&quot;:&quot;false&quot;}}}]}]}}]}">
                    <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.70711" y1="1.29289" x2="27.4558" y2="26.0416" stroke="#FF4D14" stroke-width="2"></line>
                        <line x1="1.29289" y1="26.2929" x2="26.0416" y2="1.54416" stroke="#FF4D14" stroke-width="2"></line>
                    </svg>
                </button>
                <div class="contact-us__dialog-column">
                    <h3 class="contact-us__dialog-title"><?php _e( 'Send message', 'jupiter_and_the_giraffe' ); ?></h3>
                    <form>
                        <div class="contact-us__form-input-wrapper">
                            <label for="name">
                                <?php _e( 'Full name', 'jupiter_and_the_giraffe' ); ?> 
                            </label>
                            <input id="name" name="name" type="text">
                        </div>
                        <div class="contact-us__form-input-wrapper">
                            <label for="email">
                                <?php _e( 'Email', 'jupiter_and_the_giraffe' ); ?> 
                            </label>
                            <input id="email" name="email" type="email">
                        </div>
                        <div class="contact-us__form-input-wrapper">
                            <label for="company">
                                <?php _e( 'Company', 'jupiter_and_the_giraffe' ); ?> 
                            </label>
                            <input id="company" name="company" type="text">
                        </div>
                        <div class="contact-us__form-input-wrapper">
                            <label for="message">
                                <?php _e( 'Message', 'jupiter_and_the_giraffe' ); ?> 
                            </label>
                            <textarea id="message" name="message" rows="4"></textarea>
                        </div>
                        <button type="submit" class="angled-button"><span><?php _e( 'Send transmission', 'jupiter_and_the_giraffe' ); ?></span>
                        </button>
                        <div class="contact-us__error">
                            <?php _e( 'Your message was sent!', 'jupiter_and_the_giraffe' ); ?> 
                        </div>
                        <div class="contact-us__success">
                            <?php _e( 'There was a problem, try again', 'jupiter_and_the_giraffe' ); ?> 
                        </div>
                    </form>
                </div>
                <div class="contact-us__dialog-column">
                    <h3 class="contact-us__dialog-title contact-us__dialog-title--book"><?php _e( 'Book a call', 'jupiter_and_the_giraffe' ); ?></h3>
                </div><span class="contact-us__dialog-inner-divide"></span>
            </div>
        </div>
    </section>
</main>
<footer class="footer">
    <div class="container">
        <div class="footer__main-wrap">
            <div>
                <p class="footer__header" data-footer-lets-connect data-pg-ia-hide><?php _e( 'Let&apos;s Connect', 'jupiter_and_the_giraffe' ); ?> <a href="mailto:info@jupiterandthegiraffe.com" class="footer__header-link"><?php _e( 'info@jupiterandthegiraffe.com', 'jupiter_and_the_giraffe' ); ?></a></p>
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

<?php get_footer(); ?>