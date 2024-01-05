import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Rive } from "@rive-app/canvas";

require("./audio-elements");

gsap.registerPlugin(SplitText, DrawSVGPlugin);

navigator.serviceWorker.getRegistrations().then(function (registrations) {
  for (let registration of registrations) {
    registration.unregister();
  }
});

let isSafari = false;
const isHomePage =
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html";
let menuAudio = false;

gsap.defaults({
  ease: "power4.inOut",
  duration: 1,
});

const legacyLinks = Array.from(document.querySelectorAll(".legacy-link"));
const legacyMode = document.getElementById("switch");
if (legacyMode) {
  legacyMode.addEventListener("change", (e) => {
    if (e.target.checked) {
      sessionStorage.setItem("legacy_mode", "true");
      legacyLinks.forEach((link) => {
        link.style.transition = "";
        link.style.opacity = 1;
        link.style.visibility = "visible";
      });
    } else {
      sessionStorage.removeItem("legacy_mode");
      legacyLinks.forEach((link) => {
        link.style.transition = "";
        link.style.opacity = 0;
        setTimeout(() => {
          link.style.visibility = "hidden";
        }, 1000);
      });
    }
  });
}
if (sessionStorage.getItem("legacy_mode")) {
  if (legacyMode) {
    legacyMode.checked = true;
  }
  legacyLinks.forEach((link) => {
    link.style.transition = "none";
    link.style.opacity = 1;
    link.style.visibility = "visible";
  });
}

window.params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

if (!window.localStorage.getItem("user-points")) {
  window.localStorage.setItem("user-points", 0);
}

if (!window.localStorage.getItem("awards")) {
  window.localStorage.setItem("awards", JSON.stringify([]));
}

const awards = JSON.parse(localStorage.awards);
if (awards.awards) {
  console.log("old awards system detected. Converting...");
  const newAwardsSystem = awards.awards.map((award) => {
    return {
      title: "",
      id: award,
      score: "",
    };
  });
  localStorage.setItem("awards", JSON.stringify(newAwardsSystem));
}

const pointsPopup = document.querySelector(".points-popup");
window.triggerPointPopup = (message, points = 1, code) => {
  const currentAwards = JSON.parse(localStorage.awards);
  const currentAwardCodes = currentAwards.map((award) => award.id);

  if (currentAwardCodes.indexOf(code) <= -1) {
    window.localStorage.setItem(
      "user-points",
      Number(window.localStorage.getItem("user-points")) + points
    );

    pointsPopup.querySelector(".points-popup__points").innerText =
      window.localStorage.getItem("user-points");
    pointsPopup.querySelector(".points-popup__text").innerText = message;

    pgia.play(pointsPopup, "Points Popup");

    dataLayer.push({ event: `Award ${code} achieved` });

    const awards = JSON.parse(window.localStorage.getItem("awards")) || [];
    awards.push({
      title: message,
      id: code,
      score: points,
    });
    window.localStorage.setItem("awards", JSON.stringify(awards));

    setTimeout(() => {
      pgia.play(pointsPopup, "Points Popdown");
    }, 5000);
  } else if (currentAwardCodes.indexOf(code) > -1) {
    console.log("code found, checking if it has message and score");
    currentAwards.forEach((award, index) => {
      if (award.id === code && !award.title && !award.score) {
        console.log(
          "current award achieved but doesn't have score or message. Updating..."
        );
        currentAwards.splice(index, 1, {
          title: message,
          id: code,
          score: points,
        });
      }
    });

    window.localStorage.setItem("awards", JSON.stringify(currentAwards));
  }
};

if (!window.localStorage.getItem("pages-visited")) {
  window.localStorage.setItem("pages-visited", JSON.stringify([]));
}

let pagesVisited = JSON.parse(
  window.localStorage.getItem("pages-visited")
).length;

