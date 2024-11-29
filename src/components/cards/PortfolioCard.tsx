'use client'
import * as React from "react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface PortfolioCardProps {
    item: any
}

export default function PortfolioCard({
    item
}: PortfolioCardProps) {

    return (
        <Card>
            {/* Preview Container */}
            <div className="relative w-full overflow-hidden text-center">
                {/* Full-width responsive iframe */}
                <iframe
                    src={item.description}
                    title={item.title}
                    className="w-full h-[calc(100vh-300px)] border-none"
                />
                <Link href={item.description} target="_blank" rel="noopener noreferrer">{item.description}</Link>
            </div>
        </Card>
    )
}

