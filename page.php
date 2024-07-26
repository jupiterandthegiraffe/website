<?php get_header( 'page' ); ?>

<div class="container page-container">
    <h1 class="page__title" data-about-page-title data-pg-ia-hide><?php the_title(); ?></h1>
    <div class="page__intro" data-about-page-intro data-pg-ia-hide>
        <?php the_content(); ?>
    </div>
    <div data-empty-placeholder data-about-page-lead data-pg-ia-hide></div>
</div>            

<?php get_footer( 'page' ); ?>