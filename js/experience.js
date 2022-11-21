import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";

// import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";

// import GUI from 'lil-gui'
// const gui = new GUI()

import dustVertexShader from "../assets/shaders/dust/vertex.glsl?raw";
import dustFragmentShader from "../assets/shaders/dust/fragment.glsl?raw";

const staticAudio = document.getElementById("static-audio");
const loader = document.getElementsByClassName("loader")[0];
let loaderNumber, loaderBar;
if (loader) {
  loaderNumber = document.getElementsByClassName("loader-number")[0];
  loaderBar = document.getElementsByClassName("loader-bar")[0];
}

// Debug
let logo = null;
let composer = null;
let effect2 = null;
let glitchPass = null;
let glitch = 0;

const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

function initScene(canvas) {
  // Scene
  const scene = new THREE.Scene();

  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    composer.setSize(sizes.width, sizes.height);

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    particleMaterial.uniforms.uPixelRatio.value = Math.min(
      window.devicePixelRatio,
      2
    );
  });

  /**
   * Camera
   */
  const camera = new THREE.PerspectiveCamera(
    45,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.set(1, 0.329, 2.296);
  scene.add(camera);

  /**
   * Lights
   */
  const pointLight = new THREE.PointLight(0xffffff, 0.2);
  pointLight.position.set(-0.04, -0.5, 0.083);

  const pointLight2 = new THREE.PointLight(0xffffff);
  pointLight2.position.set(0.78, 1.114, 1.284);
  pointLight2.decay = 2;
  pointLight2.intensity = 8;
  pointLight2.distance = 5;
  pointLight2.castShadow = true;
  scene.add(pointLight, pointLight2);

  const textureLoader = new THREE.TextureLoader();
  const backgroundTexture = textureLoader.load(
    "/assets/models/J&G - Base 4K.webp"
  );
  const backgroundNormal = textureLoader.load(
    "/assets/models/J&G - Normal 4K.webp"
  );
  const backgroundRough = textureLoader.load("/assets/models/rough.webp");

  const backgroundMaterial = new THREE.MeshStandardMaterial({
    map: backgroundTexture,
  });
  backgroundMaterial.normalMap = backgroundNormal;
  backgroundMaterial.normalScale = new THREE.Vector2(0.5, 0.5);
  backgroundMaterial.roughnessMap = backgroundRough;
  backgroundMaterial.metalnessMap = backgroundRough;
  backgroundMaterial.roughness = 5;
  backgroundMaterial.metalness = 0;

  const originalCameraPosition = new THREE.Vector2();

  // Models
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/js/draco/");
  const gltfLoader = new GLTFLoader();
  gltfLoader.setDRACOLoader(dracoLoader);
  gltfLoader.load(
    "/assets/models/scene 1.glb", ///J&G Logo_v15-transform.glb',
    (gltf) => {
      // console.log(gltf);

      logo = gltf.scene.children.filter(
        (child) => child.name === "J&G_Logo"
      )[0];
      const bg = gltf.scene.children.filter(
        (child) => child.name === "Background"
      )[0];
      const light = gltf.scene.children.filter(
        (child) => child.name === "SpotLight"
      )[0];

      scene.add(logo, bg);

      bg.material = backgroundMaterial;

      originalCameraPosition.x = logo.rotation._x;
      originalCameraPosition.y = logo.rotation._y;

      camera.lookAt(logo.position);

      const tl = gsap.timeline();

      tl.to(loader, {
        opacity: 0,
        duration: 1,
        onComplete: () => loader.parentNode.removeChild(loader),
      });

      // Fade in on load
      tl.to(
        canvas,
        {
          autoAlpha: 1,
        },
        ">"
      );
    },
    (progress) => {
      const loadingPercent = Math.floor(
        (progress.loaded / (progress.total || 6921916)) * 100
      );
      loaderNumber.innerText = loadingPercent;
      loaderBar.style.width = `${loadingPercent}%`;
    },
    (e) => {
      console.log("error:", e);
    }
  );

  const mouse = new THREE.Vector2();
  window.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX / sizes.width - 0.5;
    mouse.y = event.clientY / sizes.height - 0.5;

    if (effect2) {
      const centreX =
        1 -
        Math.abs(
          (event.clientX - window.innerWidth / 2) / (window.innerWidth / 2)
        );
      const centreY =
        1 -
        Math.abs(
          (event.clientY - window.innerHeight / 2) / (window.innerHeight / 2)
        );

      effect2.uniforms["amount"].value =
        Math.min(1 - centreX, 1 - centreY) * 0.003;
    }
  });

  /*
   *Particles
   */
  const particlesGeometry = new THREE.BufferGeometry(1, 32, 32);
  const dustCount = 17;
  const positions = new Float32Array(dustCount * 3);
  const scaleArray = new Float32Array(dustCount);

  for (let i = 0; i < dustCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 2;

    scaleArray[i] = Math.random();
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );
  particlesGeometry.setAttribute(
    "aScale",
    new THREE.BufferAttribute(scaleArray, 1)
  );

  const particleMaterial = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uSize: { value: 80.0 },
    },
    vertexShader: dustVertexShader,
    fragmentShader: dustFragmentShader,
    transparent: true,
    // blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const particles = new THREE.Points(particlesGeometry, particleMaterial);
  scene.add(particles);

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.physicallyCorrectLights = true;

  if (!isMobile) {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    effect2 = new ShaderPass(RGBShiftShader);
    effect2.uniforms["amount"].value = 0;
    composer.addPass(effect2);

    glitchPass = new GlitchPass();
    glitchPass.enabled = false;
    composer.addPass(glitchPass);

    // const effectFilm = new FilmPass( 0.35, 0.025, 648, false );
    // composer.addPass( effectFilm );
  }

  canvas.addEventListener("click", () => {
    glitch = 1;

    if (sessionStorage.getItem("audio_on")) {
      staticAudio.play();
    }

    triggerPointPopup("You found a glitch!", 1, "glitch");
  });

  // Animate
  const clock = new THREE.Clock();
  // let previousTime = 0

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    particleMaterial.uniforms.uTime.value = elapsedTime * 0.5;

    // Render
    if (composer || renderer) {
      if (isMobile) {
        renderer.render(scene, camera);
      } else {
        if (glitch) {
          glitchPass.enabled = true;
          glitchPass.curF = glitch++;

          if (glitchPass.curF >= 30) {
            glitch = 0;
            glitchPass.enabled = false;
          }
        }
        if (logo) {
          // gsap is imported into the global scope
          gsap.to(logo.rotation, {
            x: originalCameraPosition.x + mouse.y * 0.1,
            duration: 1,
            ease: "none",
          });
          gsap.to(logo.rotation, {
            z: originalCameraPosition.y + -(mouse.x * 0.3),
            duration: 1,
            ease: "none",
          });
        }
        composer.render();
      }
    }

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
}

if (canvas) {
  initScene(canvas);
}
