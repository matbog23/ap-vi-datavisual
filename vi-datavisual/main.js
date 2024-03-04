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

const renderer = new THREE.WebGLRenderer({ alpha: true }); //set to given DIV / canvas
renderer.setSize(
  document.getElementById("container3D").clientWidth,
  document.getElementById("container3D").clientHeight
); //(document.getElementById("container3D").clientWidth, document.getElementById("container3D").clientHeight);

document.getElementById("container3D").appendChild(renderer.domElement);

// Define sphere geometries
const sphereGeometryXXL = new THREE.SphereGeometry(8, 32, 32);
const sphereGeometryXL = new THREE.SphereGeometry(3.5, 32, 32); //(scale, widthSegments, heightSegments)
const sphereGeometryL = new THREE.SphereGeometry(2, 32, 32);
const sphereGeometryM = new THREE.SphereGeometry(1, 32, 32);
const sphereGeometryS = new THREE.SphereGeometry(0.5, 32, 32);

// Define sphere materials with different colors
const sphereMaterialRe = new THREE.MeshStandardMaterial({ color: 0xc90e0e }); // Red
const sphereMaterialPi = new THREE.MeshStandardMaterial({ color: 0xfb24ff }); // Pink
const sphereMaterialGr = new THREE.MeshStandardMaterial({ color: 0x4bfc30 }); // Green
const sphereMaterialPu = new THREE.MeshStandardMaterial({ color: 0x7f15bd }); // Purple
const sphereMaterialYe = new THREE.MeshStandardMaterial({ color: 0xffca3a }); // Yellow
const sphereMaterialBl = new THREE.MeshStandardMaterial({ color: 0x1982c4 }); // Blue
const sphereMaterialOr = new THREE.MeshStandardMaterial({ color: 0xfa772a }); // Orange

// Create sphere meshes with geometries and materials
//orange
const sphere1 = new THREE.Mesh(sphereGeometryXXL, sphereMaterialOr);
const sphere2 = new THREE.Mesh(sphereGeometryM, sphereMaterialOr);
const sphere3 = new THREE.Mesh(sphereGeometryL, sphereMaterialOr);
const sphere4 = new THREE.Mesh(sphereGeometryM, sphereMaterialOr);
const sphere5 = new THREE.Mesh(sphereGeometryL, sphereMaterialOr);
const sphere6 = new THREE.Mesh(sphereGeometryM, sphereMaterialOr);
const sphere7 = new THREE.Mesh(sphereGeometryM, sphereMaterialOr);
//Pink
const sphere8 = new THREE.Mesh(sphereGeometryXL, sphereMaterialPi);
//Green
const sphere9 = new THREE.Mesh(sphereGeometryXL, sphereMaterialGr);
const sphere10 = new THREE.Mesh(sphereGeometryM, sphereMaterialGr);
const sphere11 = new THREE.Mesh(sphereGeometryL, sphereMaterialGr);
//Red
const sphere12 = new THREE.Mesh(sphereGeometryS, sphereMaterialRe);
//Yellow
const sphere13 = new THREE.Mesh(sphereGeometryXL, sphereMaterialYe);
const sphere14 = new THREE.Mesh(sphereGeometryL, sphereMaterialYe);
const sphere15 = new THREE.Mesh(sphereGeometryM, sphereMaterialYe);
//Purple
const sphere16 = new THREE.Mesh(sphereGeometryL, sphereMaterialPu);
//Blue
const sphere17 = new THREE.Mesh(sphereGeometryXL, sphereMaterialBl);
const sphere18 = new THREE.Mesh(sphereGeometryS, sphereMaterialBl);
const sphere19 = new THREE.Mesh(sphereGeometryM, sphereMaterialBl);

// Position spheres at different heights
sphere1.position.set(20, 15, 0);
sphere2.position.set(20, 5, 10);
sphere3.position.set(17, 4, 20);
sphere4.position.set(20, 1.5, 6);
sphere5.position.set(17, -2, 4);
sphere6.position.set(20, -2.5, 12);
sphere7.position.set(17, -4, 0);
sphere8.position.set(-20, 10, 0);
sphere9.position.set(-18, 0, 6);
sphere10.position.set(-18, -6, 20);
sphere11.position.set(-18, -7, 16);
sphere12.position.set(-20, -14, 6);
sphere13.position.set(-10, 9, 6);
sphere14.position.set(-10, 1, 0);
sphere15.position.set(-10, -12, 0);
sphere16.position.set(-3, 1, 0);
sphere17.position.set(-3, -3, 14);
sphere18.position.set(-4, -7, 10);
sphere19.position.set(-3, -7, 8);

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
  sphere11,
  sphere12,
  sphere13,
  sphere14,
  sphere15,
  sphere16,
  sphere17,
  sphere18,
  sphere19
);

//camera.position.z = 40;
// Add event listener for slider input
slider.addEventListener("input", () => {
  // Calculate Z position based on slider value
  const zPosition = ((slider.max - slider.value) / 100) * 100 - 30; // Invert calculation
  // Set camera position
  camera.position.z = zPosition;
});

// Adjust camera position initially based on initial slider value
const initialZPosition = ((slider.max - slider.value) / 100) * 100 - 30; // Invert calculation
camera.position.z = initialZPosition;

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
