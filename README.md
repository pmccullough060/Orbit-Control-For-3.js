# Orbit-Control-For-3.js
A simple orbit control for the 3.js library
<!-- About The Porject -->

## About The Project

<!-- Image will go here -->

This project is a simple orbit controller written in Javascript for the Three.js library, which allows the user to only "rotate" an object by clicking and dragging the mouse anywhere in the 3.js renderer element. This repo contains the OrbitControl.js file as well as a sample scene demonstrating how it works.

<!-- Prerequisites -->
## Prerequisites
This project requires <a href="https://threejs.org/docs/#manual/en/introduction/Installation">Three.js</a>

## Getting Started
Add the OrbitControl.js file to your project, then instantiate a new rotationControls object:

```javascript
//example

scene = new THREE.Scene();
camera = new THREE.Camera();
renderer = new THREE.WebGLRenderer({antialias: true});

var orbitControl = new rotationControls(scene, camera, renderer, document);
orbitControl.Add()

//the scene will now rotate with a mouse click and drag
```
