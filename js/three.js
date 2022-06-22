import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

import * as dat from 'lil-gui'

// Debug
// const gui = new dat.GUI()
let logo = null

const lightImage = new Image()
const lightTexture = new THREE.Texture(lightImage)

lightImage.onload = () => {
  lightTexture.needsUpdate = true
}

lightImage.src = '../assets/models/J&G - Base 4K-white.png'

window.setLightTexture = () => {
  logo.material.map = lightTexture
  // logo.material.map.flipY = true
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
  // logo.material.map.flipY = true
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

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  /**
   * Camera
   */
  // Base camera
  const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
  camera.position.set(1, 0.329, 2.296)
  scene.add(camera)

  // gui.add(camera.position, 'x', -5, 5).step(0.001).name('camera.x')
  // gui.add(camera.position, 'y', -5, 5).step(0.001).name('camera.y')
  // gui.add(camera.position, 'z', -5, 5).step(0.001).name('camera.z')

  /**
   * Lights
   */
  // const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
  // directionalLight.position.set(0.698, 2.91, 1.35)
  // directionalLight.castShadow = true
  // directionalLight.rotation.x = Math.PI / 2

  // scene.add(directionalLight)

  // gui.add(directionalLight, 'intensity', 0, 10).step(0.001).name('lightIntensity')
  // gui.add(directionalLight.position, 'x', -5, 5).step(0.001).name('lightX')
  // gui.add(directionalLight.position, 'y', -5, 5).step(0.001).name('lightY')
  // gui.add(directionalLight.position, 'z', -5, 5).step(0.001).name('lightZ')
  // gui.add(directionalLight.rotation, 'x', -5, 5).step(0.001).name('lightRotationX')
  // gui.add(directionalLight.rotation, 'y', -5, 5).step(0.001).name('lightRotationY')
  // gui.add(directionalLight.rotation, 'z', -5, 5).step(0.001).name('lightRotationZ')

  const pointLight = new THREE.PointLight(0xffffff, 1, 1)
  // pointLight.position.set(-0.163, 0.206, 1.189)
  pointLight.position.set(-0.04, -0.286, 0.083)
  scene.add(pointLight)
  
  // const pointLight2 = new THREE.PointLight(0xffffff, 1, 1)
  // // pointLight.position.set(-0.163, 0.206, 1.189)
  // pointLight2.position.set(-0.04, -0.286, 0.083)
  // scene.add(pointLight2)

  // const spotLight = new THREE.SpotLight(0xFEFEFE, 1, 2, 0.734, 0.64, 0)
  // // spotLight.position.set(0.452, 1.681, -1.884)
  // spotLight.position.set(0.733, 1.228, 2.240)
  // spotLight.castShadow = true
  // scene.add(spotLight)

  // gui.add(pointLight2, 'intensity', 0, 10).step(0.001).name('lightIntensity')
  // gui.add(pointLight2.position, 'x', -5, 5).step(0.001).name('lightX')
  // gui.add(pointLight2.position, 'y', -5, 5).step(0.001).name('lightY')
  // gui.add(pointLight2.position, 'z', -5, 5).step(0.001).name('lightZ')
  // gui.add(pointLight2, 'decay', -5, 5).step(0.001).name('decay')

  const originalCameraPosition = new THREE.Vector2()


  // Models
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('/js/draco/')
  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)
  gltfLoader.load(
      '/assets/models/J&G Logo_v14.glb',
      (gltf) => {
        console.log(gltf);
        
        scene.add(gltf.scene)

        logo = gltf.scene.children[2]
        logo.castShadow = true

        gltf.scene.children[1].receiveShadow = true;

        gltf.scene.children[0].children[0].intensity = 3
        // gltf.scene.children[0].children[0].radius = 20
        gltf.scene.children[0].children[0].decay = 1.5

        originalCameraPosition.x = logo.rotation._x
        originalCameraPosition.y = logo.rotation._y

        camera.lookAt(logo.position)

        // gui.add(logo.rotation, 'x', -5, 5).step(0.001).name('logo.x')
        // gui.add(logo.rotation, 'y', -5, 5).step(0.001).name('logo.y')
        // gui.add(logo.rotation, 'z', -5, 5).step(0.001).name('logo.z')


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
    if (camera) {
      renderer.render(scene, camera)
    }

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  }

  tick()
}

if (canvas) {
  initScene()
}