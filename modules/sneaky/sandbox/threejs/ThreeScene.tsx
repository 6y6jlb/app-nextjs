'use client'
import { sign } from 'crypto';
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';

type Props = {}

const ThreeScene = (props: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const SIZES = {
            WIDTH: window.innerWidth * 0.9, HEIGHT: window.innerHeight * 0.9
        }
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, SIZES.WIDTH / SIZES.HEIGHT, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 'purple', wireframe: true });
        const cube = new THREE.Mesh(geometry, material);
        const helper = new THREE.AxesHelper(3)
        const clock = new THREE.Clock()

        scene.add(cube);
        scene.add(helper);
        renderer.setSize(SIZES.WIDTH, SIZES.HEIGHT);
        camera.position.z = 5;

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()
            camera.position.x = Math.sin(elapsedTime);
            camera.position.y = Math.cos(elapsedTime);
            camera.lookAt(cube.position)

            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        };

        tick()
        containerRef.current?.appendChild(renderer.domElement);
    }, []);
    return <div ref={containerRef} />;
}

export default ThreeScene