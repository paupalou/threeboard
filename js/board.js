import * as THREE from 'three';

window.addEventListener('load', init, false);

let scene, camera, renderer;

function init() {
  createScene();
  // createLights();
  // createBoard();
  render();
}

function createScene() {

  // set the scene size
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  // set camera attributes
  const VIEW_ANGLE = 45;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 1000;

  // create scene camera and renderer
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  renderer = new THREE.WebGLRenderer( {antialias: true} );

  // set camera options
  camera.position.set(5,3,0);
  camera.lookAt(new THREE.Vector3(0,0,0));

  // set renderer options
  renderer.setClearColor(0xfff6e6);
  renderer.shadowMap.enabled = true;
  renderer.setSize(WIDTH, HEIGHT);

  // appends renderer into dom
  document.body.appendChild(renderer.domElement);

  // update the camera and the renderer size if user resizes screen
  window.addEventListener('resize',  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }, false );

}

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

