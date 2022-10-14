gsap.registerPlugin(SplitText, DrawSVGPlugin)

let isSafari = false
let hasScrolled = false

var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
  if (ua.indexOf('chrome') > -1) {
    // Chrome
  } else {
    isSafari = true
    document.documentElement.classList.add('safari')
  }
}

const isMobile = ua.match(/mobile/i)

const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
let menuAudio = false

const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html'

const scrollDownButton = document.querySelector('.splash-page-one__scroll-down')
if (scrollDownButton) {
  scrollDownButton.addEventListener('click', e => {
    e.preventDefault()

    window.scrollTo({ top: window.innerHeight, behaviour: 'smooth'})
  })
}

function setMenuAudio() {
  menuAudio = true
}

function removeMenuAudio() {
  menuAudio = false
}

function removeEl(el) {
    el.parentNode.removeChild(el);
}

/**
 * Audio Control
 */
const audioButton = document.getElementById('audio-button')
const audioButtonLabel = audioButton.getAttribute('aria-label')
const bgAudioFiles = Array.from(document.querySelectorAll('audio.background-audio'))
const audioFiles = Array.from(document.querySelectorAll('audio'))
const mainAudio = document.getElementById('main-audio')
const topRightAudio = document.getElementById('top-right-audio')
const bottomRightAudio = document.getElementById('bottom-right-audio')
const bottomLeftAudio = document.getElementById('bottom-left-audio')

// To do with pressing escape
const menuCloseButton = document.querySelector('.menu__close-button')
const pageOverlay = document.querySelector('.page-overlay')
const menu = document.querySelector('.menu')
const pageDetail = document.querySelector('.page-detail__main')

const navBack = () => {
  pgia.play(document.querySelector('.page-overlay'), 'Slide out')

  setTimeout(() => {
      window.location = '/'
  }, 500)
}

window.addEventListener('keyup', (e) => {
  document.documentElement.classList.add('keyboard-user')
  document.documentElement.classList.remove('mouse-user')
  if(e.key === 'Escape') {
    if (window.location.pathname === '/') {
      pgia.play(menuCloseButton, 'Close menu')
    } else {
      navBack()
    }
  }
})

window.addEventListener('mousemove', () => {
  document.documentElement.classList.remove('keyboard-user')
  document.documentElement.classList.add('mouse-user')
})

const resetScale = () => gsap.to('.header, .footer', {scale: 1, y: 0})
let timeout = null
const startMousewheelDetection = () => {
  gsap.set('.header, .footer', {scale: 1})
  window.addEventListener('mousewheel', e => {
    if (e.deltaY >= 20) {
      const tl = gsap.timeline({
        onStart: clearTimeout(timeout),
        onComplete: () => timeout = setTimeout(resetScale, 500)
      })

      tl.to('.header', {scale: 0.95, y: '+=5'})
      tl.to('.footer', {scale: 0.95, y: '-=5'}, '<')
    }
  })
}

if (menu) {
  menu.addEventListener('click', function(e) {
    if (e.target.classList.contains('menu')) {
      pgia.play(menuCloseButton, 1)
    }
  })
}

if (pageDetail) {
  pageDetail.addEventListener('click', function(e) {
    if (e.target.classList.contains('page-detail__main')) {
      navBack()
    }
  })
}

if (isSafari) {
  audioButton.style.display = 'none'
}

const secondaryAudio = [
  topRightAudio,
  bottomRightAudio,
  bottomLeftAudio
]

audioButton.addEventListener('click', () => {
    if (sessionStorage.getItem('audio_on')) {
      sessionStorage.removeItem('audio_on')
      audioFiles.forEach(audio => audio.pause())
      audioButton.setAttribute('aria-label', audioButtonLabel)
      startHomePageAudio()
      audioButton.classList.add('audio-off')
      dataLayer.push({'event': 'audioOff'});
    } else {
      sessionStorage.setItem('audio_on', 'true')
      audioButton.classList.remove('audio-off')
      dataLayer.push({'event': 'audioOn'});

      audioButton.setAttribute('aria-label', 'Audio off')
      if (isHomePage && sessionStorage.getItem('has_navigated')) {
        startHomePageAudio()
        mainAudio.play()
      } else if (isHomePage) {
        mainAudio.play()
      } else {
        bgAudioFiles.forEach(audio => audio.play())
      }
    }
})

