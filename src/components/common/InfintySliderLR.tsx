"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
    {
        name: "Semrush",
        logo: "/upload/3d-rendering-website-hosting-concept_23-2149484778.jpg",
    },
    {
        name: "Ahrefs",
        logo: "/upload/3d-rendering-website-hosting-concept_23-2149484778.jpg",
    },
    {
        name: "Jasper",
        logo: "/upload/3d-rendering-website-hosting-concept_23-2149484778.jpg",
    },
    {
        name: "Sitebulb",
        logo: "/upload/3d-rendering-website-hosting-concept_23-2149484778.jpg",
    },
    {
        name: "Brand 5",
        logo: "/upload/3d-rendering-website-hosting-concept_23-2149484778.jpg",
    },
    {
        name: "Brand 6",
        logo: "/upload/3d-rendering-website-hosting-concept_23-2149484778.jpg",
    },
];

export default function InfintySliderLR() {
    return (
        <section className="py-4 bg-black text-white overflow-hidden">
            <div className="relative">
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-8 min-w-full"
                        animate={{ x: [0, -1920] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                        {/* Duplicate brand items for continuous looping effect */}
                        {[...brands, ...brands].map((brand, index) => (
                            <div
                                key={`brand-${index}`}
                                className="flex-shrink-0 w-[200px] h-[120px] bg-[#1a1a1a] rounded-lg flex items-center justify-center p-6 hover:bg-[#252525] transition-colors"
                            >
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={100}
                                    height={100}
                                    objectFit="cover" // Ensures the image covers the container
                                    priority
                                    className="w-full h-full object-contain invert"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
