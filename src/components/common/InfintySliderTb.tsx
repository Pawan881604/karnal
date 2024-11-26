'use client'

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function InfintySliderTb() {
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const images = [
        "/upload/3d-rendering-website-hosting-concept_23-2149484778.jpg",
        "/upload/2149484780.jpg",
        "/upload/flat-design-data-privacy-template_23-2149325754.jpg",
    ];
    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000) // Change slide every 3 seconds

        return () => clearInterval(timer)
    }, [images.length])


    return (
        <div className="relative h-[250px] lg:h-[400px] overflow-hidden rounded-lg">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ y: 300, opacity: 0.5 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -300, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Card className="h-full w-full border-0">
                        <CardContent className={cn(
                            "flex h-full items-center justify-center",
                            "text-4xl font-bold"
                        )}>
                            <Image
                                src={images[currentIndex]}
                                alt={`Slide ${currentIndex + 1}`}
                                layout="fill" // Makes image take full width and height of parent
                                objectFit="cover" // Ensures the image covers the container
                                className="rounded-lg"
                                priority // Optional: load the first image eagerly
                            />
                        </CardContent>
                    </Card>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}