import React, { useMemo, useState, useEffect } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";

interface CubeLogoProps {
  position?: [number, number, number];
  scale?: number;
  text: string;
  color: string;
}

export default function CubeLogo({
  position = [0, 0, 0],
  scale = 1,
  text,
  color,
}: CubeLogoProps) {
  return <Logo position={position} scale={scale} text={text} color={color} />;
}

interface LogoProps {
  position: [number, number, number];
  scale: number;
  text: string;
  color: string;
}

function Logo({ position, scale, text, color }: LogoProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  const cubeSize = 1.2 * scale;
  const textScale = 0.5 * scale;
  const colorThree = new THREE.Color(color);

  const texts = useMemo<JSX.Element[]>(() => {
    const halfSize = cubeSize / 2 + 0.005;

    const facePositions: [number, number, number][] = [
      [0, 0, halfSize],
      [0, 0, -halfSize],
      [0, halfSize, 0],
      [0, -halfSize, 0],
      [halfSize, 0, 0],
      [-halfSize, 0, 0],
    ];

    const faceRotations: [number, number, number][] = [
      [0, 0, 0],
      [0, Math.PI, 0],
      [Math.PI / 2, 0, 0],
      [-Math.PI / 2, 0, 0],
      [0, Math.PI / 2, 0],
      [0, -Math.PI / 2, 0],
    ];

    return facePositions.map((pos, i) => {
      const [x, y, z] = pos;
      const [rotX, rotY, rotZ] = faceRotations[i];

      return (
        <Text
          key={i}
          fontSize={textScale}
          position={[x, y, z]}
          rotation={[rotX, rotY, rotZ]}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      );
    });
  }, [textScale, cubeSize, text]);

  return (
    <group
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <boxGeometry args={[cubeSize, cubeSize, cubeSize]} />
        <meshStandardMaterial
          color={
            hovered ? new THREE.Color(color).multiplyScalar(0.6) : colorThree
          }
          emissive={new THREE.Color(color).multiplyScalar(0.5)}
          emissiveIntensity={hovered ? 1 : 0.5}
        />
      </mesh>
      {texts}
    </group>
  );
}
