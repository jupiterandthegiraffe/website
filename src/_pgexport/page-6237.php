<?php get_header(); ?>

<div class="container page-container">
    <h1 class="page__title" data-about-page-title data-pg-ia-hide><?php the_title(); ?></h1>
    <div class="page__intro" data-about-page-intro data-pg-ia-hide>
        <?php the_content(); ?>
    </div>
    <div>
        <?php
            $posts_query_args = array(
                'post_type' => 'post',
                'nopaging' => true,
                'order' => 'DESC',
                'orderby' => 'date'
            )
        ?>
        <?php $posts_query = new WP_Query( $posts_query_args ); ?>
        <?php if ( $posts_query->have_posts() ) : ?>
            <div class="results__list results__list--main">
                <?php while ( $posts_query->have_posts() ) : $posts_query->the_post(); ?>
                    <?php PG_Helper_v2::rememberShownPost(); ?>
                    <div id="post-<?php the_ID(); ?>" <?php post_class( 'results__item' ); ?>><a href="<?php echo esc_url( the_permalink() ); ?>"> <div class="results__item-content">
                                <div class="results__item-header">
                                    <h2 class="results__item-title"><?php the_title(); ?></h2>
                                    <p class="results__item-tagline"><?php echo get_field( 'misc_info' ); ?></p>
                                </div><span class="results__item-tag"><?php _e( 'Blog', 'jupiter_and_the_giraffe' ); ?></span>
                            </div> <?php echo PG_Image::getPostImage( null, 'large', array(
                                    'class' => 'results__item-image',
                                    'sizes' => '(max-width: 100px) 98px, (max-width: 568px) 94vw, (max-width: 1098px) 46vw, 630px'
                            ), 'both', null ) ?></a>
                    </div>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            </div>
        <?php else : ?>
            <p><?php _e( 'Sorry, no posts matched your criteria.', 'jupiter_and_the_giraffe' ); ?></p>
        <?php endif; ?>
        <section class="contact-us" id="contact-us" data-contact-us-section>
            <div class="contact-us__content">
                <h2 class="contact-us__header" data-contact-us-header> <?php _e( 'Contact', 'jupiter_and_the_giraffe' ); ?> <div class="contact-us__header-us">
                        <?php _e( 'us', 'jupiter_and_the_giraffe' ); ?>
                    </div> </h2>
                <p class="contact-us__content-paragraph" data-contact-us-paragraph> <?php _e( 'Are you ready to take the next step?', 'jupiter_and_the_giraffe' ); ?> </p>
                <button class="angled-button" data-contact-us-button="" data-pg-ia='{"l":[{"name":"Open Contact Us Dialog","t":"$.contact-us__dialog","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"autoAlpha":1,"display":"flex","attr":{"open":"true"},"pointerEvents":"auto"}}]},{"t":".contact-us__dialog-inner","l":[{"t":"set","p":0,"d":0,"l":{"y":"50px"}},{"t":"tween","p":0,"d":0.5,"l":{"y":0,"autoAlpha":1,"pgCall":{"complete":"focusEl"}}}]}]}}]}'><span><?php _e( 'Send Transmission', 'jupiter_and_the_giraffe' ); ?></span>
                </button>
            </div>
            <img src="<?php echo get_template_directory_uri(); ?>/wp-content/uploads/2024/07/contact-us.webp" width="904px" height="619px" loading="lazy" class="contact-us__image" data-contact-us-image/>
            <div class="contact-us__dialog" open="false" data-pg-ia='{"l":[{"name":"Close Contact Us Dialog","t":"$.contact-us__dialog","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"autoAlpha":0,"pgCall":{"complete":"clearDialogAttributes"},"attr":{"open":"false"}}}]}]},"trg":"no"}]}'>
                <div class="contact-us__dialog-inner">
                    <button class="contact-us__dialog-close-button" aria-label="Close contact us dialog" data-pg-ia='{"l":[{"name":"Close Contact Us Dialog","t":"$.contact-us__dialog","a":{"l":[{"t":"","l":[{"t":"tween","p":0,"d":0.5,"l":{"autoAlpha":0,"pgCall":{"complete":"clearDialogAttributes"},"attr":{"open":"false"}}}]}]}}]}' data-contact-us-close>
                        <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2.70711" y1="1.29289" x2="27.4558" y2="26.0416" stroke="#FF4D14" stroke-width="2"></line>
                            <line x1="1.29289" y1="26.2929" x2="26.0416" y2="1.54416" stroke="#FF4D14" stroke-width="2"></line>
                        </svg>
                    </button>
                    <div class="contact-us__dialog-column">
                        <h3 class="contact-us__dialog-title"><?php _e( 'Send message', 'jupiter_and_the_giraffe' ); ?></h3>
                        <form data-contact-form>
                            <div class="sr-only">
                                <label for="hnypt">
                                    <?php _e( 'Human\'s beware', 'jupiter_and_the_giraffe' ); ?>
                                </label>
                                <input id="hnypt" name="hnypt" type="checkbox" required="required"/>
                            </div>
                            <div class="contact-us__form-input-wrapper">
                                <label for="name"> 
                                    <?php _e( 'Full name', 'jupiter_and_the_giraffe' ); ?> 
                                </label>
                                <input id="name" name="name" type="text" required="true"/>
                            </div>
                            <div class="contact-us__form-input-wrapper">
                                <label for="email"> 
                                    <?php _e( 'Company email', 'jupiter_and_the_giraffe' ); ?> 
                                </label>
                                <input id="email" name="email" type="email" required="true"/>
                            </div>
                            <div class="contact-us__form-input-wrapper">
                                <label for="message"> 
                                    <?php _e( 'Message', 'jupiter_and_the_giraffe' ); ?> 
                                </label>
                                <textarea id="message" name="message" rows="5" required="true"></textarea>
                            </div>
                            <button type="submit" class="angled-button"><span><?php _e( 'Send transmission', 'jupiter_and_the_giraffe' ); ?></span>
                            </button>
                            <div class="contact-us__error">
                                <?php _e( 'There was a problem, try again', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                            <div class="contact-us__success">
                                <?php _e( 'Your message was sent!', 'jupiter_and_the_giraffe' ); ?>
                            </div>
                        </form>
                    </div>
                    <div class="contact-us__dialog-column" style="display: none">
                        <h3 class="contact-us__dialog-title contact-us__dialog-title--book"> <?php _e( 'Book a call', 'jupiter_and_the_giraffe' ); ?> </h3>
                    </div><span class="contact-us__dialog-inner-divide" style="display: none"></span>
                </div>
            </div>
        </section>
    </div>
</div>            

<?php get_footer(); ?>