import { SplitText } from 'gsap/SplitText';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(SplitText, DrawSVGPlugin);

let isSafari = false;
let hasScrolled = false;
const isHomePage =
  window.location.pathname === "/" ||
  window.location.pathname === "/index.html";
let menuAudio = false;

gsap.defaults({
  ease: "power4.inOut",
  duration: 1,
});

if (!window.localStorage.getItem("user-points")) {
  window.localStorage.setItem("user-points", 0);
}

if (!window.localStorage.getItem("awards")) {
  window.localStorage.setItem("awards", JSON.stringify({ awards: [] }));
}

const pointsPopup = document.querySelector(".points-popup");
const triggerPointPopup = (message, points = 1, code) => {
  const currentAwards = JSON.parse(window.localStorage.getItem("awards"));

  if (currentAwards.awards.indexOf(code) <= -1) {
    window.localStorage.setItem(
      "user-points",
      Number(window.localStorage.getItem("user-points")) + points
    );

    pointsPopup.querySelector(".points-popup__points").innerText =
      window.localStorage.getItem("user-points");
    pointsPopup.querySelector(".points-popup__text").innerText = message;

    pgia.play(pointsPopup, "Points Popup");

    dataLayer.push({ event: `Award ${code} achieved` });

    const awards =
      JSON.parse(window.localStorage.getItem("awards")).awards || [];
    awards.push(code);
    window.localStorage.setItem("awards", JSON.stringify({ awards }));

    setTimeout(() => {
      pgia.play(pointsPopup, "Points Popdown");
    }, 5000);
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
const scrollDownButton = document.querySelector(
  ".splash-page-one__scroll-down"
);
if (scrollDownButton) {
  scrollDownButton.addEventListener("click", (e) => {
    e.preventDefault();

    window.scrollTo({ top: window.innerHeight, behaviour: "smooth" });
  });
}

window.setMenuAudio = function() {
  menuAudio = true;
}

window.removeMenuAudio = function() {
  menuAudio = false;
}

/*
 * Helper
 */
window.removeEl = (el) => {
  el.parentNode.removeChild(el);
}

/**
 * Audio Control
 */
const audioButton = document.getElementById("audio-button");
const audioButtonLabel = audioButton.getAttribute("aria-label");
const bgAudioFiles = Array.from(
  document.querySelectorAll("audio.background-audio")
);
const audioFiles = Array.from(document.querySelectorAll("audio"));
const mainAudio = document.getElementById("main-audio");
const topRightAudio = document.getElementById("top-right-audio");
const bottomRightAudio = document.getElementById("bottom-right-audio");
const bottomLeftAudio = document.getElementById("bottom-left-audio");

const menuCloseButton = document.querySelector(".menu__close-button");
const pageOverlay = document.querySelector(".page-overlay");
const menu = document.querySelector(".menu");
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

const secondaryAudio = [topRightAudio, bottomRightAudio, bottomLeftAudio];

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

        topRightAudio.volume = topRight;
        bottomRightAudio.volume = bottomRight;
        bottomLeftAudio.volume = bottomLeft;
        mainAudio.volume = Math.max(
          Math.min(rightToLeft, topToBottom),
          Math.min(centreX, centreY)
        );
      }
    });
  }
}

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
window.drawSVG = function(e, progress) {
  if (svgLogoTimeline) {
    svgLogoTimeline.seek(progress * 2);
  }
}

window.destroyIntro = function(el) {
  pgia.scrollSceneManager.removeScene(el, true);

  // because we remove the scene, we need to remove all animation properties
  header.removeAttribute("style");
  header.removeAttribute("data-pg-ia-hide");
  footer.removeAttribute("style");
  footer.removeAttribute("data-pg-ia-hide");
  document.getElementById("backdrop").removeAttribute("data-pg-ia-hide");
  document.getElementById("backdrop").style.opacity = "";
  document.getElementById("backdrop").style.visibility = "";

  removeEl(el);
  removeEl(document.querySelector(".splash-page-one__scroll-down"));
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
}

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

  pgia.play(blur, animationName);
};

function setFirstVisit() {
  triggerPointPopup("Welcome to the club", 1, "visit_one");
}

window.finishIntro = function(el) {
  destroyIntro(el);
  setFirstVisit();
}

/*
 * Handle homepage intro
 */
