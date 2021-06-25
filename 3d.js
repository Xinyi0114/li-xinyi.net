import * as THREE from './three.js-master/build/three.module.js';
import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js';
//import {FBXLoader} from './three.js-master/examples/jsm/loaders/FBXLoader.js';
//import {OrbitControls} from './three.js-master/examples/jsm/controls/OrbitControls.js';
//import { CSS2DRenderer, CSS2DObject} from './three.js-master/examples/jsm/renderers/CSS2DRenderer.js';
import { DRACOLoader } from './three.js-master/examples/jsm/loaders/DRACOLoader.js';
/*
const sectionTag = document.querySelector("div.three")
const renderer = new THREE.WebGLRenderer({
  antialia:true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0x000000, 1)
sectionTag.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 5000)
//camera.position.z = -50;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 100;
controls.maxDistance = 500;
controls.maxPolarAngle = Math.PI / 2;
controls.keyPanSpeed = 15;
controls.update()
controls.listenToKeyEvents( window );

const gltfLoader = new GLTFLoader();
const loadFemale = gltfLoader.load( './3d/female.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  gltf.scene.position.set(10, 6, -10);
}, undefined, function ( error ) {

  console.error( error );

} );

  const scene = new THREE.Scene()
  scene.add( camera );
  const ambientLight = new THREE.AmbientLight(0x404040)
  scene.add(ambientLight)
  const pointLight = new THREE.PointLight(0xffffff,1,0)
  pointLight.position.set(500,500,-2000)
  scene.add(pointLight)
  const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
  scene.add( light );

  //
  //

  //

  const geometry = new THREE.BoxGeometry( 5, 5, 5 );
  const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
*/

function main() {
  const canvas = document.querySelector('div.three');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue

  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  function render(time) {
    time *= 0.001;  // convert time to seconds

    cube.rotation.x = time;
    cube.rotation.y = time;

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

}

main();
