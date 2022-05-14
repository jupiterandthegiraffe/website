gsap.registerPlugin(SplitText, DrawSVGPlugin)

let isSafari = false

var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
    // Chrome
  } else {
    isSafari = true
  }
}

const isMobile = ua.match(/mobile/i)

const header = document.querySelector('header')
const footer = document.querySelector('footer')
let menuAudio = false

const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html'

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
const audioButton = document.getElementById('audio')
const bgAudioFiles = Array.from(document.querySelectorAll('audio.background-audio'))
const audioFiles = Array.from(document.querySelectorAll('audio'))
const mainAudio = document.getElementById('main-audio')
const topRightAudio = document.getElementById('top-right-audio')
const bottomRightAudio = document.getElementById('bottom-right-audio')
const bottomLefttAudio = document.getElementById('bottom-left-audio')

if (isSafari) {
  audioButton.style.display = 'none' 
}

const secondaryAudio = [
  topRightAudio,
  bottomRightAudio,
  bottomLefttAudio
]

audioButton.addEventListener('click', () => {
    if (sessionStorage.getItem('audio_on')) {
        sessionStorage.removeItem('audio_on')
        audioButton.classList.add('audio-off')
        audioFiles.forEach(audio => audio.pause())
    } else {
        sessionStorage.setItem('audio_on', 'true')
        audioButton.classList.remove('audio-off')
        bgAudioFiles.forEach(audio => audio.play())
        // TODO: Fade in and out audio
        if (isHomePage && sessionStorage.getItem('has_navigated')) {
          startHomePageAudio()
        }
    }
})

if (bgAudioFiles && !sessionStorage.getItem('audio_on')) {
  bgAudioFiles.forEach(audio => {
    audio.pause()
  })
} else if (bgAudioFiles) {
  bgAudioFiles.forEach(audio => {
    audio.play().catch(e => {
      sessionStorage.removeItem('audio_on')
      audioButton.classList.add('audio-off')
    })
  })
  audioButton.classList.remove('audio-off')
}

