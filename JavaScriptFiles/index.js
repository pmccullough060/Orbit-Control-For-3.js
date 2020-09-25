"use strict";

var scene, camera, renderer;

initScene();

function initScene(){

    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
    camera.up = new THREE.Vector3(0, 0, 1);
    camera.position.x = 5;

    var centre = new THREE.Vector3();

    camera.lookAt(centre);
    
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#e5e5e5");
    
    document.body.appendChild(renderer.domElement);
};

var control = new rotationControls(scene, camera, renderer, document);
control.Add();

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});
var mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

var color = new THREE.Color(0.2, 0.2, 0.2);
var ambient = new THREE.AmbientLight(color.getHex());
scene.add(ambient);

var light = new THREE.PointLight(0xFFFFFF);
light.position.x = 5;
light.position.y = 5;
scene.add(light);

var axisHelper = new THREE.AxesHelper(5);
scene.add(axisHelper);

renderer.render(scene, camera);