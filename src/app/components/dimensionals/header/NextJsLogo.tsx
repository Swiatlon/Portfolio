import React, { useState } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

interface NextJsDimensionalLogoProps {
  position?: [number, number, number];
  scale?: number;
}

export default function NextJsDimensionalLogo({
  position = [0, 0, 0],
  scale = 1,
}: NextJsDimensionalLogoProps) {
  return <Logo position={position} scale={scale} />;
}

interface LogoProps {
  position: [number, number, number];
  scale: number;
}

function Logo({ position, scale }: LogoProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <group
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <ModelWithBloom hovered={hovered} scale={scale} />
    </group>
  );
}

type GLTFResult = GLTF & {
  nodes: {
    Text001: THREE.Mesh;
    Text002: THREE.Mesh;
    Text003: THREE.Mesh;
    Text004: THREE.Mesh;
    Cube: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

interface ModelWithBloomProps {
  hovered: boolean;
  scale: number;
}

function ModelWithBloom({ hovered, scale }: ModelWithBloomProps) {
  const { nodes, materials } = useGLTF(
    "/models/nextJsLogo/next.glb"
  ) as GLTFResult;
  const emissiveColor = new THREE.Color("#ffffff").multiplyScalar(0.5);

  materials["Material.002"].emissive = emissiveColor;
  materials["Material.002"].emissiveIntensity = hovered ? 1 : 0.6;

  return (
    <group scale={scale}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.002"]}
      />
      <group position={[0.066, 0.018, 0.99]} scale={[1.236, 0.6, 0.512]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials["Material.001"]}
          position={[-0.012, 0.059, 0.005]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.414, 1, 0.854]}
        />
      </group>
      <group
        position={[-0.066, 0.018, -0.99]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.236, 0.6, 0.512]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials["Material.001"]}
          position={[-0.012, 0.059, 0.005]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.414, 1, 0.854]}
        />
      </group>
      <group
        position={[-0.066, -0.99, -0.018]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1.236, 0.6, 0.512]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={materials["Material.001"]}
          position={[-0.012, 0.059, 0.005]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.414, 1, 0.854]}
        />
      </group>
      <group
        position={[0.066, 0.99, -0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.236, 0.6, 0.512]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text004.geometry}
          material={materials["Material.001"]}
          position={[-0.012, 0.059, 0.005]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.414, 1, 0.854]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/nextJsLogo/next.glb");
