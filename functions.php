<?php
if ( ! function_exists( 'jupiter_and_the_giraffe_setup' ) ) :

function jupiter_and_the_giraffe_setup() {

    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     */
    /* Pinegrow generated Load Text Domain Begin */
    load_theme_textdomain( 'jupiter_and_the_giraffe', get_template_directory() . '/languages' );
    /* Pinegrow generated Load Text Domain End */

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /*
     * Let WordPress manage the document title.
     */
    add_theme_support( 'title-tag' );
    
    /*
     * Enable support for Post Thumbnails on posts and pages.
     */
    add_theme_support( 'post-thumbnails' );
    //Support custom logo
    add_theme_support( 'custom-logo' );

    // Add menus.
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'jupiter_and_the_giraffe' ),
        'social'  => __( 'Social Links Menu', 'jupiter_and_the_giraffe' ),
    ) );

/*
     * Register custom menu locations
     */
    /* Pinegrow generated Register Menus Begin */

    register_nav_menu(  'footer', __( 'The footer menu', 'jupiter_and_the_giraffe' )  );

    /* Pinegrow generated Register Menus End */
    
/*
    * Set image sizes
     */
    /* Pinegrow generated Image sizes Begin */

    /* Pinegrow generated Image sizes End */
    
    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
        'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ) );

    /*
     * Enable support for Post Formats.
     */
    add_theme_support( 'post-formats', array(
        'aside', 'image', 'video', 'quote', 'link', 'gallery', 'status', 'audio', 'chat'
    ) );

    /*
     * Enable support for Page excerpts.
     */
     add_post_type_support( 'page', 'excerpt' );
}
endif; // jupiter_and_the_giraffe_setup

add_action( 'after_setup_theme', 'jupiter_and_the_giraffe_setup' );


if ( ! function_exists( 'jupiter_and_the_giraffe_init' ) ) :

function jupiter_and_the_giraffe_init() {

    
    // Use categories and tags with attachments
    register_taxonomy_for_object_type( 'category', 'attachment' );
    register_taxonomy_for_object_type( 'post_tag', 'attachment' );

    /*
     * Register custom post types. You can also move this code to a plugin.
     */
    /* Pinegrow generated Custom Post Types Begin */

    /* Pinegrow generated Custom Post Types End */
    
    /*
     * Register custom taxonomies. You can also move this code to a plugin.
     */
    /* Pinegrow generated Taxonomies Begin */

    /* Pinegrow generated Taxonomies End */

}
endif; // jupiter_and_the_giraffe_setup

add_action( 'init', 'jupiter_and_the_giraffe_init' );


if ( ! function_exists( 'jupiter_and_the_giraffe_custom_image_sizes_names' ) ) :

function jupiter_and_the_giraffe_custom_image_sizes_names( $sizes ) {

    /*
     * Add names of custom image sizes.
     */
    /* Pinegrow generated Image Sizes Names Begin*/
    /* This code will be replaced by returning names of custom image sizes. */
    /* Pinegrow generated Image Sizes Names End */
    return $sizes;
}
add_action( 'image_size_names_choose', 'jupiter_and_the_giraffe_custom_image_sizes_names' );
endif;// jupiter_and_the_giraffe_custom_image_sizes_names



if ( ! function_exists( 'jupiter_and_the_giraffe_widgets_init' ) ) :

function jupiter_and_the_giraffe_widgets_init() {

    /*
     * Register widget areas.
     */
    /* Pinegrow generated Register Sidebars Begin */

    /* Pinegrow generated Register Sidebars End */
}
add_action( 'widgets_init', 'jupiter_and_the_giraffe_widgets_init' );
endif;// jupiter_and_the_giraffe_widgets_init



if ( ! function_exists( 'jupiter_and_the_giraffe_customize_register' ) ) :

function jupiter_and_the_giraffe_customize_register( $wp_customize ) {
    // Do stuff with $wp_customize, the WP_Customize_Manager object.

    /* Pinegrow generated Customizer Controls Begin */

    /* Pinegrow generated Customizer Controls End */

}
add_action( 'customize_register', 'jupiter_and_the_giraffe_customize_register' );
endif;// jupiter_and_the_giraffe_customize_register


