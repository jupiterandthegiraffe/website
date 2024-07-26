<?php get_header( 'page-189' ); ?>

<div class="container page-container">
    <h1 class="page__title" data-about-page-title data-pg-ia-hide><?php the_title(); ?></h1>
    <div class="page__intro" data-about-page-intro data-pg-ia-hide>
        <?php the_content(); ?>
    </div>
    <div>
        <?php
            $featured_case_study_args = array(
                'post_type' => 'result',
                'meta_key' => 'featured',
                'meta_value' => '1'
            )
        ?>
        <?php $featured_case_study = new WP_Query( $featured_case_study_args ); ?>
        <?php if ( $featured_case_study->have_posts() ) : ?>
            <?php $featured_case_study_item_number = 0; ?>
            <?php while ( $featured_case_study->have_posts() && $featured_case_study_item_number++ < 1 ) : $featured_case_study->the_post(); ?>
                <?php PG_Helper_v2::rememberShownPost(); ?>
                <div class="results__list results__list--featured">
                    <div class="results__item results__item--featured">
                        <div class="results__item-content">
                            <div class="results__item-header">
                                <h2 class="results__item-title"><?php the_title(); ?></h2>
                                <p style="font-family: var(--ywf--family-dm-mono); font-size: 1.5rem; font-weight: 500;"><?php echo get_field( 'misc_info' ); ?></p>
                            </div>
                            <span class="results__item-tag"><?php echo get_field( 'type' ); ?></span>
                        </div>
                        <?php echo PG_Image::getPostImage( null, 'full', array(
                                'class' => 'results__item-image'
                        ), 'both', null ) ?>
                    </div>
                </div>
            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>
        <?php endif; ?>
        <?php
            $result_query_args = array(
                'post__not_in' => PG_Helper_v2::getShownPosts(),
                'post_type' => array( 'result', 'post' ),
                'nopaging' => true,
                'order' => 'ASC',
                'orderby' => 'date'
            )
        ?>
        <?php $result_query = new WP_Query( $result_query_args ); ?>
        <?php if ( $result_query->have_posts() ) : ?>
            <div class="results__list results__list--main">
                <?php while ( $result_query->have_posts() ) : $result_query->the_post(); ?>
                    <?php PG_Helper_v2::rememberShownPost(); ?>
                    <div class="results__item <?php echo get_field("featured") ? "featured" : "" ?> <?php echo join( ' ', get_post_class( '' ) ) ?>" id="post-<?php the_ID(); ?>">
                        <?php if ( get_field( "type" ) == "Testimonial" ) : ?>
                            <div>
                                <div class="results__item-content results__item-content--testimonial">
                                    <div class="results__item-header">
                                        <h2 class="results__item-content--testimonial results__item-title results__item-title--testimonial"><?php the_title(); ?></h2>
                                        <p class="results__item-tagline"><?php echo get_field( 'misc_info' ); ?></p>
                                    </div><span class="results__item-tag"><?php echo get_field( 'type' ); ?></span>
                                    <?php echo PG_Image::getPostImage( null, 'full', array(
                                            'class' => 'results__item-testimonial-image',
                                            'loading' => 'lazy'
                                    ), null, null ) ?>
                                </div>
                            </div>
                        <?php else : ?>
                            <div>
                                <div class="results__item-content">
                                    <div class="results__item-header">
                                        <h2 class="results__item-title"><?php the_title(); ?></h2>
                                        <p class="results__item-tagline"><?php echo get_field( 'misc_info' ); ?></p>
                                    </div>
                                    <?php if ( get_post_type( $post->ID ) !== "post" ) : ?>
                                        <span class="results__item-tag"><?php echo get_field( 'type' ); ?></span>
                                    <?php else : ?>
                                        <span class="results__item-tag"><?php _e( 'Blog', 'jupiter_and_the_giraffe' ); ?></span>
                                    <?php endif; ?>
                                </div>
                                <?php if ( get_field('type') != "Award" ) : ?>
                                    <?php echo PG_Image::getPostImage( null, 'full', array(
                                            'class' => 'results__item-image'
                                    ), 'both', null ) ?>
                                <?php else : ?>
                                    <svg width="167" height="306" viewBox="0 0 167 306" fill="none" xmlns="http://www.w3.org/2000/svg" class="results__item-image results__item-image--medal">
                                        <g clip-path="url(#clip0_648_45)">
                                            <path d="M105.858 306H61.1208L22.3685 283.689L22.22 283.435L0 245.037V200.416L22.3685 161.763L45.6284 148.364V126.816C45.6284 118.624 52.3135 111.977 60.5054 111.977H63.1582V114.094H60.5054C53.4807 114.094 47.7507 119.809 47.7507 126.816V149.592L23.9178 163.309L2.12225 200.966V244.466L23.9178 282.123L61.6726 303.862H105.285L143.04 282.123L164.835 244.466V200.966L143.04 163.309L119.207 149.592V126.816C119.207 123.196 117.658 119.746 114.962 117.332L116.384 115.745C119.546 118.56 121.35 122.582 121.35 126.816V148.364L144.61 161.763L144.759 162.017L166.979 200.416V245.037L144.61 283.689L105.858 306Z" fill="#1F1C1D"/>
                                            <path d="M45.7562 127.302L3.24747 46.9499C3.07769 46.6112 3.07769 46.2302 3.28992 45.8915L31.3036 0.508024C31.4946 0.190509 31.8554 0.063503 32.2162 0C32.5982 0 32.9378 0.211677 33.1288 0.529192L80.8582 82.9561L79.0119 84.0145L32.1738 3.13282L5.41217 46.5054L47.645 126.308L45.7774 127.302H45.7562Z" fill="#1F1C1D"/>
                                            <path d="M109.232 128.361H54.6049C54.2229 128.361 53.8621 128.149 53.6923 127.832C53.5013 127.493 53.5013 127.091 53.6923 126.773L128.374 2.11677H32.1939C31.5997 2.11677 31.1328 1.65108 31.1328 1.05838C31.1328 0.465689 31.5997 0 32.1939 0H130.284C130.284 0 130.348 0 130.391 0C130.391 0 130.391 0 130.412 0C130.412 0 130.56 0.0846707 130.624 0.148174C130.624 0.148174 130.751 0.27518 130.794 0.359851L158.107 45.7645C158.298 46.1032 158.298 46.5054 158.107 46.8441L109.783 127.683C109.592 128.001 109.253 128.191 108.871 128.191L109.232 128.361ZM56.4725 126.244H108.616L156.303 46.4631L130.242 3.11165L56.4725 126.244Z" fill="#1F1C1D"/>
                                            <path d="M103.778 44.1981H57.7891V46.3149H103.778V44.1981Z" fill="#1F1C1D"/>
                                            <path d="M99.6598 283.964H67.3167C67.1257 283.964 66.9559 283.922 66.7862 283.816L38.7724 267.686C38.6027 267.602 38.4753 267.454 38.3904 267.305L22.2189 239.364C22.134 239.195 22.0703 239.025 22.0703 238.835V206.575C22.0703 206.385 22.1128 206.215 22.2189 206.046L38.3904 178.105C38.4753 177.935 38.6239 177.808 38.7724 177.724L66.7862 161.594C66.9559 161.509 67.1257 161.446 67.3167 161.446H99.6598C99.8508 161.446 100.021 161.488 100.19 161.594L128.204 177.724C128.374 177.808 128.501 177.957 128.586 178.105L144.758 206.046C144.843 206.215 144.906 206.385 144.906 206.575V238.835C144.906 239.025 144.864 239.195 144.758 239.364L128.586 267.305C128.501 267.475 128.353 267.602 128.204 267.686L100.19 283.816C100.021 283.901 99.8508 283.964 99.6598 283.964ZM67.6138 281.848H99.3839L126.888 265.993L142.784 238.56V206.872L126.888 179.438L99.3839 163.584H67.6138L40.1095 179.438L24.2138 206.872V238.56L40.1095 265.993L67.6138 281.848Z" fill="#1F1C1D"/>
                                            <path d="M107.406 256.976C107.194 256.976 106.96 256.912 106.79 256.764L83.5094 239.893L60.2283 256.764C59.8463 257.039 59.3582 257.039 58.9761 256.764C58.6154 256.489 58.4456 256.023 58.5941 255.578L67.4864 228.272L44.2053 211.402C43.8445 211.126 43.6747 210.661 43.8233 210.216C43.9718 209.772 44.3751 209.475 44.8419 209.475H73.6197L82.5119 182.169C82.7878 181.301 84.2522 181.301 84.5281 182.169L93.4203 209.475H122.198C122.665 209.475 123.068 209.772 123.217 210.216C123.365 210.661 123.217 211.126 122.835 211.402L99.5536 228.272L108.446 255.578C108.594 256.023 108.446 256.489 108.064 256.764C107.873 256.891 107.661 256.976 107.448 256.976H107.406ZM83.4882 237.544C83.7004 237.544 83.9338 237.607 84.1036 237.755L105.369 253.165L97.2403 228.23C97.0918 227.785 97.2403 227.32 97.6224 227.044L118.887 211.634H92.5926C92.1257 211.634 91.7225 211.338 91.5739 210.894L83.4457 185.958L75.3175 210.894C75.1689 211.338 74.7657 211.634 74.2988 211.634H48.0041L69.2691 227.044C69.6299 227.32 69.7996 227.785 69.6511 228.23L61.5228 253.165L82.7878 237.755C82.9788 237.628 83.191 237.544 83.4033 237.544H83.4882Z" fill="#1F1C1D"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_648_45">
                                                <rect width="167" height="306" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endwhile; ?>
                <?php wp_reset_postdata(); ?>
            </div>
        <?php else : ?>
            <p><?php _e( 'Sorry, no posts matched your criteria.', 'jupiter_and_the_giraffe' ); ?></p>
        <?php endif; ?>
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
    </div>
</div>            

<?php get_footer( 'page-189' ); ?>