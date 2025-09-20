import { useEffect, useRef } from "react";

export default function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas to fit parent
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Network nodes (x, y)
    const nodes = [
      { x: 100, y: 100 },
      { x: 300, y: 150 },
      { x: 200, y: 300 },
      { x: 400, y: 350 },
    ];

    // Packets moving between nodes
    const packets = [
      { from: 0, to: 1, progress: 0 },
      { from: 1, to: 2, progress: 0 },
      { from: 2, to: 3, progress: 0 },
    ];

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = "#00d1ff";
      ctx.lineWidth = 2;
      nodes.forEach((start, i) => {
        nodes.forEach((end, j) => {
          if (i < j) {
            ctx.beginPath();
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
        ctx.fillStyle = "#00ffae";
        ctx.fill();
        ctx.closePath();
      });

      // Draw moving packets
      packets.forEach((packet) => {
        const start = nodes[packet.from];
        const end = nodes[packet.to];

        const x = start.x + (end.x - start.x) * packet.progress;
        const y = start.y + (end.y - start.y) * packet.progress;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "#ff0055";
        ctx.fill();
        ctx.closePath();

        packet.progress += 0.01; // speed
        if (packet.progress > 1) packet.progress = 0;
      });

      requestAnimationFrame(draw);
    }

    draw();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-96 rounded-lg bg-[#0f111a]"
    ></canvas>
  );
}
