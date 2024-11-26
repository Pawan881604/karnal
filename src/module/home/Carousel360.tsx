'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Carousel360() {
    const [index, setIndex] = useState(0)
    const images = [
        'https://img.freepik.com/free-psd/restaurant-landing-page-template_23-2148466849.jpg?ga=GA1.1.24830064.1731393887&semt=ais_hybrid',
        'https://img.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_23-2148821375.jpg?ga=GA1.1.24830064.1731393887&semt=ais_hybrid',
        'https://img.freepik.com/free-psd/veterinary-landing-pages-concept_23-2148451973.jpg?ga=GA1.1.24830064.1731393887&semt=ais_hybrid',
        'https://img.freepik.com/free-psd/let-s-go-hiking-landing-page-screen_23-2148511267.jpg?ga=GA1.1.24830064.1731393887&semt=ais_hybrid',
      'https://img.freepik.com/free-psd/restaurant-landing-page-template_23-2148466849.jpg?ga=GA1.1.24830064.1731393887&semt=ais_hybrid',
        'https://img.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_23-2148821375.jpg?ga=GA1.1.24830064.1731393887&semt=ais_hybrid',
        'https://img.freepik.com/free-psd/veterinary-landing-pages-concept_23-2148451973.jpg?ga=GA1.1.24830064.1731393887&semt=ais_hybrid',
        'https://img.freepik.com/free-psd/let-s-go-hiking-landing-page-screen_23-2148511267.jpg?ga=GA1.1.24830064.1731393887&semt=ais_hybrid',
      
    ]

    // Controls to animate the carousel rotation
    const controls = useAnimation()

    useEffect(() => {
        controls.start({
            rotateY: index * 72, // Each image takes up 72 degrees (360 / 5 images)
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        })
    }, [index, controls])

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className="flex justify-center items-center relative w-full h-80">
            {/* Carousel Container */}
            <motion.div
                className="absolute flex w-full h-full items-center justify-center"
                style={{ perspective: 1000 }}
                animate={controls}
            >
                {/* Carousel Images */}
                <div
                    className="flex transition-all"
                    style={{
                        transformStyle: 'preserve-3d',
                        width: '100%',
                        height: '100%'
                    }}
                >
                    {images.map((image, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-full h-full flex items-center justify-center"
                            style={{
                                transform: `rotateY(${i * 72}deg) translateZ(300px)`
                            }}
                        >
                            <img
                                src={image}
                                alt={`carousel-${i}`}
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Navigation Buttons */}
            <Button
                onClick={prevSlide}
                className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white text-indigo-600 hover:bg-indigo-100"
            >
                Prev
            </Button>
            <Button
                onClick={nextSlide}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white text-indigo-600 hover:bg-indigo-100"
            >
                Next
            </Button>
        </div>
    )
}
