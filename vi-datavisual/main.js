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

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(
  document.getElementById("container3D").clientWidth,
  document.getElementById("container3D").clientHeight
);
document.getElementById("container3D").appendChild(renderer.domElement);

// Define sphere geometries
const sphereGeometryXXL = new THREE.SphereGeometry(8, 32, 32);
const sphereGeometryXL = new THREE.SphereGeometry(3.5, 32, 32);
const sphereGeometryL = new THREE.SphereGeometry(2, 32, 32);
const sphereGeometryM = new THREE.SphereGeometry(1, 32, 32);
const sphereGeometryS = new THREE.SphereGeometry(0.5, 32, 32);

// Define sphere materials with different colors
const sphereMaterialRe = new THREE.MeshStandardMaterial({ color: 0xc90e0e });
const sphereMaterialPi = new THREE.MeshStandardMaterial({ color: 0xfb24ff });
const sphereMaterialGr = new THREE.MeshStandardMaterial({ color: 0x4bfc30 });
const sphereMaterialPu = new THREE.MeshStandardMaterial({ color: 0x7f15bd });
const sphereMaterialYe = new THREE.MeshStandardMaterial({ color: 0xffca3a });
const sphereMaterialBl = new THREE.MeshStandardMaterial({ color: 0x1982c4 });
const sphereMaterialOr = new THREE.MeshStandardMaterial({ color: 0xfa772a });

// Create sphere meshes with geometries and materials
const sphere1 = new THREE.Mesh(sphereGeometryXXL, sphereMaterialOr);
const sphere2 = new THREE.Mesh(sphereGeometryM, sphereMaterialOr);
const sphere3 = new THREE.Mesh(sphereGeometryL, sphereMaterialOr);
const sphere4 = new THREE.Mesh(sphereGeometryM, sphereMaterialOr);
const sphere5 = new THREE.Mesh(sphereGeometryL, sphereMaterialOr);
const sphere6 = new THREE.Mesh(sphereGeometryM, sphereMaterialOr);
const sphere7 = new THREE.Mesh(sphereGeometryM, sphereMaterialOr);

const sphere8 = new THREE.Mesh(sphereGeometryXL, sphereMaterialPi);
const sphere9 = new THREE.Mesh(sphereGeometryXL, sphereMaterialGr);
const sphere10 = new THREE.Mesh(sphereGeometryM, sphereMaterialGr);
const sphere11 = new THREE.Mesh(sphereGeometryL, sphereMaterialGr);

const sphere12 = new THREE.Mesh(sphereGeometryM, sphereMaterialRe);
const sphere13 = new THREE.Mesh(sphereGeometryXL, sphereMaterialYe);
const sphere14 = new THREE.Mesh(sphereGeometryL, sphereMaterialYe);
const sphere15 = new THREE.Mesh(sphereGeometryM, sphereMaterialYe);

const sphere16 = new THREE.Mesh(sphereGeometryL, sphereMaterialPu);
const sphere17 = new THREE.Mesh(sphereGeometryXL, sphereMaterialBl);
const sphere18 = new THREE.Mesh(sphereGeometryS, sphereMaterialBl);
const sphere19 = new THREE.Mesh(sphereGeometryM, sphereMaterialBl);

// Position spheres at different heights
sphere1.position.set(20, 14, 0);
sphere2.position.set(20, 4, 10);
sphere3.position.set(17, 3, 20);
sphere4.position.set(20, 0.5, 6);
sphere5.position.set(17, -1, 4);
sphere6.position.set(20, -1.5, 12);
sphere7.position.set(17, -3, 0);
sphere8.position.set(-20, 9, 0);
sphere9.position.set(-18, -1, 6);
sphere10.position.set(-18, -5, 20);
sphere11.position.set(-18, -6, 16);
sphere12.position.set(-20, -13, 6);
sphere13.position.set(-10, 8, 6);
sphere14.position.set(-10, 0, 0);
sphere15.position.set(-10, -11, 0);
sphere16.position.set(-3, 0, 0);
sphere17.position.set(-3, -2, 14);
sphere18.position.set(-4, -6, 10);
sphere19.position.set(-3, -6, 8);

