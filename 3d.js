//import * as THREE from './three.js-master/build/three.module.js';
import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js';
//import {FBXLoader} from './three.js-master/examples/jsm/loaders/FBXLoader.js';
import {OrbitControls} from './three.js-master/examples/jsm/controls/OrbitControls.js';
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
*/
/*
const gltfLoader = new GLTFLoader();
const loadFemale = gltfLoader.load( './3d/female.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  gltf.scene.position.set(10, 6, -10);
}, undefined, function ( error ) {

  console.error( error );

} );

*/
const sectionTag = document.querySelector("div.three")

const scene = new THREE.Scene();
scene.background = new THREE.Color().setHSL( 0.6, 0, 1 );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
//document.body.appendChild( renderer.domElement );
sectionTag.appendChild(renderer.domElement)
				const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
				hemiLight.color.setHSL( 0.6, 1, 0.6 );
				hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
				hemiLight.position.set( 0, 50, 0 );
				scene.add( hemiLight );

				const hemiLightHelper = new THREE.HemisphereLightHelper( hemiLight, 10 );
				scene.add( hemiLightHelper );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
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

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
const gltfLoader = new GLTFLoader();
const loadFemale = gltfLoader.load( './3d/female4.gltf', function ( gltf ) {
  scene.add( gltf.scene );
  gltf.scene.position.set(0, 0, 0);
}, undefined, function ( error ) {

  //console.error( error );

} )
animate();
