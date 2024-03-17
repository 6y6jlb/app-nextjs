'use client'
import { sign } from 'crypto';
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three';

type Props = {}

const ThreeScene = (props: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const SIZES = {
            WIDTH: window.innerWidth * 0.9, HEIGHT: window.innerHeight * 0.9, MAX_SCALE: 2, MIN_SCALE: 0.1
        }
        const COLORS = ['#6DE5CC', '#ECEE60', '#B08AC0']
        const STATE = { GROW: false };

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, SIZES.WIDTH / SIZES.HEIGHT);
        const renderer = new THREE.WebGLRenderer();
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const clock = new THREE.Clock()

        const meshes: THREE.Mesh[] = [];
        const meshesGroup = new THREE.Group()

        for (let x = -2; x <= 2; x = x + 2) {
            for (let y = -2; y <= 2; y = y + 2) {
                const material = new THREE.MeshBasicMaterial({ color: COLORS[(Math.random() * 3) | 0], wireframe: true });
                const mesh = new THREE.Mesh(geometry, material)
                mesh.position.set(x, y, 0)
                meshes.push(mesh)
            }

        }

        meshesGroup.add(...meshes)
        scene.add(meshesGroup);
        renderer.setSize(SIZES.WIDTH, SIZES.HEIGHT);
        camera.position.z = 5;

        const tick = () => {
            // const elapsedTime = clock.getElapsedTime()
            // camera.position.x = Math.sin(elapsedTime);
            // camera.position.y = Math.cos(elapsedTime);
            camera.lookAt(meshesGroup.position)


            const delta = clock.getDelta()
            meshes.forEach((el, i) => {
                const multiplier = 1 % 2 ? -1 : 1;
                el.rotation.x += delta * multiplier;
                el.rotation.y += delta * multiplier;
            })
            const multiplier = STATE.GROW ? 1 : -1;

            if (meshesGroup.scale.x >= SIZES.MAX_SCALE) {
                STATE.GROW = false
            } else if (meshesGroup.scale.x <= SIZES.MIN_SCALE) {
                STATE.GROW = true
            }

            const newScaleValue = delta * multiplier * 0.3;

            meshesGroup.scale.x += newScaleValue
            meshesGroup.scale.y += newScaleValue
            meshesGroup.scale.z += newScaleValue


            renderer.render(scene, camera);
            requestAnimationFrame(tick);
        };

        tick()
        containerRef.current?.appendChild(renderer.domElement);
    }, []);
    return <div ref={containerRef} />;
}

export default ThreeScene