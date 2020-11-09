# Orbit-Control-For-3.js

![image](https://github.com/pmccullough060/Orbit-Control-For-3.js/blob/master/RepoImages/OrbitControlExample.gif)


<!-- About The Porject -->

## About The Project
This project is a simple orbit controller written in JavaScript for the Three.js library, which allows the user to "rotate" (the camera is actually orbiting) the object by clicking and dragging the mouse anywhere in the Three.js renderer element. This repo contains the OrbitControl.js file as well as a sample scene demonstrating how it works.

<!-- Prerequisites -->
## Prerequisites
This project requires <a href="https://threejs.org/docs/#manual/en/introduction/Installation">Three.js</a>

## Getting Started
Add the OrbitControl.js file to your project, then instantiate a new rotationControls object:

```javascript
scene = new THREE.Scene();
camera = new THREE.Camera();
renderer = new THREE.WebGLRenderer({antialias: true});

var orbitControl = new rotationControls(scene, camera, renderer, document);
orbitControl.Add()

//the scene will now rotate with a mouse click and drag
```
