import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  connections: number[];
  pulse: number;
}

interface NeuralNetworkProps {
  subtle?: boolean;
}

const NeuralNetwork = ({ subtle = false }: NeuralNetworkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network configuration - more vibrant for home page, clearly visible for other pages
    const nodeCount = subtle ? 25 : 35;
    const nodes: Node[] = [];
    const connectionDistance = subtle ? 140 : 180;
    const pulseSpeed = subtle ? 0.018 : 0.025;

    // Initialize nodes
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        connections: [],
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Find connections between nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i].x - nodes[j].x, 2) + 
          Math.pow(nodes[i].y - nodes[j].y, 2)
        );
        if (distance < connectionDistance) {
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        }
      }
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with fade effect - more vibrant for home page, clearly visible for other pages
      const fadeOpacity = subtle ? 0.12 : 0.15;
      ctx.fillStyle = `rgba(10, 10, 10, ${fadeOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update node pulses
      nodes.forEach(node => {
        node.pulse += pulseSpeed;
      });

      // Draw connections
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          const distance = Math.sqrt(
            Math.pow(node.x - connectedNode.x, 2) + 
            Math.pow(node.y - connectedNode.y, 2)
          );
          
          // Calculate connection opacity based on pulse - more vibrant for home page, clearly visible for other pages
          const pulse1 = Math.sin(node.pulse);
          const pulse2 = Math.sin(connectedNode.pulse);
          const avgPulse = (pulse1 + pulse2) / 2;
          const baseOpacity = subtle ? 0.12 : 0.15;
          const pulseOpacity = subtle ? 0.35 : 0.5;
          const opacity = baseOpacity + (avgPulse * pulseOpacity);
          
          ctx.strokeStyle = `rgba(8, 156, 166, ${opacity})`;
          ctx.lineWidth = subtle ? 1.2 : 1.5;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.stroke();
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        const pulse = Math.sin(node.pulse);
        const baseGlow = subtle ? 0.3 : 0.4;
        const pulseGlow = subtle ? 0.4 : 0.6;
        const glowIntensity = baseGlow + (pulse * pulseGlow);
        const baseSize = subtle ? 3 : 4;
        const pulseSize = subtle ? 2 : 3;
        const nodeSize = baseSize + (pulse * pulseSize);

        // Draw glow - clearly visible for other pages, larger and brighter for home
        const glowRadius = subtle ? 18 : 25;
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        );
        gradient.addColorStop(0, `rgba(8, 156, 166, ${glowIntensity})`);
        gradient.addColorStop(1, 'rgba(8, 156, 166, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Draw core node - clearly visible for other pages, brighter for home
        const coreOpacity = subtle ? 0.6 : 0.8;
        ctx.fillStyle = `rgba(8, 156, 166, ${coreOpacity + glowIntensity * 0.5})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [subtle]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none ${subtle ? 'opacity-35' : 'opacity-50'}`}
      style={{ zIndex: 0 }}
    />
  );
};

export default NeuralNetwork; 