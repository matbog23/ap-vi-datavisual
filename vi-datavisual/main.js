import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

let object;
let objToRender = "DataVis3D";

const loader = new GLTFLoader();

loader.load(
  `../vi-data3js/public/Assets/${objToRender}`,
  function (gltf) {
    object = gltf.scene;
    scene.add(object);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  function (error) {
    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true }); //set to given DIV / canvas
renderer.setSize(
  document.getElementById("container3D").clientWidth,
  document.getElementById("container3D").clientHeight
); //(document.getElementById("container3D").clientWidth, document.getElementById("container3D").clientHeight);

document.getElementById("container3D").appendChild(renderer.domElement);

/*const geometry = new THREE.TorusKnotGeometry(2, 0.6, 64, 16);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const position = new THREE.Vector3(300, 200, 500);
const torusKnot = new THREE.Mesh(geometry, material, position);
scene.add(torusKnot);*/

// Define sphere geometries
const sphereGeometryXL = new THREE.SphereGeometry(3, 32, 32); //(scale, widthSegments, heightSegments)
const sphereGeometryL = new THREE.SphereGeometry(2, 32, 32);
const sphereGeometryM = new THREE.SphereGeometry(1, 32, 32);
const sphereGeometryS = new THREE.SphereGeometry(0.5, 32, 32);

// Define sphere materials with different colors
const sphereMaterial1 = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Red
const sphereMaterial2 = new THREE.MeshStandardMaterial({ color: 0xf235df }); // Pink
const sphereMaterial3 = new THREE.MeshStandardMaterial({ color: 0x4bfc30 }); // Green

// Create sphere meshes with geometries and materials
//orange
const sphere1 = new THREE.Mesh(sphereGeometryXL, sphereMaterial1);
const sphere2 = new THREE.Mesh(sphereGeometryM, sphereMaterial1);
const sphere3 = new THREE.Mesh(sphereGeometryL, sphereMaterial1);
const sphere4 = new THREE.Mesh(sphereGeometryM, sphereMaterial1);
const sphere5 = new THREE.Mesh(sphereGeometryL, sphereMaterial1);
const sphere6 = new THREE.Mesh(sphereGeometryM, sphereMaterial1);
const sphere7 = new THREE.Mesh(sphereGeometryM, sphereMaterial1);
//Pink
const sphere8 = new THREE.Mesh(sphereGeometryXL, sphereMaterial2);
//Green
const sphere9 = new THREE.Mesh(sphereGeometryXL, sphereMaterial3);
const sphere10 = new THREE.Mesh(sphereGeometryM, sphereMaterial3);
const sphere11 = new THREE.Mesh(sphereGeometryL, sphereMaterial3);

// Position spheres at different heights
sphere1.position.set(20, 15, 0);
sphere2.position.set(20, 5, 5);
sphere3.position.set(17, 4, 10);
sphere4.position.set(20, 1.5, 3);
sphere5.position.set(17, -2, 2);
sphere6.position.set(20, -2.5, 6);
sphere7.position.set(17, -4, 0);
sphere8.position.set(-20, 10, 0);
sphere9.position.set(-18, 0, 3);
sphere10.position.set(-18, -6, 10);
sphere11.position.set(-18, -7, 8);

// Add spheres to the scene
scene.add(
  sphere1,
  sphere2,
  sphere3,
  sphere4,
  sphere5,
  sphere6,
  sphere7,
  sphere8,
  sphere9,
  sphere10,
  sphere11
);

camera.position.z = 25;

//Add Lights
const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

//Add Controls
const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(
    document.getElementById("container3D").clientWidth,
    document.getElementById("container3D").clientHeight
  );
});

animate();