const totalPagesTarget = 7;
const increasePageVisitor = (page) => {
  const pages = JSON.parse(window.localStorage.getItem("pages-visited"));
  if (pages.indexOf(page) <= -1) {
    pages.push(page);
    window.localStorage.setItem("pages-visited", JSON.stringify(pages));
    pagesVisited++;
  }

  if (pagesVisited >= totalPagesTarget) {
    triggerPointPopup(
      "You've seen just about everything there is to be seen",
      5,
      "all_pages"
    );
  }
};

/*
 * Detect safari
 * Safari doesn't support audio well enough
 */
var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("safari") != -1) {
  if (ua.indexOf("chrome") > -1) {
    // Chrome
  } else {
    isSafari = true;
    document.documentElement.classList.add("safari");
  }
}

const isMobile = ua.match(/mobile/i);

/*
 * Setup Audio Animation
 */
const container = document.getElementById("audio-animation");
let interaction = null;
if (container) {
  interaction = new Rive({
    src: "/assets/animations/audio.riv",
    canvas: container,
    autoplay: false,
    animations: "idle_out",
    onLoad: (_) => {
      if (sessionStorage.getItem("audio_on")) {
        interaction.play("idle_in");
      }
    },
  });
}

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

/*
 * Scroll down button trigger
 */
