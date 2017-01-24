import * as THREE from 'three';

//COLORS
const Colors = {
    red:0xf25346,
    white:0xd8d0d1,
    brown:0x59332e,
    brownDark:0x23190f,
    pink:0xF5986E,
    yellow:0xf4ce93,
    blue:0x68c3c0,
};

let scene, camera, renderer;

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

function init() {
  createScene();
  createBoard();
  // createLights();
  render();
}

function createScene() {

  // set the scene size
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  // set camera attributes
  const VIEW_ANGLE = 45;
  const ASPECT = WIDTH / HEIGHT;
  const NEAR = 1;
  const FAR = 10000;

  // create scene camera and renderer
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  renderer = new THREE.WebGLRenderer( {antialias: true} );

  // set camera options
  camera.position.set(500,800,1300);
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

function createBoard() {
  // const board = new Board();
  // console.log(board.mesh.name);
  // board.mesh.position.set(10,0,0);
  // console.log(board.mesh.position);
  // scene.add(board.mesh);

  // const mesh = new THREE.Object3D();
  // mesh.name = 'board';

  var size = 500, step = 500/1.5;
  var geometry = new THREE.Geometry();

  for ( var i = - size; i <= size; i += step ) {
    geometry.vertices.push( new THREE.Vector3( - size, 0, i ) );
    geometry.vertices.push( new THREE.Vector3(   size, 0, i ) );
    geometry.vertices.push( new THREE.Vector3( i, 0, - size ) );
    geometry.vertices.push( new THREE.Vector3( i, 0,   size ) );
  }

  var material = new THREE.LineBasicMaterial(
    {
      color: Colors.yellow,
      linewidth: 3,
      opacity: 0.2,
      transparent: false
    }
  );
  var line = new THREE.LineSegments(geometry, material);
  scene.add(line);

  // var raycaster = new THREE.Raycaster();
  // var mouse = new THREE.Vector2();
  // var geometry = new THREE.PlaneBufferGeometry( 1000, 1000 );
  // geometry.rotateX( - Math.PI / 2 );
  // var plane = new THREE.Mesh(
  //   geometry,
  //   new THREE.MeshBasicMaterial({ visible: false })
  // );
  // scene.add(plane);

  // const geomBox = new THREE.BoxGeometry(1, 0, 1);
  // const matBox = new THREE.MeshBasicMaterial({color: Colors.blue});
  // const matBox  = new THREE.MeshPhongMaterial(
  //   {
  //     color: Colors.blue,
  //   }
  // );
  // const box = new THREE.Mesh(geomBox, matBox);

  // const matLine = new THREE.LineBasicMaterial({color: Colors.brownDark});
  // box.position.set(10,0,0);
  // box.castShadow = true;
  // box.receiveShadow = true;
  // mesh.add(box);
  // scene.add(box);
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

