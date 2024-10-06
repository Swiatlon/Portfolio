import React, { useMemo, useState } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";

interface HexagonLogoProps {
  position?: [number, number, number];
  scale?: number;
  text: string;
  color: string;
}

export default function HexagonLogo({
  position = [0, 0, 0],
  scale = 1,
  text,
  color,
}: HexagonLogoProps) {
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
  const hexSize = 1.2 * scale;
  const textScale = 0.5 * scale;
  const colorThree = new THREE.Color(color);

  const texts = useMemo(() => {
    const halfHeight = hexSize / 2;

    const facePositions: [number, number, number][] = [
      [0, halfHeight + 0.005, 0],
      [0, -halfHeight - 0.005, 0],
    ];

    const faceRotations: [number, number, number][] = [
      [1.57, Math.PI, 0],
      [1.57, 0, 0],
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
  }, [textScale, hexSize, text]);

  return (
    <group
      position={position}
      rotation={[-1.9, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <mesh>
        <cylinderGeometry args={[hexSize, hexSize, hexSize, 6]} />
        <meshStandardMaterial
          color={
            hovered ? new THREE.Color(color).multiplyScalar(1) : colorThree
          }
          emissive={new THREE.Color(color).multiplyScalar(1)}
          emissiveIntensity={hovered ? 1 : 0.5}
        />
      </mesh>
      {texts}
    </group>
  );
}