<<<<<<< Updated upstream
const scrollDownButton = document.querySelector(
  ".splash-page-one__scroll-down"
);
if (scrollDownButton) {
  scrollDownButton.addEventListener("click", (e) => {
    e.preventDefault();
=======
window.removeEl = (elementToDelete) => {
    if (elementToDelete) {
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
};
>>>>>>> Stashed changes

    if (!isSafari) {
      sessionStorage.setItem("audio_on", "true");
      audioButton.classList.remove("audio-off");

      if (interaction) {
        interaction.play("Audio In");
      }

      setTimeout(() => {
        triggerPointPopup("Welcome to the full experience.", 2, "audio_on");
      }, 8000);

      audioButton.setAttribute("aria-label", "Audio off");

      if (isHomePage && sessionStorage.getItem("has_navigated")) {
        startHomePageAudio();
        mainAudio.play();
      } else if (isHomePage) {
        mainAudio.play();
      } else {
        bgAudioFiles.forEach((audio) => audio.play());
      }

      dataLayer.push({ event: "Audio On" });
    }

    window.scrollTo({ top: window.innerHeight, behaviour: "smooth" });

    setTimeout(() => {
      pgia.play(document.getElementById("chat"), "Chat Animate in");
    }, 2000);
  });
}

window.setMenuAudio = function () {
  menuAudio = true;
};

window.removeMenuAudio = function () {
  menuAudio = false;
};

/*
 * Helper
 */
window.removeEl = (elementToDelete) => {
  elementToDelete.parentNode.removeChild(elementToDelete);
};

/**
 * Audio Control
 */
const audioButton = document.getElementById("audio-button");
const audioButtonLabel = audioButton.getAttribute("aria-label");
const bgAudioFiles = Array.from(
  document.querySelectorAll("audio.background-audio")
);
const aiModalAudio = document.getElementById("ai-modal-audio");

const audioFiles = Array.from(document.querySelectorAll("audio"));
const mainAudio = document.getElementById("main-audio");
const topRightAudio = document.getElementById("top-right-audio");
const bottomRightAudio = document.getElementById("bottom-right-audio");
const bottomLeftAudio = document.getElementById("bottom-left-audio");

const menuCloseButton = document.querySelector(".menu__close-button");
const menu = document.querySelector(".menu");
const pageDetail = document.querySelector(".page-detail__main");

const chat = document.getElementById("chat");
const chatButton = document.getElementById("chat-open");
const chatClose = document.getElementById("chat-close");
const chatPopup = document.querySelector(".chat-popup");
if (chat) {
  const closeChatWindow = () => {
    window.aiModelOpen = false;

    document.querySelector("main").setAttribute("aria-hidden", "false");

    if (aiModalAudio) {
      adjustVolume(aiModalAudio, 0, {});
    }
  };

  const openChatWindow = () => {
    window.aiModelOpen = true;

    document.querySelector("main").setAttribute("aria-hidden", "true");

    triggerPointPopup("Welcome to the future!", 4, "ai_on");

    pgia.seek(chatPopup.querySelector(".chat-popup__popular-suggestions"), 0);
    pgia.play(chatPopup.querySelector(".chat-popup__popular-suggestions"), 1);

    setTimeout(() => {
      document.querySelector(".anycb-popup-form-input").focus();
    }, 1000);

    if (aiModalAudio) {
      adjustVolume(aiModalAudio, 0.5, {});
    }
  };

  chatPopup.addEventListener("click", (e) => {
    if (e.target.classList.contains("chat-popup")) {
      pgia.play(chatClose, 1);
      closeChatWindow();
    }
  });
  chatButton.addEventListener("click", openChatWindow);
  chatClose.addEventListener("click", closeChatWindow);

  Array.from(chatPopup.querySelectorAll("[data-prompt]"))?.forEach((prompt) => {
    prompt.addEventListener("click", () => {
      chatPopup.querySelector(".anycb-popup-form-input").value =
        prompt.getAttribute("data-prompt");

      chatPopup
        .querySelector(".anycb-popup-form-input")
        .dispatchEvent(new Event("input"));

      setTimeout(() => {
        chatPopup.querySelector(".anycb-popup-form-button").click();
      }, 0);
    });
  });

  const status = document.querySelector(".chat-popup__status");
  const getStatus = async () => {
    try {
      const response = await fetch(
        "https://status.openai.com/api/v2/status.json",
        {
          method: "GET",
        }
      );

      const data = await response.json();

      status.querySelector(".chat-popup__status-message").innerHTML =
        data.status.description;
      status
        .querySelector(".chat-popup__status-indicator")
        .classList.add(
          `chat-popup__status-indicator--${data.status.indicator}`
        );
    } catch (e) {
      console.log(e);
    }
  };

  getStatus();
}

// To do with pressing escape on detail pages
const navBack = () => {
  pgia.play(document.querySelector(".page-overlay"), "Slide out");

  setTimeout(() => {
    window.location = "/";
  }, 500);
};

window.addEventListener("keyup", (e) => {
  document.documentElement.classList.add("keyboard-user");
  document.documentElement.classList.remove("mouse-user");
  if (e.key === "Escape") {
    if (window.location.pathname === "/") {
      pgia.play(menuCloseButton, "Close menu");
    } else {
      navBack();
    }
  }
});

/* helper */
window.addEventListener("mousemove", () => {
  document.documentElement.classList.remove("keyboard-user");
  document.documentElement.classList.add("mouse-user");
});

/*
 * If user tries to scroll on homepage
 */
const resetScale = () => gsap.to(".header, .footer", { scale: 1, y: 0 });
let timeout = null;
const startMousewheelDetection = () => {
  gsap.set(".header, .footer", { scale: 1 });
  window.addEventListener("mousewheel", (e) => {
    if (e.deltaY >= 20) {
      const tl = gsap.timeline({
        onStart: clearTimeout(timeout),
        onComplete: () => (timeout = setTimeout(resetScale, 500)),
      });

      tl.to(".header", { scale: 0.95, y: "+=5" });
      tl.to(".footer", { scale: 0.95, y: "-=5" }, "<");
    }
  });
};

if (menu) {
  menu.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu")) {
      pgia.play(menuCloseButton, 1);
    }
  });
}

if (pageDetail) {
  pageDetail.addEventListener("click", function (e) {
    if (e.target.classList.contains("page-detail__main")) {
      navBack();
    }
  });
}

if (isSafari) {
  audioButton.style.display = "none";
}

const secondaryAudio = [
  topRightAudio,
  bottomRightAudio,
  bottomLeftAudio,
  aiModalAudio,
];

