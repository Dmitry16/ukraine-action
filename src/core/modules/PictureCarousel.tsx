import { useState, useEffect } from 'react'
import { Card, CardBody, CardFooter } from "@/lib/partials"
import { IconButton } from "@mui/material"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useSwipeable } from "react-swipeable"
import { motion } from "framer-motion"

type PictureCarouselProps = {
  images: string[]
}

export default function PictureCarousel({ images }: PictureCarouselProps) {
  const [index, setIndex] = useState(0)

  const prevImage = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  const nextImage = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    trackMouse: true
  })

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 4000)

    return () => clearInterval(interval)
  }, [index])

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
        <IconButton onClick={nextImage} aria-label="Next">
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </CardFooter>
    </Card>
  )
}
