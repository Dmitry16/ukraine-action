import { useState } from 'react'
import { Card, CardBody, CardFooter } from "@/lib/partials"
import { Button } from "@/lib/partials"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
    onSwipedRight: prevImage
  })

  return (
    <>
      <Card sx={{ height: "auto", width: "700px", borderRadius: "10px" }}>
        <CardBody sx={{ height: "auto", width: "700px", borderRadius: "10px" }}>
          <motion.img
            key={index}
            src={images[index]}
            alt="carousel image"
            className="w-[300px] h-[200px] object-cover rounded-xl"
            {...handlers}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          />
        </CardBody>
        <CardFooter>
          <Button
            variant="text"
            onClick={prevImage}
            label="Previous"
          >
            <ChevronLeft size={14} />
          </Button>
          <Button
            variant="text"
            onClick={nextImage}
            label="Next"
          >
            <ChevronRight size={14} />
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
