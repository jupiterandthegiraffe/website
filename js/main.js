gsap.registerPlugin(SplitText)

const header = document.querySelector('header')
const footer = document.querySelector('footer')
let splashTextTimeline = null
let scrollDownTimeline = null

const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html'

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

if (audioFiles && !sessionStorage.getItem('audio_on')) {
  audioFiles.forEach(audio => {
    audio.pause()
  })
} else if (audioFiles) {
  audioFiles.forEach(audio => {
      audio.play().catch(() => {
        sessionStorage.removeItem('audio_on')
        audioButton.classList.add('audio-off')
      })
  })
  audioButton.classList.remove('audio-off')
}

function startHomePageAudio() {
  if (sessionStorage.getItem('audio_on')) {
    secondaryAudio.forEach(audio => {
      audio.play()
      audio.volume = 0
    })

    document.addEventListener('mousemove', (e) => {
      const xPos = (e.clientX / window.innerWidth) - .5
      const yPos = (e.clientY / window.innerHeight) - .5

      if (xPos > 0 && yPos < 0) {
        const newAudioVolume = Math.max((xPos + .5) - (yPos + .5), (yPos + .5) - (xPos + .5))
        const oldAudioVolume = 1 - Math.max((xPos + .5) - (yPos + .5), (yPos + .5) - (xPos + .5))
        mainAudio.volume = oldAudioVolume
        topRightAudio.volume = newAudioVolume
        bottomRightAudio.volume = 0
      } else if (xPos < 0 && yPos < 0) {
        topRightAudio.volume = 0
        bottomRightAudio.volume = 0
        mainAudio.volume = 1
      } else if (xPos > 0 && yPos > 0) {
        const newAudioVolume = xPos + yPos
        const oldAudioVolume = 1 - (xPos + yPos)
        mainAudio.volume = oldAudioVolume
        bottomRightAudio.volume = newAudioVolume
        topRightAudio.volume = 0
      } else if (xPos < 0 && yPos > 0) {
        const newAudioVolume = 1 - (xPos + .5) + (yPos - .5)
        const oldAudioVolume = 1 + (xPos - yPos)
        mainAudio.volume = oldAudioVolume
        bottomLefttAudio.volume = newAudioVolume
        topRightAudio.volume = 0
        bottomRightAudio.volume = 0
      }
    })
  }
}

if (!sessionStorage.getItem('has_navigated') && isHomePage) {
    document.querySelector('.splash-page-one__scroll-down').style.display = ''
    document.querySelector('.backdrop-blur').style.display = ''
    document.querySelector('.splash-pages').style.display = ''

    secondaryAudio.forEach(audio => {
      audio.volume = 0
      audio.pause()
    })

    const splashText = document.querySelector(".splash-page-two .splash-page__main-text")
    const scrollDownText = document.getElementById('keep-going')

    document.querySelector('.js-audio-button').addEventListener('click', () => {
      if (sessionStorage.getItem('audio_on')) {
          sessionStorage.removeItem('audio_on')
          audioButton.classList.add('audio-off')
          audioFiles.forEach(audio => audio.pause())
      } else {
          sessionStorage.setItem('audio_on', 'true')
          audioButton.classList.remove('audio-off')
          audioFiles.forEach(audio => audio.play())
          // TODO: Fade in and out audio
      }
    })
    
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
    
    function destroyIntro(el) {
        console.log('destroy');
        pgia.scrollSceneManager.removeScene(el, true);
    
        header.removeAttribute('style')
        header.removeAttribute('data-pg-ia-hide')
        footer.removeAttribute('style')
        footer.removeAttribute('data-pg-ia-hide')
    
        removeEl(el);
        removeEl(document.querySelector('.splash-page-one__scroll-down'))
        removeEl(document.querySelector('.backdrop-blur'))

        startHomePageAudio()
    }
    
    function splitTextUpdate(e, progress) {
        splashTextTimeline.seek(progress * 2)
        scrollDownTimeline.seek(progress * 2)
    }
} else if (isHomePage) {
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
  sessionStorage.setItem('has_navigated', 'true');
}

if (!isHomePage) {
    footer.classList.add('blur')
    header.style.zIndex = -1

    document.querySelector('.page-overlay__back-button').addEventListener('click', (e) => {
        e.preventDefault()
    
        pgia.play(document.querySelector('.page-overlay'), 'Slide out')

        setTimeout(() => {
            window.location = e.target.href
        }, 500)
    })
}

const closeButton = document.querySelector('.menu__close-button')
document.querySelectorAll('.menu a').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault()

        pgia.play(closeButton, 1)

        setTimeout(() => {
            window.location = e.target.href
        }, 500)
    })
})


/**
 * Page transitions
 */
const blur = document.getElementById('backdrop-blur')
const transitionText = [
  '<div>Driven by distinction</div> <div>Devoted to development.</div>',
  '<div>Designing for richer,</div> <div>more meaningful experiences.</div>',
  '<div>Restless reinvention.</div> <div>World-class expertise.</div>',
  '<div>Adding the difference.</div>',
  '<div>Exploring further<div>for greater discoveries.</div>',
  '<div>Always observing.</div>',
]
Array.from(document.querySelectorAll('a')).forEach(el => {
    el.addEventListener('click', (e) => {
      if (blur) {
        e.preventDefault()
        const animationName = e.target.pathname === '/' || e.target.pathname === '/index.html' ? 'Blur Out' : 'Blur In'
        const transitionTextEl = document.getElementById('transition-text')

        if (transitionTextEl) {
          const word = transitionText[Math.floor((Math.random() * transitionText.length) + 0)]
          
          transitionTextEl.innerHTML = word
          transitionTextEl.style.display = 'block'

          const transitionSplitText = new SplitText(document.getElementById('transition-text'), {type: 'words'})
        
          const tl = gsap.timeline({})

          tl.from(transitionSplitText.words, {
              y: '200%', autoAlpha: 0, stagger: 0.05, rotateZ: 25
          })

          tl.to(document.querySelectorAll('#transition-text div'), {
            y: '-100%', autoAlpha: 0, stagger: '0.025'
          }, '+=1')
        }

        pgia.play(blur, animationName)

        setTimeout(() => {
          window.location = e.target.href
        }, transitionTextEl ? 2000 : 500)
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

 