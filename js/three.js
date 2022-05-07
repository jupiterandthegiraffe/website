import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as dat from 'lil-gui'


// Debug
const gui = new dat.GUI()

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

// Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// scene.add(camera)

let camera = null

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


const cursor = {
  x: {
    current: 0,
    target: 0,
    last: 0,
  },
  y: {
    current: 0,
    target: 0,
    last: 0,
  }
}
window.addEventListener('mousemove', (event) => {
  cursor.x.target = event.clientX / sizes.width - 0.5
  cursor.y.target = -(event.clientY / sizes.height - 0.5)
})

/**
 * Lights
 */
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
// scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.3)
directionalLight.position.set(0.25, 3, -2.25)
console.log(directionalLight.position);
scene.add(directionalLight)

gui.add(directionalLight, 'intensity', 0, 1)
gui.add(directionalLight.position, 'x').min(-5).max(5).step(0.001).name('light x')
gui.add(directionalLight.position, 'y').min(-5).max(5).step(0.001).name('light y')
gui.add(directionalLight.position, 'z').min(-5).max(5).step(0.001).name('light z')

// Models
const gltfLoader = new GLTFLoader()
gltfLoader.load(
    '/assets/models/JG.glb',
    (gltf) => {
      console.log(gltf);
      
      gltf.scene.scale.set(60, 60, 60)
      // gltf.scene.position.set(0, -4, 0)
      scene.add(gltf.scene)

      gui.add(gltf.scene.scale, 'x').min(0).max(100).step(0.001).name('scale x')
      gui.add(gltf.scene.scale, 'y').min(0).max(100).step(0.001).name('scale y')
      gui.add(gltf.scene.scale, 'z').min(0).max(100).step(0.001).name('scale z')

      camera = gltf.cameras[0]
      camera.aspect = sizes.width / sizes.height
      scene.add(camera)
      
      // compute the box that contains all the stuff
      // from root and below
      const box = new THREE.Box3().setFromObject(gltf.scene);
      
      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());
      
      // set the camera to frame the box
      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
    },
    () => {
        console.log('progress');
    },
    () => {
        console.log('error');
    },
)

function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
  const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
  const halfFovY = THREE.Math.degToRad(camera.fov * .5);
  const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
  // compute a unit vector that points in the direction the camera is now
  // in the xz plane from the center of the box
  const direction = (new THREE.Vector3())
      .subVectors(camera.position, boxCenter)
      .multiply(new THREE.Vector3(1, 0, 1))
      .normalize();

  // move the camera to a position distance units way from the center
  // in whatever direction the camera was from the center already
  camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

  // pick some near and far values for the frustum that
  // will contain the box.
  camera.near = boxSize / 100;
  camera.far = boxSize * 100;

  camera.updateProjectionMatrix();

  // point the camera to look at the center of the box
  camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
}

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
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

  // Render
  if (camera) {
    renderer.render(scene, camera)
  }

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()