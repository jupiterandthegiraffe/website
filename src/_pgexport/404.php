<?php get_header(); ?>

<div class="four-oh-four">
    <div class="container">
        <h1 class="four-oh-four__title"><?php _e( '404', 'jupiter_and_the_giraffe' ); ?></h1>
        <p class="four-oh-four__text"><?php _e( 'Lost in space?', 'jupiter_and_the_giraffe' ); ?> <a href="<?php echo esc_url( home_url() ); ?>" class="four-oh-four__text-link"><?php _e( 'Go back home', 'jupiter_and_the_giraffe' ); ?></a></p>
    </div>
</div>            

<?php get_footer(); ?>