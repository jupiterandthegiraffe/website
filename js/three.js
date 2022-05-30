import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import * as dat from 'lil-gui'


// Debug
// const gui = new dat.GUI()

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

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
camera.position.set(0.412, 1.2, 1.8)
scene.add(camera)

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight(0xffffff, 3.116)
directionalLight.position.set(.25, 1.189, 3.525)
directionalLight.castShadow = true
directionalLight.rotation.x = Math.PI / 2

scene.add(directionalLight)

// gui.add(directionalLight, 'intensity', 0, 10).step(0.001).name('lightIntensity')
// gui.add(directionalLight.position, 'x', -5, 5).step(0.001).name('lightX')
// gui.add(directionalLight.position, 'y', -5, 5).step(0.001).name('lightY')
// gui.add(directionalLight.position, 'z', -5, 5).step(0.001).name('lightZ')
// gui.add(directionalLight.rotation, 'x', -5, 5).step(0.001).name('lightRotationX')
// gui.add(directionalLight.rotation, 'y', -5, 5).step(0.001).name('lightRotationY')
// gui.add(directionalLight.rotation, 'z', -5, 5).step(0.001).name('lightRotationZ')

let logo = null
// Models
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('/js/draco/')
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)
gltfLoader.load(
    '/assets/models/J&G Logo_v01.glb',
    (gltf) => {
      console.log(gltf);
      
      scene.add(gltf.scene)

      logo = gltf.scene.children[2]

      camera.lookAt(logo.position)
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
renderer.physicallyCorrectLights = true

// Animate
const clock = new THREE.Clock()
let previousTime = 0


const tick = () =>
{
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - previousTime
  previousTime = elapsedTime

  // gsap is imported into the global scope
  gsap.to(camera.position, { x: Math.sin(mouse.x * 0.5), duration: 1})
  gsap.to(camera.position, { y: Math.cos(mouse.y * 0.5), duration: 1 })

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