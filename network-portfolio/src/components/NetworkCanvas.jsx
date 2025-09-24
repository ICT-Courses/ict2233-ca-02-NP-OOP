// src/components/NetworkCanvas.jsx
/*import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line } from "@react-three/drei";
import { useRef, useMemo } from "react";

// Node component with pulsating effect
function Node({ position, color }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const scale = 0.8 + Math.sin(clock.getElapsedTime() * 3) * 0.15;
    ref.current.scale.set(scale, scale, scale);
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

// Packet component moving between two points
function Packet({ start, end, speed = 0.5 }) {
  const ref = useRef();
  const direction = useMemo(() => {
    const dir = [end[0] - start[0], end[1] - start[1], end[2] - start[2]];
    const length = Math.sqrt(dir[0] ** 2 + dir[1] ** 2 + dir[2] ** 2);
    return dir.map(d => d / length);
  }, [start, end]);
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * speed) % 1;
    ref.current.position.set(
      start[0] + direction[0] * t,
      start[1] + direction[1] * t,
      start[2] + direction[2] * t
    );
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
}

// Connections
function Connections({ nodes }) {
  return nodes.map((start, i) =>
    nodes.map((end, j) =>
      i < j ? (
        <Line key={`${i}-${j}`} points={[start, end]} color="cyan" lineWidth={0.3} />
      ) : null
    )
  );
}

// Main Canvas
export default function NetworkCanvas() {
  const nodes = useMemo(
    () => [
      [0, 0, 0],
      [1, 1, 0.5],
      [-1, 0.5, -0.5],
      [0.5, -1, 0.3],
      [-0.5, -0.5, 0.5],
      [1, -0.5, -0.5],
    ],
    []
  );

  // Packets traveling between random node pairs
  const packets = useMemo(() => [
    { start: nodes[0], end: nodes[1] },
    { start: nodes[2], end: nodes[3] },
    { start: nodes[4], end: nodes[5] },
  ], [nodes]);

  return (
    <Canvas className="w-full h-96 md:h-[400px] lg:h-[500px]">
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Connections nodes={nodes} />
      {nodes.map((pos, idx) => (
        <Node key={idx} position={pos} color={idx === 0 ? "blue" : "green"} />
      ))}
      {packets.map((p, idx) => (
        <Packet key={idx} start={p.start} end={p.end} speed={0.5 + idx * 0.2} />
      ))}
      <OrbitControls enableZoom={true} enablePan={false} />
    </Canvas>
  );
}*/

import { Canvas } from "@react-three/fiber";
import NetworkScene from "./NetworkScene";
import { OrbitControls, Stars } from "@react-three/drei";

export default function NetworkCanvas() {
  return (
    <Canvas
      className="w-full h-[500px] md:h-[600px] lg:h-[700px]"
      camera={{ position: [0, 0, 8], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Stars for depth */}
      <Stars radius={50} depth={50} count={500} factor={4} saturation={0} fade />

      {/* Network scene */}
      <NetworkScene />

      {/* OrbitControls without zoom to prevent bad UX */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}