if (bgAudioFiles && !sessionStorage.getItem('audio_on')) {
  bgAudioFiles.forEach(audio => {
    audio.pause()
  })
} else if (bgAudioFiles) {
  audioButton.classList.remove('audio-off')
  if (!sessionStorage.getItem('has_navigated')) {
    mainAudio.play()
  } else {
    bgAudioFiles.forEach(audio => {
      audio.play().catch(e => {
        sessionStorage.removeItem('audio_on')
        audioButton.classList.add('audio-off')
      })
    })
  }
}

function startHomePageAudio() {
  if (sessionStorage.getItem('audio_on') && !isSafari) {
    document.getElementById("audio-animation").click()
    secondaryAudio.forEach(audio => {
      audio.play()
      audio.volume = 0
    })

    window.addEventListener('mousemove', e => {
      if (menuAudio) {
        mainAudio.volume = 1

        topRightAudio.volume = 0
        bottomLeftAudio.volume = 0
        bottomRightAudio.volume = 0
      } else {
        const xPos = e.clientX / window.innerWidth
        const yPos = e.clientY / window.innerHeight

        const leftToRight = Math.max((xPos - .5) * 2, 0)
        const rightToLeft = Math.max(1 - (xPos + .5), 0) * 2
        const topToBottom = Math.max((1 - (yPos + .5)) * 2, 0)
        const bottomToTop = Math.max(yPos - .5, 0) * 2
        const centreX = 1 - Math.abs((e.clientX - (window.innerWidth / 2)) / (window.innerWidth / 2))
        const centreY = 1 - Math.abs((e.clientY - (window.innerHeight / 2)) / (window.innerHeight / 2))

        topRightAudio.volume = Math.min(leftToRight, topToBottom)
        bottomRightAudio.volume = Math.min(leftToRight, bottomToTop)
        bottomLeftAudio.volume = Math.min(rightToLeft, bottomToTop)
        mainAudio.volume = Math.max(Math.min(rightToLeft, topToBottom), Math.min(centreX, centreY))
      }
    })
  }
}

const colorModeSelector = document.querySelector('.mode-selector')
if (colorModeSelector) {
  colorModeSelector.addEventListener('click', (e) => {
    if (e.target.classList.contains('mode-selector__button--dark-mode')) {
      localStorage.removeItem('color_theme')
      document.documentElement.classList.remove('light-mode')
      setDarkTexture()
    } else {
      document.documentElement.classList.add('light-mode')
      localStorage.setItem('color_theme', 'light')
      setLightTexture()
    }
  })
}

// Because of scope, we move these functions outside of homepage as these are controlled by Pinegrow Interacitons
let svgLogoTimeline = null
function drawSVG(e, progress) {
  if (svgLogoTimeline) {
    svgLogoTimeline.seek(progress * 2);
  }
}

function destroyIntro(el) {
  pgia.scrollSceneManager.removeScene(el, true);


  // because we remove the scene, we need to remove all animation properties
  document.querySelector('.footer__central-text').removeAttribute('style')
  document.querySelector('.footer__central-text').removeAttribute('data-pg-ia-hide')
  header.removeAttribute('style')
  header.removeAttribute('data-pg-ia-hide')
  footer.removeAttribute('style')
  footer.removeAttribute('data-pg-ia-hide')
  document.getElementById('backdrop').removeAttribute('data-pg-ia-hide')
  document.getElementById('backdrop').style.opacity = ''
  document.getElementById('backdrop').style.visibility = ''

  removeEl(el);
  removeEl(document.querySelector('.splash-page-one__scroll-down'))
  removeEl(document.querySelector('.draw-me').parentNode)
  document.querySelector('.backdrop-blur').style.opacity = '0'
  document.querySelector('.backdrop-blur').style.visibility = 'hidden'

  sessionStorage.setItem('has_navigated', true)

  // if (!sessionStorage.getItem('feedback_dismissed') && feedback && sessionStorage.getItem('has_navigated')) {
  //   pgia.play(feedback, 'Feedback In')
  // }

  startHomePageAudio()

  startMousewheelDetection()
}

