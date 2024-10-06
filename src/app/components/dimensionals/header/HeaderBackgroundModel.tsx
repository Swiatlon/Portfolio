import React from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GroupProps, useGraph } from '@react-three/fiber';
import { GLTF, SkeletonUtils } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Cube005_0: THREE.Mesh;
    hair_0: THREE.SkinnedMesh;
    hair_1: THREE.SkinnedMesh;
    me_0: THREE.SkinnedMesh;
    me_1: THREE.SkinnedMesh;
    me002_0: THREE.SkinnedMesh;
    me002_1: THREE.SkinnedMesh;
    kemeja_0: THREE.SkinnedMesh;
    kemeja_1: THREE.SkinnedMesh;
    bool1185_0: THREE.Mesh;
    my_rig_rootJoint: THREE.Bone;
  };
  materials: {
    laptop_tex: THREE.MeshBasicMaterial;
    cloth: THREE.MeshBasicMaterial;
    solidify: THREE.MeshBasicMaterial;
    body: THREE.MeshBasicMaterial;
    Material: THREE.MeshBasicMaterial;
  };
};

const HeaderBackgroundGLTF = (props: GroupProps) => {
  const { scene } = useGLTF('/models/headerBackground/scene.gltf');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const { nodes, materials } = useGraph(clone) as GLTFResult;

  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 3.6, 3.3, 2.4]} userData={{ name: 'Root' }} {...props}>
        <group
          position={[0, 0.75184, -0.08611]}
          rotation={[1.26290641, 0, 0]}
          scale={[1, 1.00000509, 1.00000509]}
          userData={{ name: 'my_rig' }}
        >
          <primitive object={nodes.my_rig_rootJoint} />
          <skinnedMesh
            geometry={nodes.hair_0.geometry}
            material={materials.cloth}
            skeleton={nodes.hair_0.skeleton}
            userData={{ name: 'hair_0' }}
          />
          <skinnedMesh
            geometry={nodes.hair_1.geometry}
            material={materials.solidify}
            skeleton={nodes.hair_1.skeleton}
            userData={{ name: 'hair_1' }}
          />
          <skinnedMesh
            geometry={nodes.me_0.geometry}
            material={materials.body}
            skeleton={nodes.me_0.skeleton}
            userData={{ name: 'me_0' }}
          />
          <skinnedMesh
            geometry={nodes.me_1.geometry}
            material={materials.solidify}
            skeleton={nodes.me_1.skeleton}
            userData={{ name: 'me_1' }}
          />
          <skinnedMesh
            geometry={nodes.me002_0.geometry}
            material={materials.cloth}
            skeleton={nodes.me002_0.skeleton}
            userData={{ name: 'me.002_0' }}
          />
          <skinnedMesh
            geometry={nodes.me002_1.geometry}
            material={materials.solidify}
            skeleton={nodes.me002_1.skeleton}
            userData={{ name: 'me.002_1' }}
          />
          <skinnedMesh
            geometry={nodes.kemeja_0.geometry}
            material={materials.cloth}
            skeleton={nodes.kemeja_0.skeleton}
            userData={{ name: 'kemeja_0' }}
          />
          <skinnedMesh
            geometry={nodes.kemeja_1.geometry}
            material={materials.solidify}
            skeleton={nodes.kemeja_1.skeleton}
            userData={{ name: 'kemeja_1' }}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_0.geometry}
          material={materials.laptop_tex}
          position={[-0.0333, -0.44151, -0.46698]}
          rotation={[2.37833319, 0, 0]}
          scale={[0.14949, 0.14949072, 0.14949072]}
          userData={{ name: 'Cube.005_0' }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bool1185_0.geometry}
          material={materials.Material}
          position={[2.40321, 0.75187, -0.42821]}
          rotation={[-0.463842, 0.29564363, -0.93189684]}
          scale={[0.10640408, 0.10640116, 0.10640184]}
          userData={{ name: 'bool1.185_0' }}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/headerBackground/scene.gltf');

export default HeaderBackgroundGLTF;
