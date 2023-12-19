const constants = require("./constants");
const helpers = require("./helpers");

const { SplitText } = require("gsap/dist/SplitText");

exports.default = function () {
  const { adjustVolume, playTransitionText, triggerPopup } = helpers;
  const { TRANSITIONTEXT } = constants;

  console.log("home page");

  let menuAudio = false;

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

  /*
   * Scroll down button trigger
   */
  const scrollDownButton = document.querySelector(
    ".splash-page-one__scroll-down"
  );
  if (scrollDownButton) {
    scrollDownButton.addEventListener("click", (e) => {
      e.preventDefault();

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

    Array.from(chatPopup.querySelectorAll("[data-prompt]"))?.forEach(
      (prompt) => {
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
      }
    );

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

  const menu = document.querySelector(".menu");
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target.classList.contains("menu")) {
        pgia.play(menuCloseButton, 1);
      }
    });
  }

  const topRightAudio = document.getElementById("top-right-audio");
  const bottomRightAudio = document.getElementById("bottom-right-audio");
  const bottomLeftAudio = document.getElementById("bottom-left-audio");
  const aiModalAudio = document.getElementById("ai-modal-audio");
  const mainAudio = document.getElementById("main-audio");

  const secondaryAudio = [
    topRightAudio,
    bottomRightAudio,
    bottomLeftAudio,
    aiModalAudio,
  ];

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
            triggerPointPopup(
              "Wow, you're a good listener.",
              2,
              "audio_listen"
            );
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

  if (
    sessionStorage.getItem("audio_on") &&
    sessionStorage.getItem("has_navigated")
  ) {
    startHomePageAudio();
  }

  window.setMenuAudio = function () {
    menuAudio = true;
  };

  window.removeMenuAudio = function () {
    menuAudio = false;
  };

  const header = document.querySelector(".header");
  const footer = document.querySelector(".footer");

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

  // global function
  function setFirstVisit() {
    triggerPopup("Welcome to the club", 1, "visit_one");
  }

  window.finishIntro = function (el) {
    destroyIntro(el);
    setFirstVisit();
    document.querySelector("body").style.overflow = "";
    pgia.play(document.getElementById("chat"), "Chat Animate in");
    homepageHeadingTimeline.play();
  };

  const homepageHeading = document.getElementById("intro-title");
  let homepageHeadingTimeline = gsap.timeline({ paused: true });
  if (homepageHeading) {
    const headingSplit = new SplitText(homepageHeading, { type: "chars" });
    gsap.set(homepageHeading, { autoAlpha: 1 });
    homepageHeadingTimeline.from(headingSplit.chars, {
      autoAlpha: 0,
      y: "100%",
      stagger: 0.025,
    });
  }

  if (sessionStorage.getItem("has_navigated")) {
    setTimeout(() => {
      homepageHeadingTimeline.play();
      pgia.play(document.getElementById("chat"), "Chat Animate in");
    }, 2000);
  }

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
          TRANSITIONTEXT[Math.floor(Math.random() * TRANSITIONTEXT.length + 0)];
        playTransitionText(word, "Blur In", () => {
          setTimeout(() => {
            window.location = e.target.href;
          }, 500);
        });
      }, 500);
    });
  });

  require("./experience.js");

  // window.addEventListener("DOMContentLoaded", () => {
  //   import("./experience.js");
  // });
};
