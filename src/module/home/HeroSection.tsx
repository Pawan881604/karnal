'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import InfintySliderTb from '@/components/common/InfintySliderTb'

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null)
    const backgroundAnimation = useAnimation()



    useEffect(() => {
        backgroundAnimation.start({
            backgroundPosition: ['0% 0%', '100% 100%'],
            transition: {
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 30,
                ease: 'linear',
            },
        })
    }, [backgroundAnimation])

    return (
        <motion.div
            ref={ref}
            className="relative overflow-hidden"
            animate={backgroundAnimation}
            style={{
                backgroundImage: "url(./upload/background.jpg)",
                backgroundSize: 'cover  ',
                perspective: 1000,
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="bg-[#00000094]">

                <div className='min-h-auto py-8 lg:min-h-[600px] block lg:flex items-center max-w-[1380px] m-auto'>
                    <div className="w-full lg:w-[40%] text-center lg:text-center lg:text-end relative z-10 p-2">
                        <h1  className="text-3xl md:text-4xl text-white font-bold mb-6">
                            Your Business<br />
                            Deserves to Shine
                        </h1>

                        <p     className="text-lg md:text-base mb-8 max-w-2xl text-white">
                            We empower startups and brands by creating innovative, engaging, and tailored software solutions that drive success and make an impact.
                        </p>


                        <Button size="lg" className="bg-white text-black hover:bg-indigo-100">
                            Discover My Work
                        </Button>

                    </div>
                    <div className='w-full lg:w-[60%]'>
                        <div className='p-4'>
                            <InfintySliderTb />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    )
}
