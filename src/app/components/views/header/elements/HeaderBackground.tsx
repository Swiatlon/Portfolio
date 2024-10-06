'use client';
import CubeLogo from '@/app/components/dimensionals/header/CubeLogo';
import HeaderBackgroundGLTF from '@/app/components/dimensionals/header/HeaderBackgroundModel';
import NextJsDimensionalLogo from '@/app/components/dimensionals/header/NextJsLogo';
import HexagonLogo from '@/app/components/dimensionals/header/NodeLogo';
import ReactDimensionalLogo from '@/app/components/dimensionals/header/ReactLogo';
import CanvasLoader from '@/app/components/shared/canvasLoader/CanvasLoader';
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import React, { Suspense, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const HeaderBackground = () => {
  const [hovered, setHovered] = useState<boolean>(false);
  const isUnderTablet = useMediaQuery({ maxWidth: 1024 });

  useEffect(() => {
    document.body.style.cursor = hovered ? 'grab' : 'auto';
  }, [hovered]);

  return (
    <div className="w-full h-full absolute top-0 left-0 insent-0">
      <Canvas
        className="w-full h-full importantPanY"
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enablePan={false} enableZoom={false} autoRotate={isUnderTablet} autoRotateSpeed={1.5} />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 10]} intensity={0.5} />
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <group position={[0, -2, 0]}>
            <HeaderBackgroundGLTF scale={4} />
            <group>
              <EffectComposer>
                <Bloom mipmapBlur luminanceThreshold={0.5} radius={0.7} />
              </EffectComposer>
              <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <ReactDimensionalLogo position={[0, 0, -10]} scale={0.5} />
                <CubeLogo position={[-7, 0, -7]} scale={1} color="#1367c1" text="TS" />
                <CubeLogo position={[-1, 6, 0]} scale={1} color="#f0db4f" text="JS" />
                <NextJsDimensionalLogo position={[-2, -5, 3]} scale={1} />
                <HexagonLogo position={[4, 0, 7]} scale={0.5} color="#68A063" text="NodeJS" />
              </Float>
            </group>
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeaderBackground;
