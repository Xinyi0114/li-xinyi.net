import * as THREE from './three.js-master/build/three.module.js';
import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js';
import {FBXLoader} from './three.js-master/examples/jsm/loaders/FBXLoader.js';
import {OrbitControls} from './three.js-master/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject} from './three.js-master/examples/jsm/renderers/CSS2DRenderer.js';

const gltfLoader = new GLTFLoader();
const FBXloader = new FBXLoader();
const loadFemale = gltfLoader.load( './3d/female.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  gltf.scene.position.set(10, 6, -10);
  gltf.scene.layers.set(1)
}, undefined, function ( error ) {

  console.error( error );

} );

  const scene = new THREE.Scene()
  const ambientLight = new THREE.AmbientLight(0x777777)
  scene.add(ambientLight)
  const pointLight = new THREE.PointLight(0xffffff,1,0)
  pointLight.position.set(500,500,-2000)
  scene.add(pointLight)
  //
  //

  //webgl renderer
  const sectionTag = document.querySelector("div.three")
  const renderer = new THREE.WebGLRenderer({
    antialia:true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setClearColor(0x000000, 1)

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 5000)
  camera.position.z = -50;
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
  //