// const feedback = document.querySelector('.feedback')
// if (!sessionStorage.getItem('feedback_dismissed') && feedback && sessionStorage.getItem('has_navigated')) {
//   pgia.play(feedback, 'Feedback In')
// }

// function setFeedbackDismissed() {
//   sessionStorage.setItem('feedback_dismissed', true)
// }

const playTransitionText = (word, animationName, cb) => {
  const transitionTextEl = document.getElementById('transition-text')
  const blur = document.getElementById('backdrop-blur')

    if (transitionTextEl) {
      transitionTextEl.innerHTML = word
      transitionTextEl.style.display = 'block'

      transitionTextEl.setAttribute('aria-live', 'polite')

      const transitionSplitText = new SplitText(transitionTextEl, {type: 'words'})

      gsap.set(transitionSplitText.words, {overflow: 'hidden'})

      const tl = gsap.timeline({
        onComplete: () => {
          transitionTextEl.removeAttribute('aria-live')
          cb()
        }
      })

      tl.from(transitionSplitText.words, {
          y: '200%', autoAlpha: 0, stagger: 0.05, rotateZ: 20
      })

      tl.to('canvas.webgl', {
        autoAlpha: 0
      }, '-=0.5')

      tl.to(document.querySelectorAll('#transition-text div'), {
        y: '-100%', autoAlpha: 0, stagger: '0.025'
      }, '+=1')
    }

    pgia.play(blur, animationName)
}