if ( ! function_exists( 'jupiter_and_the_giraffe_enqueue_scripts' ) ) :
    function jupiter_and_the_giraffe_enqueue_scripts() {

        /* Pinegrow generated Enqueue Scripts Begin */

    wp_register_script( 'inline-script-1', '', [], '1.0.836', false );
    wp_enqueue_script( 'inline-script-1' );
    wp_add_inline_script( 'inline-script-1', '/* Pinegrow Interactions, do not remove */ (function(){try{if(!document.documentElement.hasAttribute(\'data-pg-ia-disabled\')) { window.pgia_small_mq=typeof pgia_small_mq==\'string\'?pgia_small_mq:\'(max-width:767px)\';window.pgia_large_mq=typeof pgia_large_mq==\'string\'?pgia_large_mq:\'(min-width:768px)\';var style = document.createElement(\'style\');var pgcss=\'html:not(.pg-ia-no-preview) [data-pg-ia-hide=""] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show=""] {opacity:1;visibility:visible;display:block;}\';if(document.documentElement.hasAttribute(\'data-pg-id\') && document.documentElement.hasAttribute(\'data-pg-mobile\')) {pgia_small_mq=\'(min-width:0)\';pgia_large_mq=\'(min-width:99999px)\'} pgcss+=\'@media \' + pgia_small_mq + \'{ html:not(.pg-ia-no-preview) [data-pg-ia-hide="mobile"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="mobile"] {opacity:1;visibility:visible;display:block;}}\';pgcss+=\'@media \' + pgia_large_mq + \'{html:not(.pg-ia-no-preview) [data-pg-ia-hide="desktop"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="desktop"] {opacity:1;visibility:visible;display:block;}}\';style.innerHTML=pgcss;document.querySelector(\'head\').appendChild(style);}}catch(e){console&&console.log(e);}})()');

    wp_deregister_script( 'jupiter_and_the_giraffe-pgia' );
    wp_enqueue_script( 'jupiter_and_the_giraffe-pgia', get_template_directory_uri() . '/pgia/lib/pgia.js', [], '1.0.836', true);

    wp_enqueue_script( 'split_text', get_template_directory_uri() . '/libs/SplitText.js', null, '1.0.836', true );

    wp_register_script( 'main_javascript', null, array( 'split_text' ), '1.0.836', true );
    wp_enqueue_script( 'main_javascript' );

    wp_add_inline_script( 'main_javascript', 'gsap.registerPlugin(SplitText)

            const aboutProfiles = Array.from(document.querySelectorAll(\'.about__team-list article\'))
            const aboutTarget = document.querySelectorAll(\'[data-about-target]\')

            window.onAboutProgress = function(element, progress) {
                const activeItem = Math.round(progress * aboutProfiles.length)
                const currentActive = element.querySelector(\'.active\')

                if (currentActive) {
                    currentActive.classList.remove(\'active\')
                }

                aboutProfiles[Math.max(0, activeItem - 1)].classList.add(\'active\')

                gsap.to(aboutTarget, {
                    rotate: (360 / aboutProfiles.length) * Math.max(0, activeItem - 1),
                    duration: 2,
                    ease: \'power4.out\'
                })
            }

            window.clearDialogAttributes = function(element) {
                element.removeAttribute(\'style\')
            }

            window.focusEl = function(element) {
                element.querySelector(\'input\').focus()
            }

            window.addEventListener(\'keyup\', function(e) {
                const openDialog = document.querySelector(\'[open="true"] [data-contact-us-close]\')
                if (e.key === \'Escape\' && openDialog) {
                    pgia.play(openDialog, \'Close Contact Us Dialog\')
                }
            })

            const form = document.querySelector(\'[data-contact-form]\')
            if (form) {
                const successMessage = form.querySelector(\'.contact-us__success\')
                const errorMessage = form.querySelector(\'.contact-us__error\')

                form.addEventListener(\'submit\', async function(e) {
                    e.preventDefault()

                    const formData = new FormData(e.currentTarget);
                    formData.append("action", "contact_form");
                    formData.append("nonce", formProcessing.nonce);

                    try {
                        const contactSend = await fetch(formProcessing.ajaxUrl, {
                            method: \'POST\',
                            body: new URLSearchParams(formData)
                        });

                        const contactResponse = await contactSend.text()

                        if (contactResponse !== \'0\') {
                            throw new Error(contactResponse)
                        }

                        successMessage.style.display = \'flex\'
                    } catch(e) {
                        console.log(e)
                        errorMessage.style.display = \'flex\'

                        setTimeout(() => {
                            gsap.to(errorMessage, {
                                autoAlpha: 0,
                                clearProps: \'all\'
                            })
                        }, 2000)
                    }
                })
            }

            if (!window.sessionStorage.getItem(\'jatg:old-visitor\')) {
                const introTimeline = gsap.timeline({})

                introTimeline.from(document.querySelector(\'.main-nav\'), {
                    y: \'-100%\'
                })

                introTimeline.from(document.querySelectorAll(\'[data-main-menu] li\'), {
                    x: function(index, target, targets) {
                        return Math.max(10 * index, 10)
                    },
                    stagger: {
                        from: \'end\',
                        each: 0.03
                    },
                    autoAlpha: 0,
                    onComplete: function() {
                        window.sessionStorage.setItem(\'jatg:old-visitor\', true)
                    }
                })

                const footerLetsConnect = document.querySelector(\'[data-footer-lets-connect]\')
                if (footerLetsConnect) {
                    const letsConnectTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: footerLetsConnect,
                            start: \'top 80%\',
                        }
                    })

                    const emailSplitText = new SplitText(footerLetsConnect.querySelector(\'a\'), { type: \'chars\'})

                    letsConnectTimeline.to(footerLetsConnect, { autoAlpha: 1, delay: 0.3, duration: 0.01 })
                    letsConnectTimeline.to(footerLetsConnect, { autoAlpha: 0, delay: 0.3, duration: 0.01 })
                    letsConnectTimeline.to(footerLetsConnect, { autoAlpha: 1, delay: 0.3, duration: 0.01 })
                    letsConnectTimeline.to(footerLetsConnect, { autoAlpha: 0, delay: 0.3, duration: 0.01 })
                    letsConnectTimeline.to(footerLetsConnect, { autoAlpha: 1, delay: 0.3, duration: 0.01 })

                    letsConnectTimeline.set(footerLetsConnect.querySelector(\'a\'), { autoAlpha: 1 })

                    letsConnectTimeline.from(emailSplitText.chars, { 
                        autoAlpha: 0,
                        stagger: 0.02,
                        duration: 0.01
                    })

                    const footerBottom = document.querySelector(\'[data-footer-bottom]\')
                    gsap.set(footerBottom, { clipPath: \'inset(0)\'})
                }
            } else {
                const footer = document.querySelector(\'[data-footer-lets-connect]\')
                gsap.set(footer.querySelector(\'a\'), { autoAlpha: 1 })
                gsap.set(footer, { autoAlpha: 1 })
            }

            const aboutPageTimeline = gsap.timeline({})

            const aboutPageTitle = document.querySelector(\'[data-about-page-title]\')
            if (aboutPageTitle) {
                const aboutPageSplitText = new SplitText(aboutPageTitle, {type: \'chars,words\'})
                aboutPageTimeline.set(aboutPageTitle, { autoAlpha: 1 })
                aboutPageTimeline.fromTo(aboutPageSplitText.chars, {
                    y: \'100%\'
                }, {
                    y: 0,
                    ease: "elastic.out(1,0.5)",
                    stagger: 0.025,
                    duration: 2.5
                })
            }

            const aboutPageIntro = document.querySelector(\'[data-about-page-intro]\')
            if (aboutPageIntro) {
                const aboutPageSplitText = new SplitText(aboutPageIntro, {type: \'chars,words\'})
                aboutPageTimeline.set(aboutPageIntro, {autoAlpha: 1}, "<")
                aboutPageTimeline.fromTo(aboutPageSplitText.chars, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: .1,
                    stagger: 0.01
                }, "<10%")
            }

            const aboutPageLead = document.querySelector(\'[data-about-page-lead]\')
            if (aboutPageLead) {
                const aboutPageLeadSplitText = new SplitText(aboutPageLead, {type: \'chars,words\'})
                aboutPageTimeline.set(aboutPageLead, {autoAlpha: 1}, "<")
                aboutPageTimeline.fromTo(aboutPageLeadSplitText.chars, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: .1,
                    stagger: 0.01
                }, "<10%")
            }

            const homeSections = Array.from(document.querySelectorAll(\'[home-section-header]\'))
            if (homeSections.length) {
                homeSections.forEach(section => {
                    gsap.from(section.querySelector(\'h2\'), {
                        y: 50,
                        autoAlpha: 0,
                        scrollTrigger: {
                            trigger: section,
                            start: \'top bottom\', 
                            scrub: .5,
                            once: true
                        }
                    })
                })
            }

            /*
             * HOME HERO SECTION
             */
            const homeHero = document.querySelector(\'[data-home-hero]\')
            if (homeHero) {
                const homeHeroHeading = homeHero.querySelector(\'[data-home-hero-heading]\')
                const homeHeroTimeline = gsap.timeline({})
                if (!window.sessionStorage.getItem(\'jatg:old-visitor\')) {
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 0,
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 1,
                        delay: .5
                    }, "<", \'start\')
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 0,
                        delay: .5
                    }, ">")
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 1,
                        delay: .3
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 0,
                        delay: .3
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 1,
                        delay: .2
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 0,
                        delay: .2
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 1,
                        delay: .1
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 0,
                        delay: .1
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 1,
                        delay: .1
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 1,
                        delay: .1
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 0,
                        delay: .1
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 1,
                        delay: .1
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 1,
                        delay: .1
                    })
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 0,
                        delay: .1
                    })
                }
                homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                    opacity: 1,
                    delay: .1
                })

                const homeHeroDate = homeHero.querySelector(\'[data-date-target]\')

                gsap.from(homeHeroDate, {
                    textContent: \'2018\',
                    ease: "power1.in",
                    snap: { textContent: 1 },
                }, "<")

                const homeHeroSpaceAdventure = new SplitText(document.querySelector(\'[data-home-hero-adventure]\'), { type: \'words\'})
                
                homeHeroTimeline.fromTo(homeHeroSpaceAdventure.words, {
                    y: \'100%\'
                }, {
                    y: 0,
                    stagger: 0.05,
                    ease: "elastic.out(1,0.5)",
                    duration: 1
                }, "<")

                const homeHeroTopBar = new SplitText(document.querySelector(\'[data-home-hero-top-bar]\'), { type: \'words\'})
                homeHeroTimeline.fromTo(homeHeroTopBar.words, {
                    autoAlpha: 0,
                }, {
                    autoAlpha: 1,
                    duration: 0.01,
                    stagger: 0.05
                }, "<")

                homeHeroTimeline.fromTo(homeHeroHeading.querySelectorAll(\'div\'), {
                    x: function(index, target, targets) { //function-based value
                        return index % 2 ? -50 : 50;
                    },
                },{
                    stagger: 0.025,
                    x: 0,
                }, "<")

                homeHeroTimeline.fromTo(homeHeroHeading.querySelector(\'[data-home-hero-title-line]\'), {
                    y: \'-100%\'
                }, {
                    y: 0
                }, "<")

                homeHeroTimeline.set(homeHeroHeading.querySelectorAll(\'div\'), {
                    clipPath: \'inset(0%)\'
                }, "<")
                
                homeHeroTimeline.set(homeHeroHeading.querySelectorAll(\'div\'), {
                    x: function(index, element, target) {
                        return index % 2 ? -50 : 50
                    }
                }, "<")

                const taglineSplitText = new SplitText(homeHero.querySelector(\'[data-hero-home-tagline]\'), { type: \'chars,words\'})

                homeHeroTimeline.fromTo(taglineSplitText.chars, {
                    autoAlpha: 0,
                }, {
                    autoAlpha: 1,
                    duration: 0.01,
                    stagger: 0.01
                }, "<25%")

                homeHeroTimeline.fromTo(homeHero.querySelector(\'[data-home-hero-bg-image]\'), {
                    x: -50,
                    autoAlpha: 0,
                    clipPath: \'polygon(0 0, 0 0, 0 100%, 0 100%)\'
                }, {
                    x: 0,
                    autoAlpha: 1,
                    clipPath: \'polygon(100% 0, 0 0, 0 100%, 100% 100%)\'
                }, "<50%")                

                homeHeroTimeline.to(homeHero.querySelector(\'[home-hero-button-wrap]\'), {
                    autoAlpha: 1,
                    duration: 1
                }, "<50%")
            }

            /*
             * HOME OUR PROCESS SECTION
             */
            const ourProcessSection = document.querySelector(\'[home-our-process-section]\')
            if (ourProcessSection) {
                const ourProcessTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: document.querySelector(\'[home-our-process-section]\'),
                        start: \'start center\',
                        once: true,
                    }
                })

                ourProcessTimeline.fromTo(ourProcessSection.querySelector(\'.our-process__content\'), {
                    scaleY: .2,
                    scaleX: .2
                }, {
                    scaleY: 1,
                    scaleX: .2
                }, "<")
                
                ourProcessTimeline.to(ourProcessSection.querySelector(\'.our-process__content\'), {
                    scaleX: 1
                })

                ourProcessTimeline.set(ourProcessSection.querySelector(\'.our-process__content span\'), {
                    autoAlpha: 1,
                    duration: 0.025
                })

                const contentSplit = new SplitText(ourProcessSection.querySelector(\'.our-process__content span\'), { type: \'chars,words\'})
                
                ourProcessTimeline.from(contentSplit.chars, {
                    autoAlpha: 0,
                    duration: 0.01,
                    stagger: 0.01
                }, "<") 

                gsap.from(ourProcessSection.querySelector(\'.vertical-text-right [data-number]\'), {
                    textContent: 0,
                    ease: "power1.in",
                    snap: { textContent: 1 },
                }, "<")

                const codeSplitText = new SplitText(ourProcessSection.querySelector(\'code\'), { type: \'chars\'})
                ourProcessTimeline.from(codeSplitText.chars, {
                    autoAlpha: 0,
                    duration: 0.01,
                    stagger: 0.02,
                }, "<")

                ourProcessTimeline.from(ourProcessSection.querySelector(\'[data-graphic-center]\'), {
                    autoAlpha: 0,
                    scale: 0.7
                }, "<")
                
                ourProcessTimeline.from(ourProcessSection.querySelector(\'[data-graphic-top-right]\'), {
                    autoAlpha: 0,
                    x: -50,
                    y: 50
                }, "<10%")
                
                ourProcessTimeline.from(ourProcessSection.querySelector(\'[data-graphic-bottom-left]\'), {
                    autoAlpha: 0,
                    x: 50,
                    y: -50
                }, "<")

                gsap.from(ourProcessSection.querySelector(\'.vertical-text-left [data-number]\'), {
                    textContent: 0,
                    ease: "power1.in",
                    snap: { textContent: 1 },
                })
            }

            /*
             * CONTACT US SECTION
             */
            const contactUsSection = document.querySelector(\'[data-contact-us-section]\')
            if (contactUsSection) {
                const contactUsTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: contactUsSection,
                        start: \'top 90%\',
                    }
                })

                contactUsTimeline.from(contactUsSection.querySelector(\'[data-contact-us-header]\'), {
                    x: 50,
                    autoAlpha: 0,
                })
                
                contactUsTimeline.from(contactUsSection.querySelector(\'[data-contact-us-image]\'), {
                    x: -50,
                    autoAlpha: 0,
                }, "<")

                contactUsTimeline.from(contactUsSection.querySelector(\'[data-contact-us-header] div\'), {
                    x: 50,
                    autoAlpha: 0,
                }, "<50%")

                const contactUsParagraphSplitText = new SplitText(contactUsSection.querySelector(\'[data-contact-us-paragraph]\'), { type: \'chars\' })

                contactUsTimeline.from(contactUsParagraphSplitText.chars, {
                    autoAlpha: 0,
                    duration: 0.01,
                    stagger: 0.03
                }, "<10%")
                
                contactUsTimeline.fromTo(contactUsSection.querySelector(\'[data-contact-us-button]\'), {
                    y: -50,
                    autoAlpha: 0,
                }, {
                    y: 0,
                    autoAlpha: 1,
                }, "")
            }

            const resultsList = Array.from(document.querySelectorAll(\'.results__item\'))
            if (resultsList.length) {
                resultsList.forEach(result => {
                    gsap.from(result, {
                        y: 50,
                        autoAlpha: 0,
                        scrollTrigger: {
                            trigger: result,
                            start: \'top 90%\'
                        }
                    })
                })
            }');

    /* Pinegrow generated Enqueue Scripts End */

        /* Pinegrow generated Enqueue Styles Begin */

    wp_deregister_style( 'jupiter_and_the_giraffe-theme' );
    wp_enqueue_style( 'jupiter_and_the_giraffe-theme', get_template_directory_uri() . '/css/theme.css', [], '1.0.836', 'all');

    wp_deregister_style( 'jupiter_and_the_giraffe-style' );
    wp_enqueue_style( 'jupiter_and_the_giraffe-style', get_template_directory_uri() . '/css/style.css', [], '1.0.836', 'all');

    wp_deregister_style( 'jupiter_and_the_giraffe-style-1' );
    wp_enqueue_style( 'jupiter_and_the_giraffe-style-1', get_bloginfo('stylesheet_url'), [], '1.0.836', 'all');

    /* Pinegrow generated Enqueue Styles End */

    }
    add_action( 'wp_enqueue_scripts', 'jupiter_and_the_giraffe_enqueue_scripts' );
endif;

function pgwp_sanitize_placeholder($input) { return $input; }
/*
 * Resource files included by Pinegrow.
 */
/* Pinegrow generated Include Resources Begin */
require_once "inc/custom.php";
if( !class_exists( 'PG_Helper_v2' ) ) { require_once "inc/wp_pg_helpers.php"; }
if( !class_exists( 'PG_Smart_Walker_Nav_Menu' ) ) { require_once "inc/wp_smart_navwalker.php"; }

    /* Pinegrow generated Include Resources End */
?>