audioButton.addEventListener("click", () => {
  if (sessionStorage.getItem("audio_on")) {
    sessionStorage.removeItem("audio_on");
    audioFiles.forEach((audio) => audio.pause());
    audioButton.setAttribute("aria-label", audioButtonLabel);
    startHomePageAudio();
    audioButton.classList.add("audio-off");

    if (interaction) {
      interaction.play("Audio Out");
    }

    dataLayer.push({ event: "Audio On" });
  } else {
    sessionStorage.setItem("audio_on", "true");
    audioButton.classList.remove("audio-off");

    if (interaction) {
      interaction.play("Audio In");
    }

    triggerPointPopup("Welcome to the full experience.", 2, "audio_on");

    audioButton.setAttribute("aria-label", "Audio off");
    if (isHomePage && sessionStorage.getItem("has_navigated")) {
      startHomePageAudio();
      mainAudio.play();
    } else if (isHomePage) {
      mainAudio.play();
    } else {
      bgAudioFiles.forEach((audio) => audio.play());
    }

    dataLayer.push({ event: "Audio On" });
  }
});

if (bgAudioFiles && !sessionStorage.getItem("audio_on")) {
  // Pause all audio
  bgAudioFiles.forEach((audio) => {
    audio.pause();
  });
} else if (bgAudioFiles) {
  // Play bg audio
  audioButton.classList.remove("audio-off");

  if (!sessionStorage.getItem("has_navigated")) {
    mainAudio.play();
  } else {
    bgAudioFiles.forEach((audio) => {
      audio.play().catch((e) => {
        sessionStorage.removeItem("audio_on");
        audioButton.classList.add("audio-off");
      });
    });
  }
}

if (
  window.location.pathname.match(/\/(.+)\.|\??/)[0] &&
  window.location.pathname.match(/\/(.+)\.|\??/)[1] !== "index"
) {
  increasePageVisitor(window.location.pathname.match(/\/(.+)\.|\??/)[1]);
}
if (window.location.pathname.match(/end-credits/)) {
  triggerPointPopup("Wow! You found a secret!", 3, "end_cred");
}

function swing(p) {
  return 0.5 - Math.cos(p * Math.PI) / 2;
}

function adjustVolume(
  element,
  newVolume,
  { duration = 1000, easing = swing, interval = 13 }
) {
  const originalVolume = element.volume;
  const delta = newVolume - originalVolume;

  if (!delta || !duration || !easing || !interval) {
    element.volume = newVolume;
    return Promise.resolve();
  }

  const ticks = Math.floor(duration / interval);
  let tick = 1;

  return new Promise((resolve) => {
    const timer = setInterval(() => {
      element.volume = originalVolume + easing(tick / ticks) * delta;

      if (++tick === ticks + 1) {
        clearInterval(timer);
        resolve();
      }
    }, interval);
  });
}

