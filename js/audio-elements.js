const audioEls = Array.from(document.querySelectorAll('[data-audio]'))
if (audioEls) {
  audioEls.forEach(el => {
    // get id's of the audio the element should trigger
    const audioIds = el.getAttribute('data-audio').split(',')

    if (audioIds) {
      audioIds.forEach((id, index) => {
        const elementId = id.trim()
        const event = el.getAttribute('data-audio-event').split(',')[index]
        const delay = el.getAttribute('data-audio-delay')?.split(',').filter(item => item.split(':') ? item.split(':')[0].match(event) : false) || []

        if (event) {
          const audio = document.getElementById(elementId)
          
          if (audio) {
            // Create listerners for each event
            el.addEventListener(event.trim(), () => {
              if (sessionStorage.getItem("audio_on")) {
                if (delay.length) {
                  setTimeout(() => {
                    audio.play()
                  }, delay[0].split(':')[0] === event.trim() ? delay[0].split(':')[1] * 1000 : 0)
                } else {
                  audio.play()
                }
              }
            })
          } else {
            console.log('Cannot find audio element with id #' + elementId)
          }
        } else {
          console.log('No matching event for id #', elementId)
        }
      })
    }
  })
}