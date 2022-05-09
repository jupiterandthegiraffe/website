gsap.registerPlugin(SplitText)

const header = document.querySelector('header')
const footer = document.querySelector('footer')

const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html'

function removeEl(el) {
    el.parentNode.removeChild(el);
}

if (!sessionStorage.getItem('has_navigated') && isHomePage) {
    document.querySelector('.splash-page-one__scroll-down').style.display = ''
    document.querySelector('.backdrop-blur').style.display = ''
    document.querySelector('.splash-pages').style.display = ''

    const splashText = document.querySelector(".splash-page-two .splash-page__main-text")
    const scrollDownText = document.getElementById('keep-going')
    
    let splashTextTimeline = null
    let scrollDownTimeline = null
    
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
        removeEl(document.querySelector('.splash-page-one__scroll-down'));
        removeEl(document.querySelector('.backdrop-blur'));
    }
    
    function splitTextUpdate(e, progress) {
        splashTextTimeline.seek(progress * 2)
        scrollDownTimeline.seek(progress * 2)
    }
    
    function splitTextComplete(e) {
    }
} else if (isHomePage) {
    removeEl(document.querySelector('.splash-page-one__scroll-down'));
    document.querySelector('#backdrop-blur').style.opacity = 0
    removeEl(document.querySelector('.splash-pages'))

    header.removeAttribute('style')
    header.removeAttribute('data-pg-ia-hide')
    footer.removeAttribute('style')
    footer.removeAttribute('data-pg-ia-hide')
} else {
  sessionStorage.setItem('has_navigated', 'true');
}

let audioOn = true
const audioButton = document.getElementById('audio')

audioButton.addEventListener('click', () => {
    if (audioOn) {
        audioOn = false
        audioButton.classList.add('audio-off')
    } else {
        audioOn = true
        audioButton.classList.remove('audio-off')
    }
})

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

const blur = document.getElementById('backdrop-blur')
console.log(blur)
Array.from(document.querySelectorAll('a')).forEach(el => {
    el.addEventListener('click', (e) => {
      if (blur) {
        e.preventDefault()
        console.log(e.target.pathname)
        const animationName = e.target.pathname === '/' || e.target.pathname === '/index.html' ? 'Blur Out' : 'Blur In'
        pgia.play(blur, animationName)

        setTimeout(() => {
          window.location = e.target.href
        }, 500)
      }

    })
})

 