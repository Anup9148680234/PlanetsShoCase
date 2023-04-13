import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import stars from '/src/stars.jpg';
import mars7 from '/src/mars.jpg';
import earth7 from '/src/earth.jpg';
import pluto7 from '/src/pluto.jpg';
import sun7 from '/src/sun.jpg';
import mercury7 from '/src/mercury.jpg';
import venus7 from '/src/venus1.jpg';
import jupiter7 from '/src/jupiter.jpg';
import saturn7 from '/src/saturn.png';
import uranus7 from '/src/uranus.jpg';
import neptune7 from '/src/neptune.png';
import ring from '/src/rings.png';
import {gsap} from 'gsap';


const p1 = mars7;
const p2 = earth7;
const p3 = pluto7;
const p4 = sun7;
const p5 = mercury7;
const p6 = venus7;
const p7 = jupiter7;
const p8 = saturn7;
const p9 = uranus7 ;
const p10 = neptune7;

const scene = new THREE.Scene();
const texture = new THREE.TextureLoader();
const geometry = new THREE.SphereGeometry(4.5,64,64);

const material = new THREE.MeshStandardMaterial({
  map: texture.load(p2),
});
const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

const pol = new THREE.AmbientLight(0xffffff,0.33,1);
scene.add(pol);
const sunpol = new THREE.AmbientLight(0xffffff,0.75,1);

const ringmaterial = new THREE.MeshStandardMaterial({
  map: texture.load(ring),
  side:THREE.DoubleSide,
});
const geometryring = new THREE.RingGeometry(6, 10, 64, 64);
geometryring.rotateX(1.6);
const ringmesh = new THREE.Mesh(geometryring,ringmaterial);

const t1 = gsap.timeline({defaults: {duration:1}});
t1.fromTo(mesh.scale,{z:0,x:0,y:0}, {z:1,x:1,y:1});



function SunApply(){
  var one = document.getElementById('h1_text');
  one.innerText = "Sun"; 
  var two = document.getElementById('desc');
  two.innerText = "The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds everything from the biggest planets to tiny debris in its orbit.";
  var c1 = document.getElementById('content_one');
  c1.innerText = "0 Earth Days";
  var c2 = document.getElementById('content_two');
  c2.innerText = "0 AU";
  var c3 = document.getElementById('content_three');
  c3.innerText = "LATIN WORD: SOL";
  var c4 = document.getElementById('content_four');
  c4.innerText = "0";
  document.getElementById('icons').src = "/sun-icon.png";
  scene.remove(ringmesh);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p4),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  console.log('sun apllied');
  scene.add(sunpol);

}

function MercuryApply() {
  var one = document.getElementById('h1_text');
  one.innerText = "Mercury"; 
  var two = document.getElementById('desc');
  two.innerText = "Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days."
  var c1 = document.getElementById('content_one');
  c1.innerText = "88 Earth Days";
  var c2 = document.getElementById('content_two');
  c2.innerText = "0.4 AU";
  var c3 = document.getElementById('content_three');
  c3.innerText = "ROMAN GOD OF SPEED";
  var c4 = document.getElementById('content_four');
  c4.innerText = "0";
  document.getElementById('icons').src = "/mercury-icon.png";

  scene.remove(sunpol);
  scene.remove(ringmesh);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p5),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  console.log('Mercury apllied');

}

function VenusApply() {
  var one = document.getElementById('h1_text');
  one.innerText = "Venus"; 
  var two = document.getElementById('desc');
  two.innerText = "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.";
  var c1 = document.getElementById('content_one');
  c1.innerText = "225 Earth Days";
  var c2 = document.getElementById('content_two');
  c2.innerText = "0.7 AU";
  var c3 = document.getElementById('content_three');
  c3.innerText = "ROMAN GODDESS OF LOVE";
  var c4 = document.getElementById('content_four');
  c4.innerText = "0";
  document.getElementById('icons').src = "/venus-icon.png";


  scene.remove(sunpol);
  scene.remove(ringmesh);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p6),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  console.log('venus apllied');

}

function EarthApply() {
  var one = document.getElementById('h1_text');
  one.innerText = "Earth"; 
  var two = document.getElementById('desc');
  two.innerText = "Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.";
  var c1 = document.getElementById('content_one');
  c1.innerText = "365.25 Earth Days";
  var c2 = document.getElementById('content_two');
  c2.innerText = "1 AU";
  var c3 = document.getElementById('content_three');
  c3.innerText = "THE GROUND";
  var c4 = document.getElementById('content_four');
  c4.innerText = "1";
  document.getElementById('icons').src = "/earth-icon.png";


  scene.remove(sunpol);
  scene.remove(ringmesh);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p2),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  console.log('Earth apllied');
}

function MarsApply(){
  var one = document.getElementById('h1_text');
  one.innerText = "Mars"; 
  var two = document.getElementById('desc');
  two.innerText = "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.";
  var c1 = document.getElementById('content_one');
  c1.innerText = "1.88 Earth years";
  var c2 = document.getElementById('content_two');
  c2.innerText = "1.5 AU";
  var c3 = document.getElementById('content_three');
  c3.innerText = "ROMAN GOD OF WAR";
  var c4 = document.getElementById('content_four');
  c4.innerText = "2";
  document.getElementById('icons').src = "/mars-icon.png";

  
  scene.remove(sunpol);
  scene.remove(ringmesh);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p1),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
}

