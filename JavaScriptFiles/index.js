"use strict";

var scene1, camera1, renderer1;

initScene();

function initScene(){

    scene1 = new THREE.Scene();
    
    camera1 = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
    camera1.up = new THREE.Vector3(0, 0, 1);
    camera1.position.x = 5;

    var centre = new THREE.Vector3();

    camera1.lookAt(centre);
    
    renderer1 = new THREE.WebGLRenderer({antialias: true});
    renderer1.setSize(window.innerWidth, window.innerHeight);
    renderer1.setClearColor("#e5e5e5");
    
    document.body.appendChild(renderer1.domElement);
};

var control = new rotationControls(scene1, camera1, renderer1, document);

//testing
console.log(control.hasOwnProperty('scene'));
console.log(control.hasOwnProperty('camera'));
console.log(control.hasOwnProperty('renderer'));
//testing 

control.add();

window.addEventListener('resize', () => {
    renderer1.setSize(window.innerWidth, window.innerHeight);
    camera1.aspect = window.innerWidth / window.innerHeight;

    camera1.updateProjectionMatrix();
});


var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
var mesh = new THREE.Mesh(geometry, material);

scene1.add(mesh);

var color = new THREE.Color(0.2, 0.2, 0.2);
var ambient = new THREE.AmbientLight(color.getHex());
scene1.add(ambient);

var light = new THREE.PointLight(0xFFFFFF);
light.position.x = 5;
light.position.y = 5;
scene1.add(light);

var axisHelper = new THREE.AxesHelper(5);
scene1.add(axisHelper);

renderer1.render(scene1, camera1);