if (!sessionStorage.getItem("has_navigated") && isHomePage) {
  if (isMobile) {
    const el = document.querySelector(".splash-pages");
    const word = document.querySelector(".splash-page__main-text").innerText;
    document.querySelector(".loader").style.display = "none";

    playTransitionText(word, "Blur In", () => {
      gsap.to(".header, .footer, .webgl", {
        autoAlpha: 1,
        filter: "blur(0)",
      });

      gsap.to("#backdrop-blur", {
        autoAlpha: 0,
        filter: "blur(0)",
      });

      gsap.to(".mode-selector", {
        filter: "blur(0)",
      });

      setTimeout(() => {
        destroyIntro(el);

        setFirstVisit();
      }, 1000);
    });
  } else if (localStorage.getItem("repeat_visitor")) {
    const el = document.querySelector(".splash-pages");
    document.querySelector(".loader").style.display = "none";

    playTransitionText(
      "Hello again traveller. Welcome back.",
      "Blur In",
      () => {
        gsap.to(".header, .footer, .webgl", {
          autoAlpha: 1,
          filter: "blur(0)",
        });

        gsap.to("#backdrop-blur", {
          autoAlpha: 0,
          filter: "blur(0)",
        });

        gsap.to(".mode-selector", {
          filter: "blur(0)",
        });

        setTimeout(() => {
          destroyIntro(el);

          triggerPointPopup("Do you come here often?", 1, "repeat_visit");
        }, 1000);
      }
    );
  } else {
    // First launch of direct to homepage
    document.querySelector(".splash-page-one__scroll-down").style.display = "";
    document.querySelector(".backdrop-blur").style.display = "";
    document.querySelector("#backdrop").style.opacity = "0";
    document.querySelector("#backdrop").style.visibility = "hidden";
    document.querySelector(".splash-pages").style.display = "";

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

    const splashText = document.querySelector(
      ".splash-page .splash-page__main-text"
    );
    if (splashText) {
      const splashTextSplitText = new SplitText(splashText, {
        type: "words",
      });

      gsap.from(splashTextSplitText.words, {
        autoAlpha: 0,
        stagger: 0.05,
        filter: "blur(10px)",
      });

      gsap.from(".splash-page .splash-page__privacy-policy-text", {
        autoAlpha: 0,
        filter: "blur(10px)",
        delay: 1.5,
      });
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

  startMousewheelDetection();
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
        pgia.play(document.getElementById("backdrop-blur"), "Page In");
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

/**
 * Contact form
 */
const formType = document.getElementById("form-type");
const budget = document.getElementById("budget");

if (formType) {
  formType.addEventListener("change", (e) => {
    const isProjectProposal = e.target.value === "Project Proposal";

    if (isProjectProposal) {
      budget.style.display = "block";
      setTimeout(() => {
        budget.setAttribute("data-pg-ia-show", "");
        budget.removeAttribute("data-pg-ia-hide");
      }, 300);
    } else {
      budget.removeAttribute("data-pg-ia-show");
      budget.classList.add("fade-out");
      setTimeout(() => {
        budget.style.display = "none";
        budget.classList.remove("fade-out");
        budget.setAttribute("data-pg-ia-hide", "");
      }, 300);
    }
  });
}

const people = Array.from(document.querySelectorAll(".person"));
if (people.length) {
  people.forEach((person) => {
    const image = person.querySelector(".person-image");
    const name = person.querySelector(".person__overlay-text");
    const title = person.querySelector(".person__overlay-title");
    const readMore = person.querySelector(".person__read-more-text");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: person,
        start: "top bottom",
        end: "+=500",
        scrub: 0.3,
      },
    });

    tl.from(image, { autoAlpha: 0, scale: 0.9 })
      .from(name, { autoAlpha: 0, x: "-100%" })
      .from(title, { y: "-100%", autoAlpha: 0 })
      .from(readMore, { y: "-100%", autoAlpha: 0 });
  });
}

window.addAudioClass = function(el) {
  setTimeout(() => {
    el.classList.add("interaction");
  }, 1 * 1000);
}

/*
 * Background "splash" on homepage links
 */
let navLinks = Array.from(document.querySelectorAll(".nav__link")) || [];
const menuLinks =
  Array.from(document.querySelectorAll(".main-menu__links")) || [];

navLinks = navLinks.concat(menuLinks);

if (navLinks.length) {
  for (let i = 0; i < navLinks.length; i++) {
    const link = navLinks[i];
    const rotation = Math.floor(Math.random() * (5 - -5 + 1) + -5);
    link.style.setProperty("--rotation", `${rotation}deg`);
  }
}

/*
 * Pinning on services page
 */
const services = document.querySelector(".services");
if (services) {
  ScrollTrigger.matchMedia({
    "(min-width: 576px)": () => {
      const servicesTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: services,
          start: "top bottom+=200px",
          end: "+=3000px",
          scrub: 1,
          onUpdate: drawNumbers,
          duration: 0,
        },
      });

      servicesTimeline.from(".services__column", {
        autoAlpha: 0,
        stagger: 0.025,
      });

      // Need to create a seperate pin ScrollTrigger
      ScrollTrigger.create({
        trigger: ".services",
        start: "center center",
        end: "+=2000px",
        pin: true,
      });

      const svgNumberTimeline = gsap.timeline();
      svgNumberTimeline.from(".draw-me", {
        duration: 1,
        drawSVG: 0,
      });
      svgNumberTimeline.pause();

      function drawNumbers(el) {
        svgNumberTimeline.seek(el.progress);
      }
    },
  });
}

window.addEventListener('DOMContentLoaded', () => {
  import("./experience.js")
})