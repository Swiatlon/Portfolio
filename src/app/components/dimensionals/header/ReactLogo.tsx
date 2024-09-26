import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Trail, Line, Sphere } from "@react-three/drei";

interface ReactDimensionalLogoProps {
  position: [number, number, number];
  scale: number;
}

export default function ReactDimensionalLogo({
  position,
  scale,
}: ReactDimensionalLogoProps) {
  return <Atom position={position} scale={scale} />;
}

interface AtomProps {
  position: [number, number, number];
  scale: number;
}

function Atom({ position, scale }: AtomProps) {
  const points = useMemo<THREE.Vector2[]>(
    () =>
      new THREE.EllipseCurve(
        0,
        0,
        3.4 * scale,
        1.15 * scale,
        0,
        2 * Math.PI,
        false,
        0
      ).getPoints(50),
    [scale]
  );

  const colorLine = new THREE.Color("#00d8ff");
  const lineWidth = 0.3 * scale;

  return (
    <group position={position}>
      <Line
        worldUnits
        points={points}
        color={colorLine}
        lineWidth={lineWidth}
        rotation={[0, 0, 0]}
      />
      <Line
        worldUnits
        points={points}
        color={colorLine}
        lineWidth={lineWidth}
        rotation={[0, 0, 2.1]}
      />
      <Line
        worldUnits
        points={points}
        color={colorLine}
        lineWidth={lineWidth}
        rotation={[0, 0, -2.1]}
      />
      <Electron position={[0, 0, 0.5]} speed={2} scale={scale} />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, Math.PI / 3]}
        speed={2.5}
        scale={scale}
      />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, -Math.PI / 3]}
        speed={2.5}
        scale={scale}
      />
      <Sphere args={[0.35 * scale, 64, 64]}>
        <meshBasicMaterial color={[6, 2, 10]} toneMapped={false} />
      </Sphere>
    </group>
  );
}

interface ElectronProps {
  radius?: number;
  speed?: number;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale: number;
}

function Electron({
  radius = 3.15,
  speed = 6,
  position,
  rotation,
  scale,
}: ElectronProps) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;

    if (ref.current) {
      ref.current.position.set(
        Math.sin(t) * radius,
        (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
        0
      );
    }
  });

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <Trail
        width={5}
        length={6}
        color={new THREE.Color(2, 1, 10)}
        decay={1}
        attenuation={(t) => t * t}
      >
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[6, 2, 10]} toneMapped={false} />
        </mesh>
      </Trail>
    </group>
  );
}
