import * as THREE from 'three';

// COLORS
const Colors = {
    red:0xf25346,
    white:0xd8d0d1,
    brown:0x59332e,
    brownDark:0x23190f,
    pink:0xF5986E,
    yellow:0xf4ce93,
    blue:0x68c3c0,
};

let scene, camera, renderer, raycaster, INTERSECTED;

let mouse = new THREE.Vector2();
let theta = 0;

function render() {
  requestAnimationFrame(render);

  // camera.lookAt( scene.position );
  // camera.updateMatrixWorld();

  raycaster.setFromCamera( mouse, camera );

  // find intersections
  const intersects = raycaster.intersectObjects( scene.children );

  if ( intersects.length > 0 ) {
    if ( INTERSECTED != intersects[ 0 ].object ) {
      console.log(intersects);
      if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
      INTERSECTED = intersects[ 0 ].object;
      INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
      INTERSECTED.material.color.setHex( Colors.blue );
    }
  } else {
    if ( INTERSECTED ) INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
    INTERSECTED = null;
  }

  // end tt
  renderer.render(scene, camera);
}

function init() {
  createScene();
  createLights();
  createBoard();
  window.addEventListener( 'mousemove', onDocumentMouseMove, false );
  render();
}

function createScene() {

  // set the scene size
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  // set camera attributes
  const VIEW_ANGLE = 90;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 0.1;
  const FAR = 1000;

  // create scene camera and renderer
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  renderer = new THREE.WebGLRenderer( {antialias: true} );

  // set camera options
  camera.position.set(0,-10,10);
  camera.lookAt(new THREE.Vector3(0,0,0));

  // set renderer options
  renderer.setClearColor(0xfff6e6);
  renderer.shadowMap.enabled = true;
  renderer.setSize(WIDTH, HEIGHT);
  renderer.sortObjects = false;

  // appends renderer into dom
  document.body.appendChild(renderer.domElement);

  // update the camera and the renderer size if user resizes screen
  window.addEventListener('resize',  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }, false );

}

function createBoard() {
  createRow(1);
  createRow(2);
  createRow(3);
  raycaster = new THREE.Raycaster();
}

function createRow(rowNumber, size = 10) {
  for (let i = 0; i < size; i++) {
    const geometry = new THREE.PlaneBufferGeometry( 2, 2, 32 );
    const material = new THREE.MeshBasicMaterial(
      {
        color: Colors.pink,
        side: THREE.DoubleSide
      }
    );
    const plane = new THREE.Mesh( geometry, material );
    plane.position.set(-5 + (2.1*i),(2.1*rowNumber-1),0);
    scene.add(plane);
  };

}


function onDocumentMouseMove( event ) {
  event.preventDefault();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}

function createLights() {
  const light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( 1, 1, 1 ).normalize();
  scene.add( light );
}

class Board {
  constructor() {
    this.mesh = new THREE.Object3D();
    this.mesh.name = 'board';
    this.mesh.add(this.initBox());
  }

  initBox() {
    const geomBox = new THREE.BoxGeometry(20,50,50,1,1,1);
    const matBox  = new THREE.MeshPhongMaterial(
      {
        color: Colors.blue,
        shading: THREE.FlatShading
      }
    );
    const box = new THREE.Mesh(geomBox, matBox);
    //box.castShadow = true;
    //box.receiveShadow = true;

    return box;
  }
}

window.addEventListener('load', init, false);