function startHomePageAudio() {
  if (sessionStorage.getItem('audio_on') && !isSafari) {
    secondaryAudio.forEach(audio => {
      audio.play()
      audio.volume = 0
    })

    document.addEventListener('mousemove', (e) => {
      if (menuAudio) {
        mainAudio.volume = 1
          
        topRightAudio.volume = 0
        bottomLefttAudio.volume = 0
        bottomRightAudio.volume = 0
      } else {
        const xPos = (e.clientX / window.innerWidth) - .5
        const yPos = (e.clientY / window.innerHeight) - .5

        if (xPos > 0 && yPos < 0) {
          // Top right
          const newAudioVolume = Math.max((xPos + .5) - (yPos + .5), (yPos + .5) - (xPos + .5))
          const oldAudioVolume = 1 - Math.max((xPos + .5) - (yPos + .5), (yPos + .5) - (xPos + .5))

          mainAudio.volume = oldAudioVolume
          topRightAudio.volume = newAudioVolume

          bottomLefttAudio.volume = 0
          bottomRightAudio.volume = 0
        } else if (xPos < 0 && yPos < 0) {
          // Top left
          mainAudio.volume = 1
          
          topRightAudio.volume = 0
          bottomLefttAudio.volume = 0
          bottomRightAudio.volume = 0
        } else if (xPos > 0 && yPos > 0) {
          // bottom right
          const newAudioVolume = xPos + yPos
          const oldAudioVolume = 1 - (xPos + yPos)
          mainAudio.volume = oldAudioVolume
          bottomRightAudio.volume = newAudioVolume

          topRightAudio.volume = 0
          bottomLefttAudio.volume = 0
        } else if (xPos < 0 && yPos > 0) {
          // bottom left
          const newAudioVolume = 1 - (xPos + .5) + (yPos - .5)
          const oldAudioVolume = 1 + (xPos - yPos)
          mainAudio.volume = oldAudioVolume
          bottomLefttAudio.volume = newAudioVolume

          topRightAudio.volume = 0
          bottomRightAudio.volume = 0
        }
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
    } else {
      document.documentElement.classList.add('light-mode')
      localStorage.setItem('color_theme', 'light')
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

    startHomePageAudio()
}

let splashTextTimeline = null
let scrollDownTimeline = null
function splitTextUpdate(e, progress) {
  if (splashTextTimeline) {
    splashTextTimeline.seek(progress * 2)
  }
  if (scrollDownTimeline) {
    scrollDownTimeline.seek(progress * 2)
  }
}

const playTransitionText = (word, animationName, cb) => {
  const transitionTextEl = document.getElementById('transition-text')
  const blur = document.getElementById('backdrop-blur')

    if (transitionTextEl) {
      transitionTextEl.innerHTML = word
      transitionTextEl.style.display = 'block'

      const transitionSplitText = new SplitText(document.getElementById('transition-text'), {type: 'words'})
    
      const tl = gsap.timeline({
        onComplete: cb
      })

      tl.from(transitionSplitText.words, {
          y: '200%', autoAlpha: 0, stagger: 0.05, rotateZ: 25
      })

      tl.to(document.querySelectorAll('#transition-text div'), {
        y: '-100%', autoAlpha: 0, stagger: '0.025'
      }, '+=1')
    }

    pgia.play(blur, animationName)
}

if (!sessionStorage.getItem('has_navigated') && isHomePage) {
  if (isMobile) {
    const word = document.querySelector('.splash-page-two').innerText

    playTransitionText(word, 'Blur In', () => {
      const el = document.getElementById('backdrop-blur')
      pgia.play(el, 'Blur Out')

      setTimeout(() => {
        destroyIntro(document.querySelector('.splash-pages'))
      }, 4000)
    })
  } else {
    // First launch of direct to homepage
    document.querySelector('.splash-page-one__scroll-down').style.display = ''
    document.querySelector('.backdrop-blur').style.display = ''
    document.querySelector('#backdrop').style.opacity = '0'
    document.querySelector('#backdrop').style.visibility = 'hidden'
    document.querySelector('.splash-pages').style.display = ''

    secondaryAudio.forEach(audio => {
      audio.volume = 0
      audio.pause()
    })

    const splashText = document.querySelector(".splash-page-two .splash-page__main-text")
    const scrollDownText = document.getElementById('keep-going')

    if (!isSafari) {
      const audioText = document.getElementById('audio-text')
      const audioTextSplitText = new SplitText(audioText, {type: 'words'})

      const audioTextTimeline = gsap.timeline({})

      audioTextTimeline.to(audioText, {
        autoAlpha: 1
      }, ">")

      audioTextTimeline.from(audioTextSplitText.words, {
          y: '200%', autoAlpha: 0, stagger: 0.05, rotateZ: 25
      }, ">")

      audioTextTimeline.to(audioText, {
        autoAlpha: 0, duration: 2
      }, ">5")
    } 
    
    if (splashText && scrollDownText) {
        const splashTextSplitText = new SplitText(splashText, {type: 'words, lines'})
        const scrollDownSplitText = new SplitText(scrollDownText, {type: 'chars, lines'})
    
        splashTextTimeline = gsap.from(splashTextSplitText.words, {
            y: '100%', autoAlpha: 0, stagger: 0.05, rotateZ: 25, paused: true, scale: .8, rotateX: '-90deg'
        })
        
        gsap.set(splashTextSplitText.lines, {
            overflow: 'hidden'
        })
        
        scrollDownTimeline = gsap.from(scrollDownSplitText.chars, {
            y: '100%', autoAlpha: 0, stagger: 0.05, rotateZ: 25, paused: true
        })
    }

    svgLogoTimeline = gsap.timeline({});
    svgLogoTimeline.from(".draw-me", {duration: 2, drawSVG: '0'}, 0.1);
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

  if (sessionStorage.getItem('audio_on')) {
    startHomePageAudio()
  }
} else {
  // to any other page
  sessionStorage.setItem('has_navigated', 'true');

  footer.classList.add('blur')
  header.style.zIndex = -1

  document.querySelector('.page-overlay__back-button').addEventListener('click', (e) => {
      e.preventDefault()
  
      pgia.play(document.querySelector('.page-overlay'), 'Slide out')

      setTimeout(() => {
          window.location = e.target.href
      }, 500)
  })

  const leadText = document.querySelector('.lead-text')
  if (leadText) {
    const leadTextSplitText = new SplitText(leadText, {type: 'words, lines'})
    gsap.from(leadTextSplitText.words, {
      y: 100, autoAlpha: 0, stagger: 0.05
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
 * Transitioning Back to home
 */
const closeButton = document.querySelector('.menu__close-button')
document.querySelectorAll('.menu a').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()

        pgia.play(closeButton, 1)

        setTimeout(() => {
          const word = transitionText[Math.floor((Math.random() * transitionText.length) + 0)]
          playTransitionText(word, 'Blur In', () => window.location = e.target.href)
        }, 500)
    })
})


/**
 * Page transitions to detail screen
 */

const allLinks = [
  ...Array.from(document.querySelectorAll('header a')),
  ...Array.from(document.querySelectorAll('footer a')),
  ...Array.from(document.querySelectorAll('main a')),
]

allLinks.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()

        console.log(e.target.href, window.location.href)

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
})


/**
 * Contact form
 */
const formType = document.getElementById('form-type')
const budget = document.getElementById('budget')

if (formType) {
  formType.addEventListener('change', (e) => {
    const isProjectProposal = e.target.value === 'Project Proposal'

    if (isProjectProposal) {
      budget.setAttribute('data-pg-ia-show', '')
      budget.removeAttribute('data-pg-ia-hide')
    } else {
      budget.removeAttribute('data-pg-ia-show')
      budget.classList.add('fade-out')
      setTimeout(() => {
        budget.classList.remove('fade-out')
        budget.setAttribute('data-pg-ia-hide', '')
      }, 300)
    }
  })
}