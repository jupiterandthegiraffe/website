import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass.js';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader.js';

// import * as dat from 'lil-gui'

// Debug
// const gui = new dat.GUI()
let logo = null
let composer = null

const lightImage = new Image()
const lightTexture = new THREE.Texture(lightImage)

lightImage.onload = () => {
  lightTexture.needsUpdate = true
}

lightImage.src = '../assets/models/J&G - Base 4K-white.png'

window.setLightTexture = () => {
  logo.material.map = lightTexture
  logo.material.needsUpdate = true
}

const darkImage = new Image()
const darkTexture = new THREE.Texture(darkImage)

darkImage.onload = () => {
  darkTexture.needsUpdate = true
}

darkImage.src = '../assets/models/J&G - Base 4K.png'

window.setDarkTexture = () => {
  logo.material.map = darkTexture
  logo.material.needsUpdate = true
}

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

function initScene() {
  // Scene
  const scene = new THREE.Scene()

  // Sizes
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  } 

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    composer.setSize( sizes.width, sizes.height )

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  })

  /**
   * Camera
   */
  const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
  camera.position.set(1, 0.329, 2.296)
  scene.add(camera)

  /**
   * Lights
   */
  const pointLight = new THREE.PointLight(0xffffff, 1, 1)
  pointLight.position.set(-0.04, -0.286, 0.083)
  scene.add(pointLight)
  
  const pointLight2 = new THREE.PointLight(0xffffff, 1, 1)
  pointLight2.position.set(0, 0.921, 0.958)
  pointLight2.rotation.set(1.026,0, 0)
  pointLight2.intensity = 6
  pointLight2.decay = 1.5
  pointLight2.distance = 0
  scene.add(pointLight2)

  const originalCameraPosition = new THREE.Vector2()

  // Models
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('/js/draco/')
  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)
  gltfLoader.load(
      '/assets/models/J&G Logo_v15-transformed.glb',
      (gltf) => {
        console.log(gltf);
        
        scene.add(gltf.scene)

        logo = gltf.scene.children[0].children[1]
        const bg = gltf.scene.children[0].children[0]
        logo.castShadow = true

        bg.receiveShadow = true;

        originalCameraPosition.x = logo.rotation._x
        originalCameraPosition.y = logo.rotation._y

        camera.lookAt(logo.position)

        // Fade in on load
        gsap.to(canvas, {
          autoAlpha: 1,
          delay: .2
        })
      },
      () => {
          console.log('progress');
      },
      (e) => {
          console.log('error:', e);
      },
  )

  const mouse = new THREE.Vector2();
  window.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / sizes.width) - 0.5
    mouse.y = (event.clientY / sizes.height)  - 0.5
  })

  // Renderer
  const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.physicallyCorrectLights = true

  composer = new EffectComposer( renderer );
  composer.addPass( new RenderPass( scene, camera ) );

  window.effect2 = new ShaderPass( RGBShiftShader );
  composer.addPass( effect2 );
  
  const effectFilm = new FilmPass( 0.35, 0.025, 648, false );
  composer.addPass( effectFilm );

  // Animate
  const clock = new THREE.Clock()
  let previousTime = 0

  const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    if (logo) {
      // gsap is imported into the global scope
      gsap.to(logo.rotation, { x: originalCameraPosition.x + (mouse.y * 0.30), duration: 1})
      gsap.to(logo.rotation, { z: originalCameraPosition.y + -(mouse.x * 0.30), duration: 1})

      camera.lookAt(logo.position)
    }

    // Render
    if (composer) {
      // renderer.render(scene, camera)
      composer.render();
    }

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }

  tick()
}

if (canvas) {
  initScene()
}