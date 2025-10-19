<?php get_header(); ?>

<div class="blog-container">
    <?php echo PG_Image::getPostImage( null, 'full', array(
            'class' => 'post-featured-image'
    ), 'both', null ) ?>
    <h1><?php the_title(); ?></h1>
    <section data-empty-placeholder>
        <?php the_content(); ?>
    </section>
</div>            

<?php get_footer(); ?>