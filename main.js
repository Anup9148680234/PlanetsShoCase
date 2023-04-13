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
import saturn7 from '/src/saturn.jpg';
import uranus7 from '/src/uranus.jpg';
import neptune7 from '/src/neptune.jpg';
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


let one = document.getElementById('h1_text');
let two = document.getElementById('desc');
let c1 = document.getElementById('content_one');
let c2 = document.getElementById('content_two');
let c3 = document.getElementById('content_three');
let c4 = document.getElementById('content_four');
let icon_linked = document.getElementById('icons');
let subtitle = document.getElementById('subtitle_class');    
console.log(subtitle.innerText);        

function SunApply(){
  one.innerText = "Sun"; 
  two.innerText = "The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds everything from the biggest planets to tiny debris in its orbit.";
  c1.innerText = "0 Earth Days";
  c2.innerText = "0 AU";
  c3.innerText = "LATIN WORD: SOL";
  c4.innerText = "0";
  icon_linked.src = "/sun-icon.png";
  subtitle.innerText = "YELLOW DWARF STAR";

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
  one.innerText = "Mercury"; 
  two.innerText = "Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days."
  c1.innerText = "88 Earth Days";
  c2.innerText = "0.4 AU";
  c3.innerText = "ROMAN GOD OF SPEED";
  c4.innerText = "0";
  icon_linked.src = "/mercury-icon.png";
  subtitle.innerText = "TERRESTRIAL PLANET";

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
  
  one.innerText = "Venus"; 
  
  two.innerText = "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.";
  
  c1.innerText = "225 Earth Days";
  
  c2.innerText = "0.7 AU";
  
  c3.innerText = "ROMAN GODDESS OF LOVE";
  
  c4.innerText = "0";
  icon_linked.src = "/venus-icon.png";
  subtitle.innerText = "TERRESTRIAL PLANET";


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
  
  one.innerText = "Earth"; 
  
  two.innerText = "Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.";
  
  c1.innerText = "365.25 Earth Days";
  
  c2.innerText = "1 AU";
  
  c3.innerText = "THE GROUND";
  
  c4.innerText = "1";
  icon_linked.src = "/earth-icon.png";
  subtitle.innerText = "TERRESTRIAL PLANET";


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
  
  one.innerText = "Mars"; 
  
  two.innerText = "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.";
  
  c1.innerText = "1.88 Earth years";
  
  c2.innerText = "1.5 AU";
  
  c3.innerText = "ROMAN GOD OF WAR";
  
  c4.innerText = "2";
  icon_linked.src = "/mars-icon.png";
  subtitle.innerText = "TERRESTRIAL PLANET";

  
  scene.remove(sunpol);
  scene.remove(ringmesh);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p1),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
}

function JupiterApply() {
  
  one.innerText = "Jupiter"; 
  
  two.innerText = "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.";
  
  c1.innerText = "11.86 Earth years";
  
  c2.innerText = "5.2 AU";
  
  c3.innerText = "KING OF THE ROMAN GODS";
  
  c4.innerText = "79";
  icon_linked.src = "/jupiter-icon.png";
  subtitle.innerText = "GAS GIANT";


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
  
  one.innerText = "Saturn"; 
  
  two.innerText = "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.";
  
  c1.innerText = "29.45 Earth years";
  
  c2.innerText = "9.5 AU";
  
  c3.innerText = "FATHER OF JUPITER";
  
  c4.innerText = "62";
  icon_linked.src = "/saturn-icon.png";
  subtitle.innerText = "GAS GIANT";

  scene.remove(sunpol);
  const material = new THREE.MeshStandardMaterial({
    map: texture.load(p8),
  });
  const mesh = new THREE.Mesh(geometry,material);
  scene.add(mesh);
  scene.add(ringmesh);

}

function UranusApply() {
  
  one.innerText = "Uranus"; 
  
  two.innerText = "Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.";
  
  c1.innerText = "84 Earth years";
  
  c2.innerText = "19.8 AU";
  
  c3.innerText = "GREEK GOD OF THE SKY";
  
  c4.innerText = "27";
  icon_linked.src = "/uranus-icon.png";
  subtitle.innerText = "ICE GIANT";

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
  
  one.innerText = "Neptune"; 
  
  two.innerText = "Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.";
  
  c1.innerText = "164.81 Earth years";
  
  c2.innerText = "30.1 AU";
  
  c3.innerText = "ROMAN GOD OF THE SEA";
  
  c4.innerText = "14";
  icon_linked.src = "/neptune-icon.png";
  subtitle.innerText = "ICE GIANT";

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
  
  one.innerText = "Pluto"; 
  
  two.innerText = "Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet, Pluto is the largest member of the Kuiper Belt and the best known of a new class of worlds called dwarf planets.";
  
  c1.innerText = "248.89 Earth years";
  
  c2.innerText = "39 AU";
  
  c3.innerText = "ROMAN GOD OF THE UNDERWORLD";
  
  c4.innerText = "5";
  icon_linked.src = "/pluto-icon.png";
  subtitle.innerText = "DWARF PLANET";

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