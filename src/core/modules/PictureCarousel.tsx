import { useState, useEffect, useRef } from 'react'
import { Card, CardBody, CardFooter } from "@/lib/partials"
import { IconButton } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import StopIcon from '@mui/icons-material/Stop'
import { useSwipeable } from "react-swipeable"
import { motion } from "framer-motion"

type PictureCarouselProps = {
  images: string[]
  onImageChange?: (src: string) => void
}

export default function PictureCarousel({ images, onImageChange }: PictureCarouselProps) {
  const [index, setIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const updateIndex = (newIndex: number) => {
    setIndex(newIndex)
    onImageChange?.(images[newIndex])
  }

  const prevImage = () => updateIndex(index === 0 ? images.length - 1 : index - 1)
  const nextImage = () => updateIndex(index === images.length - 1 ? 0 : index + 1)

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true
  })

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        nextImage()
      }, 4000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [autoPlay, index])

  return (
    <Card sx={{ borderRadius: "10px" }}>
      <CardBody
        style={{
          height: "500px", width: "auto",
          display: 'flex',
        }}
        {...handlers}
      >
        <motion.img
          key={index}
          src={images[index]}
          style={{ width: "100%", height: "98%", objectFit: "cover" }}
          alt="carousel image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        />
      </CardBody>
      <CardFooter sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton onClick={prevImage} aria-label="Previous">
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={() => setAutoPlay(true)} aria-label="Play">
          <PlayArrowIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={() => setAutoPlay(false)} aria-label="Stop">
          <StopIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={nextImage} aria-label="Next">
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardFooter>
    </Card>
  )
}