window.startHomePageAudio = () => {
  if (sessionStorage.getItem("audio_on") && !isSafari) {
    secondaryAudio.forEach((audio) => {
      audio.play();
      audio.volume = 0;
    });

    let audioDiscoveryTracker = false;
    let discoverTopRight = false;
    let discoverBottomRight = false;
    let discoverBottomLeft = false;

    window.addEventListener("mousemove", (e) => {
      if (menuAudio) {
        mainAudio.volume = 1;

        topRightAudio.volume = 0;
        bottomLeftAudio.volume = 0;
        bottomRightAudio.volume = 0;
      } else {
        const xPos = e.clientX / window.innerWidth;
        const yPos = e.clientY / window.innerHeight;

        const leftToRight = Math.max((xPos - 0.5) * 2, 0);
        const rightToLeft = Math.max(1 - (xPos + 0.5), 0) * 2;
        const topToBottom = Math.max((1 - (yPos + 0.5)) * 2, 0);
        const bottomToTop = Math.max(yPos - 0.5, 0) * 2;
        const centreX =
          1 -
          Math.abs(
            (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)
          );
        const centreY =
          1 -
          Math.abs(
            (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
          );

        const topRight = Math.min(leftToRight, topToBottom);
        const bottomRight = Math.min(leftToRight, bottomToTop);
        const bottomLeft = Math.min(rightToLeft, bottomToTop);

        if (topRight > 0.5 && !discoverTopRight) {
          discoverTopRight = true;
        }

        if (bottomRight > 0.5 && !discoverBottomRight) {
          discoverBottomRight = true;
        }

        if (bottomLeft > 0.5 && !discoverBottomLeft) {
          discoverBottomLeft = true;
        }

        if (
          !audioDiscoveryTracker &&
          discoverTopRight &&
          discoverBottomRight &&
          discoverBottomLeft
        ) {
          audioDiscoveryTracker = true;
          triggerPointPopup("Wow, you're a good listener.", 2, "audio_listen");
        }

        topRightAudio.volume = window.aiModelOpen ? 0 : topRight;
        bottomRightAudio.volume = window.aiModelOpen ? 0 : bottomRight;
        bottomLeftAudio.volume = window.aiModelOpen ? 0 : bottomLeft;
        mainAudio.volume = window.aiModelOpen
          ? 0
          : Math.max(
              Math.min(rightToLeft, topToBottom),
              Math.min(centreX, centreY)
            );
      }
    });
  }
};

const colorModeSelector = document.querySelector(".mode-selector");
if (colorModeSelector) {
  colorModeSelector.addEventListener("click", (e) => {
    if (e.target.classList.contains("mode-selector__button--dark-mode")) {
      localStorage.removeItem("color_theme");
      document.documentElement.classList.remove("light-mode");
      setDarkTexture();
    } else {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("color_theme", "light");
      setLightTexture();
    }
  });
}

// Because of scope, we move these functions outside of homepage as these are controlled by Pinegrow Interacitons
let svgLogoTimeline = null;
window.drawSVG = function (e, progress) {
  if (svgLogoTimeline) {
    svgLogoTimeline.seek(progress * 2);
  }
};

window.destroyIntro = function (el) {
  const introPinnedWrapper = document.querySelector("main > .pin-spacer");
  pgia.scrollSceneManager.removeScene(el, true);

  // because we remove the scene, we need to remove all animation properties
  header.removeAttribute("style");
  header.removeAttribute("data-pg-ia-hide");
  footer.removeAttribute("style");
  footer.removeAttribute("data-pg-ia-hide");

  document.getElementById("backdrop").removeAttribute("data-pg-ia-hide");
  document.getElementById("backdrop").style.opacity = "";
  document.getElementById("backdrop").style.visibility = "";

  removeEl(introPinnedWrapper);

  if (document.querySelector(".splash-page-one__scroll-down")) {
    removeEl(document.querySelector(".splash-page-one__scroll-down"));
  }
  removeEl(document.querySelector(".draw-me").parentNode);
  document.querySelector(".backdrop-blur").style.opacity = "0";
  document.querySelector(".backdrop-blur").style.visibility = "hidden";

  sessionStorage.setItem("has_navigated", true);
  localStorage.setItem("repeat_visitor", true);

  // if (!sessionStorage.getItem('feedback_dismissed') && feedback && sessionStorage.getItem('has_navigated')) {
  //   pgia.play(feedback, 'Feedback In')
  // }

  startHomePageAudio();

  startMousewheelDetection();
};

// const feedback = document.querySelector('.feedback')
// if (!sessionStorage.getItem('feedback_dismissed') && feedback && sessionStorage.getItem('has_navigated')) {
//   pgia.play(feedback, 'Feedback In')
// }

// window.setFeedbackDismissed = function () {
//   sessionStorage.setItem('feedback_dismissed', true)
// }

const playTransitionText = (word, animationName, cb) => {
  const transitionTextEl = document.getElementById("transition-text");
  const blur = document.getElementById("backdrop-blur");

  pgia.play(blur, animationName);

  if (transitionTextEl) {
    transitionTextEl.innerHTML = word;
    transitionTextEl.style.display = "block";

    transitionTextEl.setAttribute("aria-live", "polite");

    const transitionSplitText = new SplitText(transitionTextEl, {
      type: "words,lines",
    });

    gsap.set(transitionSplitText.lines, { overflow: "hidden" });

    const tl = gsap.timeline({
      onComplete: () => {
        transitionTextEl.removeAttribute("aria-live");
        cb();
      },
    });

    tl.from(transitionSplitText.words, {
      y: "200%",
      autoAlpha: 0,
      stagger: 0.05,
    });

    tl.to(
      "canvas.webgl",
      {
        autoAlpha: 0,
      },
      "-=0.5"
    );

    tl.to(
      document.querySelectorAll("#transition-text div"),
      {
        y: "-100%",
        autoAlpha: 0,
        stagger: "0.025",
      },
      "1.5"
    );
  }
};

function setFirstVisit() {
  triggerPointPopup("Welcome to the club", 1, "visit_one");
}

const homepageHeading = document.getElementById('intro-title')
let homepageHeadingTimeline = gsap.timeline({paused: true})
    if (homepageHeading) {
        const headingSplit = new SplitText(homepageHeading, {type: 'chars'})
        gsap.set(homepageHeading, {autoAlpha: 1})
        homepageHeadingTimeline.from(headingSplit.chars, {
            autoAlpha: 0,
            y: '100%',
            stagger: 0.025,
        })
    }

window.finishIntro = function (el) {
  destroyIntro(el);
  setFirstVisit();
  document.querySelector("body").style.overflow = "";
  pgia.play(document.getElementById("chat"), "Chat Animate in");
  homepageHeadingTimeline.play()
};

/*
 * Handle homepage intro
 */
if (!sessionStorage.getItem("has_navigated") && isHomePage) {
  if (isMobile) {
    const word = document.querySelector(".splash-page__main-text").innerText;
    document.querySelector(".loader").style.display = "none";

    playTransitionText(word, "Blur In", () => {
      gsap.to(".header, .footer, .webgl", {
        autoAlpha: 1,
        filter: "blur(0px)",
      });

      gsap.to("#backdrop-blur", {
        autoAlpha: 0,
        filter: "blur(0px)",
      });

      gsap.to(".mode-selector", {
        filter: "blur(0px)",
      });

      setTimeout(() => {
        pgia.play(document.getElementById("chat"), "Chat Animate in");

        setFirstVisit();

        homepageHeadingTimeline.play()
      }, 1000);
    });
  } else if (localStorage.getItem("repeat_visitor")) {
    document.querySelector(".loader").style.display = "none";

    playTransitionText(
      "Hello again traveller. Welcome back.",
      "Blur In",
      () => {
        gsap.to(".header, .footer, .webgl", {
          autoAlpha: 1,
          filter: "blur(0px)",
        });

        gsap.to("#backdrop-blur", {
          autoAlpha: 0,
          filter: "blur(0px)",
        });

        gsap.to(".mode-selector", {
          filter: "blur(0px)",
        });

        setTimeout(() => {
          destroyIntro(document.querySelector(".splash-pages"));

          homepageHeadingTimeline.play()

          pgia.play(document.getElementById("chat"), "Chat Animate in");


          triggerPointPopup("Do you come here often?", 1, "repeat_visit");
        }, 1000);
      }
    );
  } else {
    // First launch of direct to homepage
    const scrollDown = document.querySelector(".splash-page-one__scroll-down");
    scrollDown.style.display = "";
    document.querySelector(".backdrop-blur").style.display = "";
    document.querySelector("#backdrop").style.opacity = "0";
    document.querySelector("#backdrop").style.visibility = "hidden";
    document.querySelector(".splash-pages").style.display = "";
    document.querySelector("body").style.overflow = "auto";

    // Play audio text animation
    if (!isSafari) {
      const audioText = document.getElementById("audio-text");
      const audioTextSplitText = new SplitText(audioText, { type: "words" });

      gsap.to(audioText, { autoAlpha: 1 });

      gsap.from(audioTextSplitText.words, {
        y: "200%",
        autoAlpha: 0,
        stagger: 0.05,
        rotateZ: 25,
      });
    }

    const splashText = document.querySelector(".splash-page__main-text");
    if (splashText) {
      const splashTexttl = gsap.timeline({});
      splashTexttl.from(splashText, {
        autoAlpha: 0,
      });

      splashTexttl.from(
        ".splash-page__privacy-policy-text",
        {
          autoAlpha: 0,
        },
        "-=50%"
      );

      splashTexttl.from(
        scrollDown,
        {
          autoAlpha: 0,
        },
        "-=50%"
      );
    }

    svgLogoTimeline = gsap.timeline({});
    svgLogoTimeline.from(".draw-me", { duration: 2, drawSVG: "0" }, 0.5);
  }
} else if (isHomePage) {
  // Homepage from another page (could have sessionStorage.getItem('has_navigated'))
  removeEl(document.querySelector(".splash-page-one__scroll-down"));
  document.querySelector("#backdrop-blur").style.opacity = 0;
  removeEl(document.querySelector(".splash-pages"));

  header.removeAttribute("style");
  header.removeAttribute("data-pg-ia-hide");
  footer.removeAttribute("style");
  footer.removeAttribute("data-pg-ia-hide");

  // const feedback = document.querySelector('.feedback')
  // pgia.play(feedback, 0)

  if (sessionStorage.getItem("has_navigated")) {
    audioButton.classList.add("interaction");
  }

  if (
    sessionStorage.getItem("audio_on") &&
    sessionStorage.getItem("has_navigated")
  ) {
    startHomePageAudio();
  }

  if (!isSafari) {
    const audioText = document.getElementById("audio-text");

    gsap.set(audioText, { autoAlpha: 1 });
  }

  setTimeout(() => {
    homepageHeadingTimeline.play()
    pgia.play(document.getElementById("chat"), "Chat Animate in");
  }, 2000);
} else {
  // to any other page
  sessionStorage.setItem("has_navigated", "true");

  footer.classList.add("blur");
  header.style.zIndex = -1;

  const backButton = document.querySelector(".page-overlay__back-button");
  if (backButton) {
    backButton.addEventListener("click", (e) => {
      e.preventDefault();

      navBack();
    });
  }

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("background")) {
      e.preventDefault();

      navBack();
    }
  });

  const leadText = gsap.utils.toArray(".lead-text");
  if (leadText.length) {
    for (let i = 0; i < leadText.length; i++) {
      const text = leadText[i];
      const leadTextSplitText = new SplitText(text, { type: "words" });
      gsap.set(leadTextSplitText.words, { opacity: 0, y: 10 });
      gsap.to(leadTextSplitText.words, {
        y: 1,
        autoAlpha: 1,
        stagger: 0.05,
        delay: 1,
        ease: Power4.easeOut,
      });
    }
  }

  const isProcessPage = window.location.pathname.match(/process/);
  if (isProcessPage) {
    const sections = gsap.utils.toArray(
      ".page-overlay > .page-overlay__content-container"
    );
    sections.forEach((section) => {
      const sectionSplitText = new SplitText(
        section.querySelectorAll(".process__split-text"),
        { type: "words" }
      );
      const button = section.querySelector("button");

      gsap.set(sectionSplitText.words, { display: "none" });

      const sectionSplitTextTimeline = gsap.from(sectionSplitText.words, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05,
        paused: true,
        duration: 0.5,
      });

      if (button) {
        button.addEventListener("click", (e) => {
          gsap.set(sectionSplitText.words, { display: "inline-block" });
          gsap.set(section.querySelectorAll(".process__split-text"), {
            attr: { role: "alert", "aria-live": "assertive" },
          });
          sectionSplitTextTimeline.play();
          gsap.to(button, { autoAlpha: 0 });
        });
      }
    });
  }

  const person = gsap.utils.toArray(".person");
  if (person) {
    person.forEach((button) => {
      button.addEventListener("click", (e) => {
        const target = e.currentTarget;
        person.forEach((p) => p.classList.remove("active"));
        target.classList.toggle("active");
        setTimeout(() => {
          target.classList.remove("active");
        }, 20 * 1000); // 20 seconds
      });
    });
  }

  setTimeout(() => {
    triggerPointPopup("The inquisitive type, eh?", 1, "nested_page");
  }, 3000);
}