// Define cube geometry and material
const cubeGeometryX = new THREE.BoxGeometry(60, 0.5, 0.5);
const cubeGeometryY = new THREE.BoxGeometry(0.5, 40, 0.5);

const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });

// Create cube mesh
const cubeX = new THREE.Mesh(cubeGeometryX, cubeMaterial);
const cubeY = new THREE.Mesh(cubeGeometryY, cubeMaterial);
cubeX.position.set(0, -15, 20); // Set cube position
cubeY.position.set(-25, 0, 20); // Set cube position

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
  sphere19,
  cubeX,
  cubeY
);

// Add event listener for slider input
slider.addEventListener("input", () => {
  const zPosition = ((slider.max - slider.value) / 100) * 100;
  camera.position.z = zPosition;
});

const initialZPosition = ((slider.max - slider.value) / 100) * 100;
camera.position.z = initialZPosition;

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0xff0fff);
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);

controls.minAzimuthAngle = -Math.PI / 10;
controls.maxAzimuthAngle = Math.PI / 10;

controls.minPolarAngle = (3 * Math.PI) / 6;
controls.maxPolarAngle = (3 * Math.PI) / 5;

controls.enableDamping = true;
controls.dampingFactor = 0.5;

controls.minDistance = 5;
controls.maxDistance = 50;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
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

// Define raycaster and spheres globally
const raycaster = new THREE.Raycaster();
const spheres = [
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
  sphere19,
];

// Define sphere messages and colors
const sphereMessages = [
  "Babellen met Lien",
  "Babellen bij Suitsupply",
  "Babellen bij Musea",
  "Babellen in de Trein",
  "Babellen in de Aula",
  "Babellen met Lucas P",
  "Babellen met Gezin",
  "SMSen met Lien",
  "Whatsappkes van Amber",
  "Whatsappkes van Matthias",
  "Whatsappkes van IDL IV",
  "Discord berichten van MaisonGhost",
  "Snaps van Lies",
  "Snaps van Nikita",
  "Snaps van Pauline",
  "Bellen met Lucas",
  "Discord call met Camiel",
  "Discord call met Block",
  "Discord call met Dario",
];

const sphereColors = [
  0xfa772a, 0xfa772a, 0xfa772a, 0xfa772a, 0xfa772a, 0xfa772a, 0xfa772a,
  0xfb24ff, 0x4bfc30, 0x4bfc30, 0x4bfc30, 0xc90e0e, 0xffca3a, 0xffca3a,
  0xffca3a, 0x7f15bd, 0x1982c4, 0x1982c4, 0x1982c4,
  // Add more colors as needed
];

// Function to create and update popup
function createPopup(message, color) {
  // Create or update popup element
  let popup = document.getElementById("popup");
  if (!popup) {
    popup = document.createElement("div");
    popup.id = "popup";
    popup.classList.add("popup");
    document.body.appendChild(popup);
  }
  popup.innerHTML = ""; // Clear previous content

  // Add message to popup
  const messageElement = document.createElement("p");
  messageElement.textContent = message;
  popup.appendChild(messageElement);

  // Add colored orb to popup
  const orb = document.createElement("div");
  orb.classList.add("orb");
  orb.style.backgroundColor = "#" + color.toString(16);
  popup.appendChild(orb);
}

// Function to handle mouse move event
function onMouseMove(event) {
  // Calculate mouse position in normalized device coordinates (NDC)
  const mouse = new THREE.Vector2();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Raycast from camera
  raycaster.setFromCamera(mouse, camera);

  // Check for intersections with spheres
  const intersects = raycaster.intersectObjects(spheres);

  // If intersection found, display popup with message
  if (intersects.length > 0) {
    const intersectedSphere = intersects[0].object;
    const index = spheres.indexOf(intersectedSphere);
    const message = sphereMessages[index];
    const color = sphereColors[index];
    createPopup(message, color);
  } else {
    // If no intersection, remove popup
    const popup = document.getElementById("popup");
    if (popup) {
      popup.remove();
    }
  }
}

// Add event listener for mouse move
document.addEventListener("mousemove", onMouseMove, false);
