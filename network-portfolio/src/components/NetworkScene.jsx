import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";

// Node with pulsating effect
function Node({ position, color, size = 0.2 }) {
  const ref = useRef();

  useFrame(({ clock }) => {
    const scale = 0.8 + Math.sin(clock.getElapsedTime() * 2) * 0.2;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  );
}

// Lines connecting nodes
function Connections({ nodes }) {
  return nodes.map((start, i) =>
    nodes.map((end, j) =>
      i < j ? (
        <Line key={`${i}-${j}`} points={[start, end]} color="#00ffff" lineWidth={0.5} />
      ) : null
    )
  );
}

// Main scene: VLAN-like hierarchy
export default function NetworkScene() {
  // Top-level core node
  const nodes = useMemo(
    () => [
      [0, 2, 0],      // Core switch
      [-2, 0, -1],    // VLAN 1
      [0, 0, -2],     // VLAN 2
      [2, 0, -1],     // VLAN 3
      [-1, -2, -1],   // Sub devices under VLAN 1
      [1, -2, -1],    // Sub devices under VLAN 3
    ],
    []
  );

  const groupRef = useRef();
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0015; // slow rotation
      groupRef.current.rotation.x += 0.0008;
    }
  });

  return (
    <group ref={groupRef}>
      <Connections nodes={nodes} />
      {nodes.map((pos, idx) => (
        <Node
          key={idx}
          position={pos}
          color={idx === 0 ? "#0077ff" : idx <= 3 ? "#00ccff" : "#00ff77"}
          size={idx === 0 ? 0.3 : 0.18}
        />
      ))}
    </group>
  );
}
