import { SplitText } from "gsap/SplitText";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Rive } from "@rive-app/canvas";
import { playTransitionText, triggerPopup } from "./helpers.js";
import { TRANSITIONTEXT } from "./constants.js";

require("./audio-elements");

gsap.registerPlugin(SplitText, DrawSVGPlugin);

navigator.serviceWorker.getRegistrations().then(function (registrations) {
  for (let registration of registrations) {
    registration.unregister();
  }
});

window.isSafari = false;
const isHomePage =
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html";

gsap.defaults({
  ease: "power4.inOut",
  duration: 1,
});

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

window.triggerPointPopup = triggerPopup;

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
    triggerPopup(
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
 * Helper
 */
window.removeEl = (elementToDelete) => {
  elementToDelete.parentNode.removeChild(elementToDelete);
};

/**
 * Audio Control
 */
const audioButton = document.getElementById("audio-button");
if (audioButton) {
  const audioButtonLabel = audioButton.getAttribute("aria-label");
  const bgAudioFiles = Array.from(
    document.querySelectorAll("audio.background-audio")
  );

  const audioFiles = Array.from(document.querySelectorAll("audio"));
  const mainAudio = document.getElementById("main-audio");

  if (isSafari && audioButton) {
    audioButton.style.display = "none";
  }

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

      triggerPopup("Welcome to the full experience.", 2, "audio_on");

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
}

const menuCloseButton = document.querySelector(".menu__close-button");
const pageDetail = document.querySelector(".page-detail__main");

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

if (pageDetail) {
  pageDetail.addEventListener("click", function (e) {
    if (e.target.classList.contains("page-detail__main")) {
      navBack();
    }
  });
}

// log a page visit to user score
if (
  window.location.pathname.match(/\/(.+)\.|\??/)[0] &&
  window.location.pathname.match(/\/(.+)\.|\??/)[1] !== "index"
) {
  increasePageVisitor(window.location.pathname.match(/\/(.+)\.|\??/)[1]);
}

// TODO: Dark/light mode
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

// global function
function setFirstVisit() {
  triggerPopup("Welcome to the club", 1, "visit_one");
}

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

        homepageHeadingTimeline.play();
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

          homepageHeadingTimeline.play();

          pgia.play(document.getElementById("chat"), "Chat Animate in");

          triggerPopup("Do you come here often?", 1, "repeat_visit");
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

  if (!isSafari) {
    const audioText = document.getElementById("audio-text");

    gsap.set(audioText, { autoAlpha: 1 });
  }
} else {
  // to any other page
  sessionStorage.setItem("has_navigated", "true");

  if (footer) {
    footer.classList.add("blur");
  }
  if (header) {
    header.style.zIndex = -1;
  }

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

  setTimeout(() => {
    triggerPopup("The inquisitive type, eh?", 1, "nested_page");
  }, 3000);
}

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
            TRANSITIONTEXT[
              Math.floor(Math.random() * TRANSITIONTEXT.length + 0)
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

require("./page-loader");
