import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Vector2,
  Vector3,
  requestAnimationFrame
} from 'three'

// COLORS
const Colors = {
  red: 0xf25346,
  white: 0xd8d0d1,
  brown: 0x59332e,
  brownDark: 0x23190f,
  pink: 0xF5986E,
  yellow: 0xf4ce93,
  blue: 0x68c3c0
}

let scene
let camera
let renderer
let raycaster
let INTERSECTED

const mouse = new Vector2()

function handleIntersects (intersects) {
  if (intersects.length > 0) {
    if (INTERSECTED !== intersects[0].object) {
      if (INTERSECTED) {
        INTERSECTED.material.color.setHex(INTERSECTED.currentHex)
      }
      INTERSECTED = intersects[0].object
      INTERSECTED.currentHex = INTERSECTED.material.color.getHex()
      INTERSECTED.material.color.setHex(Colors.blue)
    }
  } else {
    if (INTERSECTED) {
      INTERSECTED.material.color.setHex(INTERSECTED.currentHex)
    }
    INTERSECTED = null
  }
}

function render () {
  // build animation frame
  requestAnimationFrame(render)

  // raycaster init
  raycaster.setFromCamera(mouse, camera)

  // find intersections
  const intersects = raycaster.intersectObjects(scene.children)

  // handle intersections
  handleIntersects(intersects)

  // render
  renderer.render(scene, camera)
}

function createScene () {
  // set the scene size
  const WIDTH = window.innerWidth
  const HEIGHT = window.innerHeight

  // set camera attributes
  const VIEW_ANGLE = 80
  const ASPECT = WIDTH / HEIGHT
  const NEAR = 0.1
  const FAR = 1000

  // create scene camera and renderer
  scene = new Scene()
  camera = new PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR)
  renderer = new WebGLRenderer({ antialias: true })

  // set camera options
  camera.position.set(0, -5, 5)
  camera.lookAt(new Vector3(0, 0, 0))

  // set renderer options
  renderer.setClearColor(0xfff6e6)
  renderer.shadowMap.enabled = true
  renderer.setSize(WIDTH, HEIGHT)
  renderer.sortObjects = false

  // appends renderer into dom
  document.body.appendChild(renderer.domElement)

  // update the camera and the renderer size if user resizes screen
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
  }, false)
}

function createRow (rowNumber, size = 3) {
  for (let i = 0; i < size; i += 1) {
    const geometry = new BoxBufferGeometry(2, 2, 0.2)
    console.log(geometry.index.array)

    // const faceMaterial = new THREE.MeshBasicMaterial({ color: Colors.red });

    // const faceGeo = new THREE.Geometry();
    // const face = new THREE.Face3(
    //   geometry.index.array[0],
    //   geometry.index.array[1],
    //   geometry.index.array[2]
    // );
    // faceGeo.faces.push(face);

    // scene.add(new THREE.Mesh(faceGeo, faceMaterial));

    const material = new MeshBasicMaterial({
      color: Colors.yellow
    })
    const plane = new Mesh(geometry, material)
    plane.position.set(-2 + (2.1 * i), (2.4 * (rowNumber - 1)), 0)
    scene.add(plane)
  }
}

function createBoard (rows = 3) {
  for (const x of [...new Array(rows).keys()]) { createRow(x + 1) }
  raycaster = new Raycaster()
}

function onDocumentMouseMove (event) {
  event.preventDefault()
  mouse.x = ((event.clientX / window.innerWidth) * 2) - 1
  mouse.y = -((event.clientY / window.innerHeight) * 2) + 1
}

function createLights () {
  const light = new DirectionalLight(0xffffff, 1)
  light.position.set(1, 1, 1).normalize()
  scene.add(light)
}

function init () {
  createScene()
  // createLights();
  // createBoard();
  // window.addEventListener('mousemove', onDocumentMouseMove, false);
  render()
}

window.addEventListener('load', init, false)
