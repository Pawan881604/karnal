import { MouseEvent as ReactMouseEvent, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

const START_INDEX = 1
const DRAG_THRESHOLD = 150
const FALLBACK_WIDTH = 509

const CURSOR_SIZE = 50

const articles = [
    {
        title:
            "Building a fully customisable carousel slider with swipe gestures and navigation using Framer Motion",
        url: "https://img.freepik.com/free-psd/restaurant-landing-page-template_23-2148466849.jpg?ga=GA1.1.24830064.1731393887&semt=ais_hybrid",
    },
    {
        title:
            "Building a customisable Input component with NextJS, ReactHookForm, TailwindCSS and TypeScript",
        url: "https://img.freepik.com/free-psd/landing-page-minimal-style-art-gallery-with-man_23-2148821375.jpg?ga=GA1.1.24830064.1731393887&semt=ais_hybrid",
    },
    {
        title: "Handling Forms in NextJS with busboy, ReactHookForm and TypeScript",
        url: "https://img.freepik.com/free-psd/veterinary-landing-pages-concept_23-2148451973.jpg?ga=GA1.1.24830064.1731393887&semt=ais_hybrid",
    },
]

export default function Carousel() {
    const containerRef = useRef<HTMLUListElement>(null)
    const itemsRef = useRef<(HTMLLIElement | null)[]>([])
    const [activeSlide, setActiveSlide] = useState(START_INDEX)
    const canScrollPrev = activeSlide > 0
    const canScrollNext = activeSlide < articles.length - 1
    const offsetX = useMotionValue(0)
    const animatedX = useSpring(offsetX, {
        damping: 20,
        stiffness: 150,
    })

    const [isDragging, setIsDragging] = useState(false)
    function handleDragSnap(
        _: MouseEvent,
        { offset: { x: dragOffset } }: PanInfo,
    ) {
        setIsDragging(false)
        containerRef.current?.removeAttribute("data-dragging")
        animatedX.stop()

        const currentOffset = offsetX.get()

        if (
            Math.abs(dragOffset) < DRAG_THRESHOLD ||
            (!canScrollPrev && dragOffset > 0) ||
            (!canScrollNext && dragOffset < 0)
        ) {
            animatedX.set(currentOffset)
            return
        }

        let offsetWidth = 0

        for (
            let i = activeSlide;
            dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
            dragOffset > 0 ? i-- : i++
        ) {
            const item = itemsRef.current[i]
            if (item === null) continue
            const itemOffset = item.offsetWidth

            const prevItemWidth =
                itemsRef.current[i - 1]?.offsetWidth ?? FALLBACK_WIDTH
            const nextItemWidth =
                itemsRef.current[i + 1]?.offsetWidth ?? FALLBACK_WIDTH

            if (
                (dragOffset > 0 && 
                    dragOffset > offsetWidth + itemOffset && 
                    i > 1) || 
                (dragOffset < 0 && 
                    dragOffset < offsetWidth + -itemOffset && 
                    i < itemsRef.current.length - 2)
            ) {
                dragOffset > 0
                    ? (offsetWidth += prevItemWidth)
                    : (offsetWidth -= nextItemWidth)
                continue
            }

            if (dragOffset > 0) {
                offsetX.set(currentOffset + offsetWidth + prevItemWidth)
                setActiveSlide(i - 1)
            } else {
                offsetX.set(currentOffset + offsetWidth - nextItemWidth)
                setActiveSlide(i + 1)
            }
            break
        }
    }

    function scrollPrev() {
        if (!canScrollPrev) return

        const nextWidth = itemsRef.current
            .at(activeSlide - 1)
            ?.getBoundingClientRect().width
        if (nextWidth === undefined) return
        offsetX.set(offsetX.get() + nextWidth)

        setActiveSlide((prev) => prev - 1)
    }

    function scrollNext() {
        if (!canScrollNext) return

        const nextWidth = itemsRef.current
            .at(activeSlide + 1)
            ?.getBoundingClientRect().width
        if (nextWidth === undefined) return
        offsetX.set(offsetX.get() - nextWidth)

        setActiveSlide((prev) => prev + 1)
    }

    return (
        <>
            <div className="group container mx-6">
                <div className="relative overflow-hidden">
                    <motion.ul
                        ref={containerRef}
                        className="flex cursor-none items-start"
                        style={{
                            x: animatedX,
                        }}
                        drag="x"
                        dragConstraints={{
                            left: -(FALLBACK_WIDTH * (articles.length - 1)),
                            right: FALLBACK_WIDTH,
                        }}
                        onDragStart={() => {
                            containerRef.current?.setAttribute("data-dragging", "true")
                            setIsDragging(true)
                        }}
                        onDragEnd={handleDragSnap}
                    >
                        {articles.map((article, index) => {
                            const active = index === activeSlide
                            return (
                                <motion.li
                                    layout
                                    key={article.title}
                                    ref={(el: any) => (itemsRef.current[index] = el)}
                                    className={cn(
                                        "group relative shrink-0 select-none px-3 transition-opacity duration-300",
                                        !active && "opacity-30",
                                    )}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 0.4,
                                    }}
                                    style={{
                                        flexBasis: active ? "70%" : "20%",
                                    }}
                                >

                                    <div
                                        className={cn(
                                            "grid place-content-center overflow-hidden rounded-lg bg-gray-900",
                                            active ? "aspect-[5/3]" : "aspect-[3/2]",
                                        )}
                                        style={{
                                            backgroundImage: `url(${article.url})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                        }}

                                    >
                                        
                                    </div>


                                </motion.li>
                            )
                        })}
                    </motion.ul>
                    <button
                        type="button"
                        className={`group absolute left-[24%] top-1/3 z-20  grid aspect-square place-content-center rounded-full transition-colors 
                           bg-black ${ !canScrollPrev ? "bg-opacity-10" : "bg-opacity-50"}
                            `}
                        style={{
                            width: CURSOR_SIZE,
                            height: CURSOR_SIZE,
                        }}
                        onClick={scrollPrev}
                        disabled={!canScrollPrev}
                    >
                        <span className="sr-only">Previous Guide</span>
                        <ChevronLeft className="h-10 w-10 stroke-[1.5] transition-colors text-gray-200 hover:text-white group-disabled:opacity-50" />
                    </button>
                    <button
                        type="button"
                        className={`absolute right-[24%] top-1/3 z-20 grid aspect-square place-content-center rounded-full transition-colors bg-black ${
                            !canScrollNext ? "bg-opacity-10" : "bg-opacity-50"
                        }`}
                        
                        style={{
                            width: CURSOR_SIZE,
                            height: CURSOR_SIZE,
                        }}
                        onClick={scrollNext}
                        disabled={!canScrollNext}
                    >
                        <ChevronRight
                            className="h-10 w-10 stroke-[1.5] transition-colors text-gray-200 hover:text-white group-disabled:opacity-50"
                        />
                    </button>

                </div>
            </div>
        </>
    )
}