if (!sessionStorage.getItem('has_navigated') && isHomePage) {
  if (isMobile) {
    const el = document.querySelector('.splash-pages')
    const word = document.querySelector('.splash-page__main-text').innerText

    playTransitionText(word, 'Blur In', () => {
      gsap.to('.header, .footer, .footer__central-text, .webgl' , {
        autoAlpha: 1, filter: 'blur(0)'
      })

      gsap.to('#backdrop-blur', {
        autoAlpha: 0, filter: 'blur(0)'
      })

      gsap.to('.mode-selector', {
        filter: 'blur(0)'
      })

      setTimeout(() => [
        destroyIntro(el)
      ], 1000)
    })
  } else {
    // First launch of direct to homepage
    document.querySelector('.splash-page-one__scroll-down').style.display = ''
    document.querySelector('.backdrop-blur').style.display = ''
    document.querySelector('#backdrop').style.opacity = '0'
    document.querySelector('#backdrop').style.visibility = 'hidden'
    document.querySelector('.splash-pages').style.display = ''

    const splashText = document.querySelector(".splash-page .splash-page__main-text")

    if (!isSafari) {
      const audioText = document.getElementById('audio-text')
      const audioTextSplitText = new SplitText(audioText, {type: 'words'})

      gsap.to(audioText, {autoAlpha: 1})

      gsap.from(audioTextSplitText.words, {
          y: '200%', autoAlpha: 0, stagger: 0.05, rotateZ: 25
      })
    }

    if (splashText) {
        const splashTextSplitText = new SplitText(splashText, {type: 'words'})

        splashTextTimeline = gsap.from(splashTextSplitText.words, {
            y: 50, autoAlpha: 0, stagger: 0.05, rotateZ: 10, filter: 'blur(10px)'
        })

        gsap.from('.splash-page .splash-page__privacy-policy-text', {
          autoAlpha: 0, filter: 'blur(10px)', delay: 1.5
        })
    }

    svgLogoTimeline = gsap.timeline({});
    svgLogoTimeline.from(".draw-me", {duration: 2, drawSVG: '0'}, 0.5);
  }
} else if (isHomePage) {
  // Homepage from another page (could have sessionStorage.getItem('has_navigated'))
  removeEl(document.querySelector('.splash-page-one__scroll-down'));
  document.querySelector('#backdrop-blur').style.opacity = 0
  removeEl(document.querySelector('.splash-pages'))

  header.removeAttribute('style')
  header.removeAttribute('data-pg-ia-hide')
  footer.removeAttribute('style')
  footer.removeAttribute('data-pg-ia-hide')
  document.querySelector('.footer__central-text').removeAttribute('style')
  document.querySelector('.footer__central-text').removeAttribute('data-pg-ia-hide')

  // const feedback = document.querySelector('.feedback')
  // pgia.play(feedback, 0)

  if (sessionStorage.getItem('audio_on') && sessionStorage.getItem('has_navigated')) {
    startHomePageAudio()
  }

  if (!isSafari) {
    const audioText = document.getElementById('audio-text')

    gsap.set(audioText, {autoAlpha: 1})
  }

  startMousewheelDetection()
} else {
  // to any other page
  sessionStorage.setItem('has_navigated', 'true');

  footer.classList.add('blur')
  header.style.zIndex = -1

  const backButton = document.querySelector('.page-overlay__back-button')
  if (backButton) {
    backButton.addEventListener('click', (e) => {
        e.preventDefault()

        navBack()
    })
  }

  const leadText = document.querySelector('.lead-text')
  if (leadText) {
    const leadTextSplitText = new SplitText(leadText, {type: 'words,lines'})
    gsap.set(leadTextSplitText.lines, {overflow: 'hidden'})
    gsap.set(leadTextSplitText.words, { opacity: 0, y: 50})
    gsap.to(leadTextSplitText.words, {
      y: 1, autoAlpha: 1, stagger: 0.05, delay: 1
    })
  }

  const isProcessPage = window.location.pathname.match(/process/)
  if (isProcessPage) {
    const sections = gsap.utils.toArray('.page-overlay > .page-overlay__content-container')
    sections.forEach(section => {
      const sectionSplitText = new SplitText(section.querySelectorAll('.process__split-text'), {type: 'words'})
      const button = section.querySelector('button')

      gsap.set(sectionSplitText.words, {display: 'none'})

      const sectionSplitTextTimeline = gsap.from(sectionSplitText.words, {
        y: 20, autoAlpha: 0, stagger: 0.05, paused: true, duration: 0.5
      })

      if (button) {
        button.addEventListener('click', (e) => {
          gsap.set(sectionSplitText.words, {display: 'inline-block'})
          gsap.set(section.querySelectorAll('.process__split-text'), { attr: { role: 'alert', 'aria-live': 'assertive' } })
          sectionSplitTextTimeline.play()
          gsap.to(button, {autoAlpha: 0})
        })
      }
    })
  }

  const person = document.getElementsByClassName('person')
  if (person) {
    Array.from(person).forEach(button => {
      button.addEventListener('click', (e) => {
        const target = e.currentTarget
        Array.from(person).forEach(p => p.classList.remove('active'))
        target.classList.toggle('active')
        setTimeout(() => {
          target.classList.remove('active')
        }, 20 * 1000) // 20 seconds
      })
    })
  }
}

const transitionText = [
  '<div>Driven by distinction</div> <div>Devoted to development.</div>',
  '<div>Designing for richer,</div> <div>more meaningful experiences.</div>',
  '<div>Restless reinvention.</div> <div>World-class expertise.</div>',
  '<div>Adding the difference.</div>',
  '<div>Exploring further<div>for greater discoveries.</div>',
  '<div>Always observing.</div>',
]

/**
 * Transitioning from side menu
 */
const closeButton = document.querySelector('.menu__close-button')
document.querySelectorAll('.menu a').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()

        pgia.play(closeButton, 1)

        setTimeout(() => {
          const word = transitionText[Math.floor((Math.random() * transitionText.length) + 0)]
          playTransitionText(word, 'Blur In', () => {
            pgia.play(document.getElementById('backdrop-blur'), 'Page In')
            setTimeout(() => {
              window.location = e.target.href
            }, 500)
          })
        }, 500)
    })
})