const transitionText = [
  "<div>Sitting at the intersection</div> <div>of creativity and technology.</div>",
  "<div>Designing for richer,</div> <div>more meaningful experiences.</div>",
  "<div>Restless reinvention.</div> <div>World-class expertise.</div>",
  "<div>Immersive storytelling</div> <div>for the web.</div>",
  "<div>Exploring further<div>for greater discoveries.</div>",
  "<div>Always observing.</div>",
  "<div>Invoking emotions.</div>",
];

/**
 * Transitioning from side menu
 */
const closeButton = document.querySelector(".menu__close-button");
document.querySelectorAll(".menu a").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();

    pgia.play(closeButton, 1);

    setTimeout(() => {
      const word =
        transitionText[Math.floor(Math.random() * transitionText.length + 0)];
      playTransitionText(word, "Blur In", () => {
        setTimeout(() => {
          window.location = e.target.href;
        }, 500);
      });
    }, 500);
  });
});

/**
 * Page transitions to detail screen
 */
const allLinks = [
  ...Array.from(document.querySelectorAll(".header a")),
  ...Array.from(document.querySelectorAll(".footer a")),
  ...Array.from(document.querySelectorAll("main a")),
];

allLinks.forEach((el) => {
  if (!el.getAttribute("data-no-nav")) {
    el.addEventListener("click", function (e) {
      e.preventDefault();

      const href = this.getAttribute("href");

      if (href !== window.location.href) {
        const animationName =
          e.target.pathname === "/" || e.target.pathname === "/index.html"
            ? "Blur Out"
            : "Blur In";

        if (!isHomePage && (href !== "/" || href !== "/index.html")) {
          const blur = document.getElementById("backdrop-blur");
          pgia.play(document.querySelector(".page-overlay"), "Transition");
          pgia.play(blur, "Blur Out");

          setTimeout(() => {
            pgia.play(blur, "Blur In");

            setTimeout(() => {
              window.location = href;
            }, 500);
          }, 500);
        } else {
          const word =
            transitionText[
              Math.floor(Math.random() * transitionText.length + 0)
            ];
          playTransitionText(
            word,
            animationName,
            () => (window.location = href)
          );
        }
      }
    });
  }
});

/* 404 page */
const blurOutLinks = Array.from(document.querySelectorAll(".blur-out-link"));
if (blurOutLinks.length) {
  const blurOutAnim = gsap.timeline({ paused: true });
  blurOutAnim.to(".blur-out", { filter: "blur(0px)" });
  blurOutAnim.to(
    ".four-oh-four__content",
    { autoAlpha: 0, filter: "blur(10px)" },
    "<"
  );
  blurOutLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      blurOutAnim.play();
      setTimeout(() => {
        window.location = e.target.href;
      }, 1000);
    });
  });
}

window.addAudioClass = function (el) {
  setTimeout(() => {
    el.classList.add("interaction");
  }, 1 * 1000);
};

window.addEventListener("DOMContentLoaded", () => {
  import("./experience.js");
});

require("./page-loader");