function JupiterApply() {
  var one = document.getElementById('h1_text');
  one.innerText = "Jupiter"; 
  var two = document.getElementById('desc');
  two.innerText = "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.";
  var c1 = document.getElementById('content_one');
  c1.innerText = "11.86 Earth years";
  var c2 = document.getElementById('content_two');
  c2.innerText = "5.2 AU";
  var c3 = document.getElementById('content_three');
  c3.innerText = "KING OF THE ROMAN GODS";
  var c4 = document.getElementById('content_four');
  c4.innerText = "79";
  document.getElementById('icons').src = "/jupiter-icon.png";


  scene.remove(sunpol);
  scene.remove(ringmesh);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p7),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  console.log('jupiter apllied');

}

function SaturnApply() {
  var one = document.getElementById('h1_text');
  one.innerText = "Saturn"; 
  var two = document.getElementById('desc');
  two.innerText = "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.";
  var c1 = document.getElementById('content_one');
  c1.innerText = "29.45 Earth years";
  var c2 = document.getElementById('content_two');
  c2.innerText = "9.5 AU";
  var c3 = document.getElementById('content_three');
  c3.innerText = "FATHER OF JUPITER";
  var c4 = document.getElementById('content_four');
  c4.innerText = "62";
  document.getElementById('icons').src = "/public/saturn-icon.png";

  scene.remove(sunpol);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p8),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  scene.add(ringmesh);

}

function UranusApply() {
  var one = document.getElementById('h1_text');
  one.innerText = "Uranus"; 
  var two = document.getElementById('desc');
  two.innerText = "Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.";
  var c1 = document.getElementById('content_one');
  c1.innerText = "84 Earth years";
  var c2 = document.getElementById('content_two');
  c2.innerText = "19.8 AU";
  var c3 = document.getElementById('content_three');
  c3.innerText = "GREEK GOD OF THE SKY";
  var c4 = document.getElementById('content_four');
  c4.innerText = "27";
  document.getElementById('icons').src = "/public/uranus-icon.png";


  scene.remove(sunpol);
  scene.remove(ringmesh);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p9),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  console.log('Uranus apllied');

}

function NeptuneApply() {
  var one = document.getElementById('h1_text');
  one.innerText = "Neptune"; 
  var two = document.getElementById('desc');
  two.innerText = "Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.";
  var c1 = document.getElementById('content_one');
  c1.innerText = "164.81 Earth years";
  var c2 = document.getElementById('content_two');
  c2.innerText = "30.1 AU";
  var c3 = document.getElementById('content_three');
  c3.innerText = "ROMAN GOD OF THE SEA";
  var c4 = document.getElementById('content_four');
  c4.innerText = "14";
  document.getElementById('icons').src = "/public/neptune-icon.png";

  scene.remove(sunpol);
  scene.remove(ringmesh);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p10),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  console.log('Neptune apllied');

}

function PlutoApply() {
  var one = document.getElementById('h1_text');
  one.innerText = "Pluto"; 
  var two = document.getElementById('desc');
  two.innerText = "Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet, Pluto is the largest member of the Kuiper Belt and the best known of a new class of worlds called dwarf planets.";
  var c1 = document.getElementById('content_one');
  c1.innerText = "248.89 Earth years";
  var c2 = document.getElementById('content_two');
  c2.innerText = "39 AU";
  var c3 = document.getElementById('content_three');
  c3.innerText = "ROMAN GOD OF THE UNDERWORLD";
  var c4 = document.getElementById('content_four');
  c4.innerText = "5";
  document.getElementById('icons').src = "/pluto-icon.png";

  scene.remove(sunpol);
  scene.remove(ringmesh);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p3),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  console.log('Pluto apllied');

}

document.getElementById('mars1').addEventListener('click', MarsApply);
document.getElementById('earth1').addEventListener('click', EarthApply);
document.getElementById('pluto1').addEventListener('click', PlutoApply);
document.getElementById('sun1').addEventListener('click', SunApply);
document.getElementById('venus1').addEventListener('click', VenusApply);
document.getElementById('mercury1').addEventListener('click', MercuryApply);
document.getElementById('jupiter1').addEventListener('click', JupiterApply);
document.getElementById('saturn1').addEventListener('click', SaturnApply);
document.getElementById('uranus1').addEventListener('click', UranusApply);
document.getElementById('neptune1').addEventListener('click', NeptuneApply);



//Scene Setup

scene.background = texture.load(stars);
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const light = new THREE.DirectionalLight(0xffffff,1,100);
light.position.set(35,10,10).normalize();
scene.add(light);

const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 20;
scene.add(camera);

const canvas = document.querySelector('.window');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const controls = new OrbitControls(camera,canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 1;


window.addEventListener('resize', ()=>{
  location.replace(location.href);
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.updateProjectionMatrix();
  camera.aspect = sizes.width/ sizes.height;
  renderer.setSize(sizes.width, sizes.height);
});

const loop = () =>{
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();