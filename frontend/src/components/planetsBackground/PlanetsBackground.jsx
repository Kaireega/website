import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";
import normalGL from "../../assets/Ground080_1K-JPG_NormalGL.jpg";
import AmbientOcclusion from "../../assets/Ground080_1K-JPG_AmbientOcclusion.jpg";
import roughness from "../../assets/Ground080_1K-JPG_Roughness.jpg";


const Planet = ({ size, color, position, ring, texture }) => {
  const planetTexture = texture ? new THREE.TextureLoader().load(texture) : null;

  const Ring = () => {
    if (!ring) return null;
    return (
      <Torus args={[size + 0.5, 0.1, 16, 100]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#4b0082" emissive="#9400d3" emissiveIntensity={0.5} />
      </Torus>
    );
  };

  return (
    <group position={position}>
      <Sphere args={[size, 32, 32]}>
        <meshStandardMaterial
           map={planetTexture} 
           color={color}
           emissive={color}
           emissiveIntensity={0.5}/>
      </Sphere>
      <Ring />
    </group>
  );
};

const PlanetsBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const planets = [
    { size: 3.5, color: "#8a2be2", position: [20, -10, -7], ring: true, texture: roughness
    },
    { size: 13.5, color: "#8807e4", position: [-41, 13, -19], ring: false, texture: AmbientOcclusion
    },
    { size: 6.2, color: "#a00241", position: [19, 8, -5], ring: true, texture: normalGL
    },
    { size: 3.5, color: "#8a2be2", position: [-29, -17, -5], ring: true, texture: roughness
    },
    { size: 4.2, color: "#a04241", position: [-19, -8, 5], ring: true, texture: normalGL
    },
    
  ];

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
       
        
      }}
      camera={{ position: [0, 0, 10], fov: 75 }}
    >
      <ambientLight intensity={0.9} />
      <pointLight position={[0, 10, 10]} />
      {planets.map((planet, index) => (
        <Planet
          key={index}
          size={planet.size}
          color={planet.color}
          position={planet.position}
          ring={planet.ring}
          texture={planet.texture}
        />
      ))}
    </Canvas>
  );
};

export default PlanetsBackground;
