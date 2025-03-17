import React, { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

const LisbonMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (!mapContainerRef.current) return

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [-9.1427, 38.7369], // Lisbon center
      zoom: 12, // Initial zoom level
    })

    map.on("load", () => {
      setTimeout(() => {
        map.flyTo({
          center: [-9.1399, 38.7146], // Praça do Rossio, Lisbon
          zoom: 17, // Closer zoom
          speed: 1.4, // Animation speed
          curve: 1, // Animation curve factor
          essential: true,
        })
      }, 2000) // Delay before zooming in
    })

    mapRef.current = map

    return () => map.remove()
  }, [])

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "500px", borderRadius: "10px" }}
    />
  )
}

export default LisbonMap
