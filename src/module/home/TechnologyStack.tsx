'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FramerIcon as FramerLogo, CodepenIcon as React, Cog, Database, Cloud, Lock, FileCode2, CodepenIcon as Css3, FileJson, Workflow, Server, ShoppingBag, Globe, Code2, Smartphone, PenTool, Image as ImageIcon, Palette } from 'lucide-react'

export default function TechnologyStack() {
    const technologies = [
        { name: 'HTML', icon: FileCode2, description: 'The standard markup language for Web pages' },
        { name: 'CSS', icon: Css3, description: 'Styling language used for describing the presentation of a document' },
        { name: 'JavaScript', icon: FileJson, description: 'High-level, interpreted programming language' },
        { name: 'React', icon: React, description: 'A JavaScript library for building user interfaces' },
        { name: 'React Native', icon: Smartphone, description: 'Framework for building native apps using React' },
        { name: 'Next.js', icon: Server, description: 'The React Framework for Production' },
        { name: 'TypeScript', icon: Code2, description: 'Typed JavaScript at Any Scale' },
        { name: 'Node.js', icon: Server, description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
        { name: 'Redux', icon: Workflow, description: 'A Predictable State Container for JS Apps' },
        { name: 'Material UI', icon: Cog, description: 'React components for faster and easier web development' },
        { name: 'MongoDB', icon: Database, description: 'Source-available cross-platform document-oriented database' },
        { name: 'WordPress', icon: Globe, description: 'Open-source content management system' },
        { name: 'Squarespace', icon: ShoppingBag, description: 'Website builder and hosting platform' },
        { name: 'Framer Motion', icon: FramerLogo, description: 'A production-ready motion library for React' },
        { name: 'shadcn/ui', icon: Cog, description: 'Beautifully designed components built with Radix UI and Tailwind CSS' },
        { name: 'Tailwind CSS', icon: Cloud, description: 'A utility-first CSS framework for rapid UI development' },
        { name: 'Coral', icon: PenTool, description: 'Digital design tool for creating graphics and illustrations' },
        { name: 'Canva', icon: ImageIcon, description: 'Online design and publishing tool' },
        { name: 'Adobe Creative Suite', icon: Palette, description: 'Collection of creative software for design, video, and web development' },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <section className=" px-4 py-16 bg-white">
            
            <div className="container mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-black mb-4 md:text-4xl lg:text-5xl">
                        Our Technology Stack
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Leveraging cutting-edge technologies to build robust and scalable applications
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    {technologies.map((tech, index) => (
                        <motion.div key={tech.name} variants={itemVariants}>
                            <Card className="h-full bg-gray-100 transition-shadow hover:shadow-lg">
                                <CardContent className="p-6">
                                    <div className="flex items-center mb-4">
                                        <tech.icon className="text-black text-lg mr-3" />
                                        <h3 className="text-xl font-semibold text-black">{tech.name}</h3>
                                    </div>
                                    <p className="text-sm mb-4">{tech.description}</p>

                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-600 mb-4">
                        And many more cutting-edge tools and frameworks!
                    </p>
                    <Badge variant="outline" className="text-black border-black hover:bg-gray-100">
                        Explore Our Full Stack
                    </Badge>
                </motion.div>
            </div>
        </section>
    )
}