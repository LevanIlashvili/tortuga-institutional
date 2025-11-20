"use client";

import React, { useEffect, useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
import { cn } from "@/lib/utils";

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

interface Hero3DProps {
  className?: string;
}

export default function Hero3D({ className }: Hero3DProps) {
  const globeEl = useRef<any>(null);
  const [countries, setCountries] = useState({ features: [] });
  const [cities, setCities] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Country Polygons
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson"
    )
      .then((res) => res.json())
      .then(setCountries)
      .catch((err) => console.error("Failed to load countries", err));

    // Load Cities (Populated Places) for Points/Hexes
    fetch(
      "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_populated_places_simple.geojson"
    )
      .then((res) => res.json())
      .then((data) => {
        setCities(data.features);
      })
      .catch((err) => console.error("Failed to load cities", err));
  }, []);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate & Initial config
  useEffect(() => {
    if (globeEl.current) {
      // Setup controls
      const controls = globeEl.current.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      controls.enableZoom = false;
      
      // Initial camera position
      globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });
    }
  }, [globeEl.current]);

  // Globe Material
  const globeMaterial = useMemo(() => {
    const mat = new THREE.MeshPhongMaterial({
      color: "#0a0a0a",
      opacity: 0.9,
      transparent: true,
      side: THREE.DoubleSide,
    });
    return mat;
  }, []);

  return (
    <div ref={containerRef} className={cn("absolute inset-0 z-0 overflow-hidden", className)}>
      {dimensions.width > 0 && (
        <Globe
          ref={globeEl}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
          globeMaterial={globeMaterial}
          
          // Atmosphere
          atmosphereColor="#10b981"
          atmosphereAltitude={0.15}

          // Polygons (Countries)
          polygonsData={countries.features}
          polygonCapColor={() => "rgba(5, 50, 40, 0.4)"}
          polygonSideColor={() => "rgba(16, 185, 129, 0.05)"}
          polygonStrokeColor={() => "#065f46"}
          polygonAltitude={0.005}

          // Hex Bin (Green Points)
          hexBinPointsData={cities}
          hexBinPointLat={(d: any) => d.geometry.coordinates[1]}
          hexBinPointLng={(d: any) => d.geometry.coordinates[0]}
          hexBinResolution={3}
          hexTopColor={() => "#10b981"}
          hexSideColor={() => "rgba(16, 185, 129, 0.4)"}
          hexAltitude={({ sumWeight }: any) => Math.min(sumWeight * 0.0005, 0.3)}
          hexTransitionDuration={1000}
        />
      )}
      
      {/* Left Overlay Gradient (Important for blending into text area) */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none z-10" />
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-10" />
    </div>
  );
}
