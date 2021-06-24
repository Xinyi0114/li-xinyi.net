import * as THREE from './three.js-master/build/three.module.js';
//import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from './three.js-master/examples/jsm/controls/OrbitControls.js';
//import { CSS2DRenderer, CSS2DObject } from './three.js-master/examples/jsm/renderers/CSS2DRenderer.js';

scene = new THREE.Scene()
  const ambientLight = new THREE.AmbientLight(0x777777)
  scene.add(ambientLight)
  const pointLight = new THREE.PointLight(0xffffff,1,0)
  pointLight.position.set(500,500,-2000)
  scene.add(pointLight)
  //
  //

  //webgl renderer
  const sectionTag = document.querySelector("div.three")
  renderer = new THREE.WebGLRenderer({
    antialia:true
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setClearColor(0x000000, 1)