/**
 * Page transitions to detail screen
 */

const allLinks = [
  ...Array.from(document.querySelectorAll('.header a')),
  ...Array.from(document.querySelectorAll('.footer a')),
  ...Array.from(document.querySelectorAll('main a')),
]

allLinks.forEach(el => {
  if (!el.getAttribute('data-no-nav')) {
    el.addEventListener('click', (e) => {
        e.preventDefault()

        if (e.target.href !== window.location.href) {
          const animationName =
            e.target.pathname === '/' || e.target.pathname === '/index.html' ? 'Blur Out' : 'Blur In'

          if (!isHomePage && (e.target.href !== '/' || e.target.href !== '/index.html')) {
            const blur = document.getElementById('backdrop-blur')
            pgia.play(document.querySelector('.page-overlay'), 'Transition')
            pgia.play(blur, 'Blur Out')

            setTimeout(() => {
              pgia.play(blur, 'Blur In')

              setTimeout(() => {
                window.location = e.target.href
              }, 500)
            }, 500)
          } else {
            const word = transitionText[Math.floor((Math.random() * transitionText.length) + 0)]
            playTransitionText(word, animationName, () => window.location = e.target.href)
          }
        }
    })
  }
})

/* 404 page */
const blurOutLinks = Array.from(document.querySelectorAll('.blur-out-link'))
if (blurOutLinks.length) {
  const blurOutAnim = gsap.timeline({paused: true})
  blurOutAnim.to('.blur-out', { filter: 'blur(0px)'})
  blurOutAnim.to('.four-oh-four__content', { autoAlpha: 0, filter: 'blur(10px)'}, '<')
  blurOutLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      blurOutAnim.play()
      setTimeout(() => {
        window.location = e.target.href
      }, 1000)
    })
  })
}


/**
 * Contact form
 */
const formType = document.getElementById('form-type')
const budget = document.getElementById('budget')

if (formType) {
  formType.addEventListener('change', (e) => {
    const isProjectProposal = e.target.value === 'Project Proposal'

    if (isProjectProposal) {
      budget.style.display = 'block'
      setTimeout(() => {
        budget.setAttribute('data-pg-ia-show', '')
        budget.removeAttribute('data-pg-ia-hide')
      }, 300)
    } else {
      budget.removeAttribute('data-pg-ia-show')
      budget.classList.add('fade-out')
      setTimeout(() => {
        budget.style.display = 'none'
        budget.classList.remove('fade-out')
        budget.setAttribute('data-pg-ia-hide', '')
      }, 300)
    }
  })
}

const people = Array.from(document.querySelectorAll(".person"));
if (people.length) {
  people.forEach(person => {
    const image = person.querySelector(".person-image");
    const name = person.querySelector(".person__overlay-text");
    const title = person.querySelector(".person__overlay-title");
    const readMore = person.querySelector(".person__read-more-text");

    gsap.set(image, {opacity: 0, scale: .9});
    gsap.set(name, {opacity: 0, x: "-100%"});
    gsap.set(title, {y: "-100%", opacity: 0})
    gsap.set(readMore, {y: "-100%", opacity: 0})

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: person,
        start: 'top bottom',
        end: '+=500',
        scrub: .3
      }
    })

    tl
      .to(image, {autoAlpha: 1, scale: 1})
      .to(name, {x: 0, autoAlpha: 1})
      .to(title, {y: 0, autoAlpha: 1})
      .to(readMore, {y: 0, autoAlpha: 1})
  })
}

function addAudioClass(el) {
  setTimeout(() => {
    el.classList.add('interaction')
  }, 1 * 1000)
 }

new rive.Rive({
  src: "/assets/animations/audio.riv",
  canvas: document.getElementById("audio-animation"),
  autoplay: true,
  stateMachines: ['State Machine 1'],
});