import React, { useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"

const MAPBOX_ACCESS_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN

const LisbonMap: React.FC<{ image: string }> = ({ image }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (!mapContainerRef.current) return

    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [-9.1427, 38.7369],
      zoom: 12
    })

    mapRef.current = map

    return () => map.remove()
  }, [])

  useEffect(() => {
    const map = mapRef.current
    if (!map) return

    if (image.includes("rossio")) {
      map.flyTo({
        center: [-9.1399, 38.7146],
        zoom: 17,
        speed: 1.4,
        curve: 1,
        essential: true
      })
    } else if (image.includes("sunset")) {
      map.flyTo({
        center: [-9.2416, 38.6296], // Caparica
        zoom: 14,
        speed: 1.4,
        curve: 1,
        essential: true
      })
    } else {
      map.flyTo({
        center: [-9.1427, 38.7369], // Lisbon
        zoom: 12,
        speed: 1.4,
        curve: 1,
        essential: true
      })
    }
  }, [image])

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "500px", borderRadius: "10px" }}
    />
  )
}

export default LisbonMap
