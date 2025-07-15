<?php
$pinegrow_run_code = true;

/* Begin - Prevent broken project from crashing the Pinegrow editor */
if(defined('DOING_AJAX') && DOING_AJAX && !empty($_REQUEST['action']) && strpos($_REQUEST['action'], 'pinegrow_api') === 0) {
    $pinegrow_run_code = false; //do not run during Pinegrow API calls
}
if(strpos($_SERVER['REQUEST_URI'], '/wp-admin/admin.php?page=pinegrow-projects') === 0 || strpos($_SERVER['REQUEST_URI'], '/wp-login') === 0 || (strpos($_SERVER['REQUEST_URI'], '/wp-admin/plugins.php') === 0 && strpos($_SERVER['REQUEST_URI'], '/wp-admin/plugins.php?action=activate') === false)) {
    //do not load when editor is loading, during login and plugin manipulation in admin, except when plugin is being activated
    $pinegrow_run_code = false;
}
if( $pinegrow_run_code ) :

/* End - Prevent broken project from crashing the Pinegrow editor */            
?><?php
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

    wp_register_script( 'google_tag_manager', null, null, '1.0', false );
    wp_enqueue_script( 'google_tag_manager' );

    wp_add_inline_script( 'google_tag_manager', '(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != "dataLayer" ? "&l=" + l : "";
        j.async = true;
        j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, "script", "dataLayer", "GTM-PC4ZCSK");');

    wp_enqueue_script( 'pgia', get_template_directory_uri() . '/pgia/lib/pgia.js', null, '1.0.1742', true );

    wp_enqueue_script( 'split_text', get_template_directory_uri() . '/libs/SplitText.js', null, '1.0.1742', true );

    wp_enqueue_script( 'bento-grid-animation', get_template_directory_uri() . '/scripts/bento-grid-animation.js', array( 'pgia', 'split_text' ), '1.0.1742', true );

    wp_register_script( 'main_javascript', null, array( 'split_text' ), '1.0.1742', true );
    wp_enqueue_script( 'main_javascript' );

    wp_add_inline_script( 'main_javascript', 'gsap.registerPlugin(SplitText)

            const updateDOM = async () => {
                // Render the new page here
            };

            if (document.startViewTransition) {
                document.startViewTransition(updateDOM);
            }

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

            const cookieConsent = document.getElementById(\'cookie-consent\')

            if (cookieConsent) {
                const cookieAcceptButton = cookieConsent.querySelector(\'[data-cookie-accept]\')

                if (localStorage.getItem(\'jatg:cookie-consent\') === null) {
                    const cookieTl = gsap.timeline({paused: true, onComplete: function() {
                                window.sessionStorage.setItem(\'jatg:cookie-consent-shown\', \'true\')
                            }})

                    if (window.sessionStorage.getItem(\'jatg:cookie-consent-shown\') === null) {
                        cookieTl.fromTo(cookieConsent, {
                            autoAlpha: 0,
                            y: \'100%\'
                        }, {
                            y: 0,
                            autoAlpha: 1
                        })
                    } else {
                        cookieTl.set(cookieConsent, {
                            autoAlpha: 1
                        })
                    }

                    setTimeout(() => {
                        cookieTl.play()
                    }, window.sessionStorage.getItem(\'jatg:old-visitor\') === null && window.location.pathname === \'/\' ? 5000 : 0)

                    cookieAcceptButton.addEventListener(\'click\', () => {
                        cookieTl.to(cookieConsent, {
                            autoAlpha: 0,
                            y: \'100%\'
                        })
                        window.localStorage.setItem(\'jatg:cookie-consent\', \'true\')
                    })
                }
            }

            const form = document.querySelector(\'[data-contact-form]\')
            if (form) {
                const successMessage = form.querySelector(\'.contact-us__success\')
                const errorMessage = form.querySelector(\'.contact-us__error\')

                const activateHoneyPot = form.querySelector(\'[name="hnypt"]\').removeAttribute(\'required\')

                form.addEventListener(\'submit\', async function(e) {
                    e.preventDefault()

                    if (form.querySelector(\'[name="hnypt"]\').checked) {
                        console.warn("we think you\'re a bot. Drop us an email instead.")
                        return
                    }

                    const formData = new FormData(e.currentTarget);
                    formData.append("action", "contact_form");
                    formData.append("nonce", formProcessing.nonce);
                    formData.append("source", window.location.pathname)

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

            if (document.querySelector(\'[data-main-nav]\')) {
            gsap.set(document.querySelector(\'[data-main-nav]\'), {
                    autoAlpha: 1
                })
            }

            if (!window.sessionStorage.getItem(\'jatg:old-visitor\')) {
                const introTimeline = gsap.timeline({})

                introTimeline.fromTo(document.querySelector(\'.main-nav\'), {
                    y: \'-100%\'
                }, {
                    autoAlpha: 1,
                    y: 0
                })

                introTimeline.fromTo(document.querySelectorAll(\'[data-main-menu] li\'), {
                    x: function(index, target, targets) {
                        return Math.max(10 * index, 10)
                    },
                    autoAlpha: 0,
                }, {
                    autoAlpha: 1,
                    x: 0,
                    onComplete: function() {
                        window.sessionStorage.setItem(\'jatg:old-visitor\', true)
                    },
                    stagger: {
                        from: \'end\',
                        each: 0.03
                    },
                })

                const footerLetsConnect = document.querySelector(\'[data-footer-lets-connect]\')
                if (footerLetsConnect) {
                    const letsConnectTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: \'main\',
                            start: \'bottom 80%\',
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
                    gsap.to(footerBottom, {
                        clipPath: \'inset(0)\',
                        delay: 1,
                        scrollTrigger: {
                            trigger: \'main\',
                            start: \'bottom 80%\'
                        }
                    })
                }
            } else {
                const footer = document.querySelector(\'[data-footer-lets-connect]\')
                if (footer) {
                    gsap.set(footer.querySelector(\'a\'), { autoAlpha: 1 })
                    gsap.set(footer, { autoAlpha: 1 })
                }

                const footerBottom = document.querySelector(\'[data-footer-bottom]\')
                if (footerBottom) {
                    gsap.to(footerBottom, { clipPath: \'inset(0)\'})
                }
            }

            const footerDate = new SplitText(document.querySelector(\'[data-footer-copyright]\'), {
                type: \'chars\'
            })

            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const footer = document.querySelector(\'footer > *\')
                if (footer) {
                gsap.from(footer, {
                    scale: 0.9,
                    scrollTrigger: {
                        trigger: \'main\',
                        scrub: 0.1,
                        start: \'bottom bottom\',
                        end: \'bottom center\'
                    }
                })
                }
            });

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

            const homeSections = Array.from(document.querySelectorAll(\'[home-section-header]\'))
            if (homeSections.length) {
                homeSections.forEach(section => {
                    const attachment = section.getAttribute(\'home-section-header\')

                    if (attachment) {
                        const selector = section.querySelector(attachment)
                        if (selector) {
                            gsap.from(selector, {
                                y: 50,
                                autoAlpha: 0,
                                scrollTrigger: {
                                    trigger: section,
                                    start: \'top bottom\',
                                    end: \'top center\',
                                    scrub: .5,
                                    once: true
                                }
                            })
                        }
                    }
                })
            }

            /*
            * HOME HERO SECTION
            */
            const homeHero = document.querySelector(\'[data-home-hero]\')
            if (homeHero) {
                const homeHeroHeading = homeHero.querySelector(\'[data-home-hero-heading]\')
                const homeHeroTimeline = gsap.timeline({})

                homeHeroTimeline
                    .set([
                        homeHero.querySelector(\'[data-home-hero-heading]\'),
                        homeHero.querySelector(\'[data-home-hero-top-bar]\'),
                        Array.from(homeHero.querySelectorAll(\'[data-home-hero-bottom-section] [data-pg-ia-hide]\')).flat(),
                        homeHero.querySelector(\'[data-home-hero-tagline]\')
                    ], {
                            autoAlpha: 1,
                    })

                if (window.innerWidth >= 768) {
                    gsap.from(homeHero.querySelector(\'[data-home-hero-heading]\'), {
                        scaleX: 0,
                        ease: "slow(0.5,0.7,false)",
                        duration: window.sessionStorage.getItem(\'jatg:old-visitor\') === null ? 3 : .2,
                    })
                }

                if (!window.sessionStorage.getItem(\'jatg:old-visitor\')) {
                    homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                        opacity: 0,
                    }, "<")
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
                }

                homeHeroTimeline.set(homeHero.querySelector(\'[data-home-hero-v4]\'), {
                    opacity: 1,
                    delay: .1
                })

                const homeHeroDate = homeHero.querySelector(\'[data-date-target]\')

                if (homeHeroDate) {
                    gsap.from(homeHeroDate, {
                        textContent: \'2018\',
                        ease: "power1.in",
                        snap: { textContent: 1 },
                    })
                }


                const homeHeroSpaceAdventure = new SplitText(document.querySelector(\'[data-home-hero-adventure]\'), { type: \'words\'})

                if (homeHeroSpaceAdventure) {
                    gsap.fromTo(homeHeroSpaceAdventure.words, {
                        y: \'100%\'
                    }, {
                        y: 0,
                        delay: 0.5,
                        stagger: 0.05,
                        ease: "elastic.out(1,0.5)",
                        duration: 1
                    }, "<")
                }

                const homeHeroTopBar = new SplitText(document.querySelector(\'[data-home-hero-top-bar]\'), { type: \'words\'})
                homeHeroTimeline.fromTo(homeHeroTopBar.words, {
                    autoAlpha: 0,
                }, {
                    autoAlpha: 1,
                    duration: 0.01,
                    stagger: 0.05
                }, "<")

                homeHeroTimeline.fromTo(homeHeroHeading.querySelectorAll(\'div\'), {
                    x: function(index, target, targets) {
                        return index % 2 ? -50 : 50;
                    },
                },{
                    stagger: 0.025,
                    x: 0,
                }, "<")

                if (window.innerWidth > 769) {
                    homeHeroTimeline.set(homeHeroHeading.querySelectorAll(\'div\'), {
                        clipPath: \'inset(0%)\'
                    }, "<")
                }

                homeHeroTimeline.set(homeHeroHeading.querySelectorAll(\'div\'), {
                    x: function(index, element, target) {
                        return (index + 1) % 2 ? -50 : 50
                    }
                }, "<")

                const taglineSplitText = new SplitText(homeHero.querySelector(\'[data-home-hero-tagline]\'), { type: \'chars,words\'})

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


                const heroScrollDownButton = document.querySelector(\'[data-hero-scroll-down]\')
                heroScrollDownButton.addEventListener(\'click\', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(e.currentTarget.hash)

                    window.scrollTo({
                        top: target.offsetTop - 100,
                        left: 0,
                        behavior: "smooth",
                    });
                })

            }

            const homeTagline = document.querySelector(\'[data-tagline-section]\')
            if (homeTagline) {
                const homeSectionTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: homeTagline,
                        start: \'center 80%\',
                        ease: "none",
                    }
                })

                homeSectionTimeline.set(homeTagline.querySelectorAll(\'h2 span\'), {
                    color: \'var(--primary)\',
                    stagger: 0.5
                })

                homeSectionTimeline.fromTo(homeTagline.querySelectorAll(\'li\'), {
                    autoAlpha: 0,
                    x: -50,
                }, {
                    autoAlpha: 1,
                    x: 0,
                    stagger: 0.025,
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
                        start: \'top bottom-=100\',
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

                const ourProcessContent = ourProcessSection.querySelector(\'.our-process__content span\')

                ourProcessTimeline.to(ourProcessContent, {
                    autoAlpha: 1,
                }, "<")

                gsap.from(ourProcessSection.querySelector(\'.vertical-text-right [data-number]\'), {
                    textContent: 15,
                    ease: "power1.in",
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: ourProcessSection.querySelector(\'.vertical-text-right [data-number]\').parentElement,
                        start: \'top bottom\',
                        end: \'top top\',
                        scrub: 0.5,
                    }
                }, "<")

                const codeSplitText = new SplitText(ourProcessSection.querySelector(\'.code\'), { type: \'chars\'})
                ourProcessTimeline.from(codeSplitText.chars, {
                    autoAlpha: 0,
                    duration: 0.01,
                    stagger: 0.02,
                }, "<")

                ourProcessTimeline.fromTo(ourProcessSection.querySelector(\'[data-graphic-center]\'), {
                    autoAlpha: 0,
                    scale: 0.7
                }, {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                },"<")

                ourProcessTimeline.fromTo(ourProcessSection.querySelector(\'[data-graphic-top-right]\'), {
                    autoAlpha: 0,
                    x: -50,
                    y: 50
                }, {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                },"<10%")

                ourProcessTimeline.fromTo(ourProcessSection.querySelector(\'[data-graphic-bottom-left]\'), {
                    autoAlpha: 0,
                    x: 50,
                    y: -50,
                }, {
                    autoAlpha: 1,
                    x: 0,
                    y: 0,
                }, "<")

                gsap.from(ourProcessSection.querySelector(\'.vertical-text-left [data-number]\'), {
                    textContent: 18,
                    ease: "power1.in",
                    snap: { textContent: 1 },
                    scrollTrigger: {
                        trigger: ourProcessSection.querySelector(\'.vertical-text-left [data-number]\').parentElement,
                        start: \'top bottom\',
                        end: \'top top\',
                        scrub: 0.5,
                    }
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

                contactUsTimeline.fromTo(contactUsSection.querySelector(\'[data-contact-us-image]\'), {
                    x: -50,
                    autoAlpha: 0,
                }, {
                    autoAlpha: 1,
                    x: 0,
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
                }, "");

                const mainMenuContactLinks = Array.from(document.querySelectorAll(`a[href="#${contactUsSection.id}"]`))
                mainMenuContactLinks.forEach(link => {
                    link.addEventListener(\'click\', (e) => {
                        e.preventDefault()

                        pgia.play(document.querySelector(\'[data-close-navigation-link]\'), \'Close Navigation\')

                        window.scrollTo({
                            top: contactUsSection.offsetTop - 100,
                            left: 0,
                            behavior: "smooth",
                        });
                    })
                })
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
            }

            const processSections = Array.from(document.querySelectorAll(\'[data-process-section]\'))
            if (processSections.length) {
                let mm = gsap.matchMedia();

                mm.add("(min-width: 768px)", () => {
                    processSections.forEach(section => {
                        const graphicSelector = section.getAttribute(\'data-process-section\')
                        const sectionTitleSplit = new SplitText(section.querySelector(\'h2\'), {type: \'words\'})
                        const sectionTextSplit = new SplitText(section.querySelector(\'[data-process-text]\'), {type: \'chars,words\'})

                        gsap.set(section, {
                            autoAlpha: 1
                        });

                        const processSectionTimeline = gsap.timeline({
                            scrollTrigger: {
                                trigger: section,
                                start: \'start 90%\'
                            }
                        })

                        processSectionTimeline.from(sectionTitleSplit.words, {
                            autoAlpha: 0,
                            y: 10,
                            stagger: 0.025
                        })

                        processSectionTimeline.from(sectionTextSplit.chars, {
                            autoAlpha: 0,
                            duration: 0.01,
                            stagger: 0.01
                        }, "<25%")

                        processSectionTimeline.fromTo(document.querySelector(graphicSelector), {
                            autoAlpha: 0,
                            x: -50
                        }, {
                            autoAlpha: 1,
                            x: 0
                        }, "<25%")
                    })
                })

                mm.add("(max-width: 768px)", () => {
                    const graphicSelector = processSections[0].getAttribute(\'data-process-section\')

                    gsap.to(processSections[0], {
                        autoAlpha: 1
                    });

                    gsap.to(document.querySelector(graphicSelector), {
                        autoAlpha: 1
                    })
                })
            }

            const moons = document.querySelectorAll(\'[data-mobile-menu-moon]\')
            if (moons) {
                Array.from(moons).forEach(moon => {
                    moon.style.animationDuration = Math.floor(Math.random() * (30 - 10 + 1) + 10) + \'s\'
                })
            }

            /*
            const popup = document.querySelector(\'[data-popup]\');

            if (popup) {
                if (!localStorage.getItem(\'jtg:popup-seen\')) {
                    const popupTimeline = gsap.timeline({
                        delay: 3
                    })

                    popupTimeline.to(popup, {
                        autoAlpha: 1
                    });

                    popupTimeline.fromTo(popup.querySelector(\'[data-popup-content]\'), {
                        autoAlpha: 0,
                        y: 50
                    }, {
                        autoAlpha: 1,
                        y: 0
                    }, \'<\')
                }

                const closeBtn = document.querySelector(\'[data-popup-close]\')
                const contactBtn = document.querySelector(\'[data-popup-contact]\')

                closeBtn.addEventListener(\'click\', () => {
                    localStorage.setItem(\'jtg:popup-seen\', true);

                    gsap.to(popup, {
                        autoAlpha: 0
                    });
                });

                contactBtn.addEventListener(\'click\', () => {
                    gsap.to(popup, {
                        autoAlpha: 0,
                        onComplete: () => {
                            const contactSection = document.getElementById(\'contact-us\');
                            localStorage.setItem(\'jtg:popup-seen\', true);

                            if (contactSection) {
                                window.scrollTo({
                                    top: contactSection.offsetTop,
                                    behavior: \'smooth\'
                                })
                            }
                        }
                    });
                })

            }
            /*');

    wp_register_script( 'inline-script-1', '', [], '1.0.1742', false );
    wp_enqueue_script( 'inline-script-1' );
    wp_add_inline_script( 'inline-script-1', '/* Pinegrow Interactions, do not remove */ (function(){try{if(!document.documentElement.hasAttribute(\'data-pg-ia-disabled\')) { window.pgia_small_mq=typeof pgia_small_mq==\'string\'?pgia_small_mq:\'(max-width:767px)\';window.pgia_large_mq=typeof pgia_large_mq==\'string\'?pgia_large_mq:\'(min-width:768px)\';var style = document.createElement(\'style\');var pgcss=\'html:not(.pg-ia-no-preview) [data-pg-ia-hide=""] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show=""] {opacity:1;visibility:visible;display:block;}\';if(document.documentElement.hasAttribute(\'data-pg-id\') && document.documentElement.hasAttribute(\'data-pg-mobile\')) {pgia_small_mq=\'(min-width:0)\';pgia_large_mq=\'(min-width:99999px)\'} pgcss+=\'@media \' + pgia_small_mq + \'{ html:not(.pg-ia-no-preview) [data-pg-ia-hide="mobile"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="mobile"] {opacity:1;visibility:visible;display:block;}}\';pgcss+=\'@media \' + pgia_large_mq + \'{html:not(.pg-ia-no-preview) [data-pg-ia-hide="desktop"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="desktop"] {opacity:1;visibility:visible;display:block;}}\';style.innerHTML=pgcss;document.querySelector(\'head\').appendChild(style);}}catch(e){console&&console.log(e);}})()');

    wp_deregister_script( 'jupiter_and_the_giraffe-chartumd' );
    wp_enqueue_script( 'jupiter_and_the_giraffe-chartumd', 'https://cdn.jsdelivr.net/npm/chart.js@4.5.0/dist/chart.umd.min.js', [], '1.0.1742', true);

    wp_deregister_script( 'jupiter_and_the_giraffe-app' );
    wp_enqueue_script( 'jupiter_and_the_giraffe-app', get_template_directory_uri() . '/scripts/app.js', [], '1.0.1742', true);

    /* Pinegrow generated Enqueue Scripts End */

        /* Pinegrow generated Enqueue Styles Begin */

    wp_enqueue_style( 'theme_styles', get_template_directory_uri() . '/css/theme.css', null, '1.0.1742', 'all' );

    wp_enqueue_style( 'main_styles', get_template_directory_uri() . '/css/style.css', null, '1.0.1742', 'all' );

    wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/css/font-awsome/css/all.min.css', null, '1.0.1742', 'all' );

    wp_enqueue_style( 'font_styles', get_template_directory_uri() . '/wp-content/uploads/yabe-webfont/cache/fonts.css', null, '1.0.1742', 'all' );

    wp_deregister_style( 'jupiter_and_the_giraffe-theme' );
    wp_enqueue_style( 'jupiter_and_the_giraffe-theme', get_template_directory_uri() . '/css/theme.css', [], '1.0.1742', 'all');

    wp_deregister_style( 'jupiter_and_the_giraffe-style' );
    wp_enqueue_style( 'jupiter_and_the_giraffe-style', get_template_directory_uri() . '/css/style.css', [], '1.0.1742', 'all');

    wp_deregister_style( 'jupiter_and_the_giraffe-aiassesment' );
    wp_enqueue_style( 'jupiter_and_the_giraffe-aiassesment', get_template_directory_uri() . '/css/ai-assesment.css', [], '1.0.1742', 'all');

    wp_deregister_style( 'jupiter_and_the_giraffe-style-1' );
    wp_enqueue_style( 'jupiter_and_the_giraffe-style-1', get_bloginfo('stylesheet_url'), [], '1.0.1742', 'all');

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

function child_templates($template) {
    global $post;

    if ($post->post_parent) {
        // get top level parent page
        $parent = get_post(
            reset(array_reverse(get_post_ancestors($post->ID)))
        );

        // find the child template based on parent's slug or ID
        $child_template = locate_template(
            [
                'child-' . $parent->post_name . '.php',
                'child-' . $parent->ID . '.php',
                'child.php',
            ]
        );

        if ($child_template) return $child_template;
    }

    return $template;
}
add_filter( 'page_template', 'child_templates' );
?><?php
endif; //end if ( $pinegrow_run_plugin )

function cc_mime_types($mimes) {
    $mimes['json'] = 'application/json';
    return $mimes;
  }
add_filter('upload_mimes', 'cc_mime_types');

add_action( 'wp_print_scripts', 'my_deregister_javascript', 100 );
function my_deregister_javascript() {
    global $post;
  if ( $post->post_name == 'ai-competency-test' ) {
    wp_deregister_script( 'split_text' );
    wp_deregister_script( 'main_javascript' );
    wp_dequeue_style( 'main_styles' );
    wp_dequeue_style( 'theme_styles' );
    wp_dequeue_style( 'font_styles' );
  }
}

add_action( 'wp_ajax_submit_assessment', 'handle_assessment_submission' );
add_action( 'wp_ajax_nopriv_submit_assessment', 'handle_assessment_submission' );

function handle_assessment_submission() {
    // Verify nonce
    if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( $_POST['nonce'], 'assessment_nonce' ) ) {
        wp_send_json_error( 'Invalid nonce', 403 );
        return;
    }

    // Sanitize and prepare data
    $name = sanitize_text_field( $_POST['name'] );
    $email = sanitize_email( $_POST['email'] );
    $company = sanitize_text_field( $_POST['company'] );
    $phone = sanitize_text_field( $_POST['phone'] );
    $message = sanitize_textarea_field( $_POST['message'] );

    // Prepare email
    $to = get_option( 'admin_email' );
    $subject = 'New AI Assessment Submission from ' . $name;
    $body = "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Company: $company\n";
    $body .= "Phone: $phone\n\n";
    $body .= "Message:\n$message\n";
    $headers = [ 'Content-Type: text/plain; charset=UTF-8', 'From: ' . $name . ' <' . $email . '>' ];

    // Send email
    if ( wp_mail( $to, $subject, $body, $headers ) ) {
        wp_send_json_success( 'Email sent successfully' );
    } else {
        wp_send_json_error( 'Failed to send email' );
    }
}