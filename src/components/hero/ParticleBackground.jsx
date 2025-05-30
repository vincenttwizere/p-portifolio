import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const ParticleBackground = () => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(3000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]} scale={[0.8, 0.8, 0.8]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={true}>
        <PointMaterial
          transparent
          color="#60a5fa"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.5}
        />
      </Points>
    </group>
  );
};

export default ParticleBackground; 