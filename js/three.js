import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import * as dat from 'lil-gui'


// Debug
const gui = new dat.GUI()

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
  camera.position.set(1, 5, 1.8)
  scene.add(camera)

  gui.add(camera.position, 'x', -5, 5).step(0.001).name('camera.x')
  gui.add(camera.position, 'y', -5, 5).step(0.001).name('camera.y')
  gui.add(camera.position, 'z', -5, 5).step(0.001).name('camera.z')

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

  const pointLight = new THREE.PointLight(0xffffff, 2.993, 2)
  // pointLight.position.set(-0.163, 0.206, 1.189)
  pointLight.position.set(-0.04, -0.286, 0.083)
  scene.add(pointLight)

  const spotLight = new THREE.SpotLight(0xFEFEFE, 1.887, 7, Math.PI / 2, 0.25, 1)
  // spotLight.position.set(0.452, 1.681, -1.884)
  spotLight.position.set(-0.286, 2.05, 2.2962)
  spotLight.castShadow = true
  scene.add(spotLight)

  gui.add(spotLight, 'intensity', 0, 10).step(0.001).name('lightIntensity')
  gui.add(spotLight.position, 'x', -5, 5).step(0.001).name('lightX')
  gui.add(spotLight.position, 'y', -5, 5).step(0.001).name('lightY')
  gui.add(spotLight.position, 'z', -5, 5).step(0.001).name('lightZ')

  let logo = null
  // Models
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('/js/draco/')
  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)
  gltfLoader.load(
      '/assets/models/J&G Logo_v11.glb',
      (gltf) => {
        console.log(gltf);
        
        scene.add(gltf.scene)

        logo = gltf.scene.children[1]
        logo.castShadow = false

        gltf.scene.children[0].receiveShadow = true;
        gltf.scene.children[2].receiveShadow = true;


        camera.lookAt(logo.position)

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
    mouse.x = event.clientX / (sizes.width - 0.5);
    mouse.y = event.clientY / (sizes.height  - 0.5);
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
  // renderer.physicallyCorrectLights = true

  // Animate
  const clock = new THREE.Clock()
  let previousTime = 0

  const originalCameraPosition = new THREE.Vector2()
  originalCameraPosition.x = camera.position.x
  originalCameraPosition.y = camera.position.y


  const tick = () =>
  {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // gsap is imported into the global scope
    gsap.to(camera.position, { x: Math.sin(originalCameraPosition.x - mouse.x * 0.5), duration: 1})
    gsap.to(camera.position, { y: Math.cos(originalCameraPosition.y + mouse.y * 0.5), duration: 1 })

    if (logo) {
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