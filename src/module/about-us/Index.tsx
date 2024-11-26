'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Laptop, Smartphone, Globe, Zap, Users, Coffee, ShoppingCart, Search } from 'lucide-react'

export default function Index() {
    const [hoveredService, setHoveredService] = useState<number | null>(null)

    const services = [
        { icon: Laptop, title: "Custom Website Development", description: "Tailored websites that reflect your brand and drive results." },
        { icon: ShoppingCart, title: "eCommerce Development", description: "Seamless, secure, and scalable online stores for your business." },
        { icon: Smartphone, title: "Mobile App Development", description: "Engaging mobile apps for iOS and Android platforms." },
        { icon: Search, title: "Search Engine Optimization", description: "Boost your online visibility and drive organic traffic." },
        { icon: Code, title: "Content Management Systems", description: "User-friendly, scalable, and customizable CMS solutions." },
    ]

    const teamMembers = [
        { name: "Amit Sharma", role: "Founder & Lead Developer", image: "/placeholder.svg?height=100&width=100" },
        { name: "Priya Gupta", role: "UI/UX Designer", image: "/placeholder.svg?height=100&width=100" },
        { name: "Rahul Verma", role: "Full-Stack Developer", image: "/placeholder.svg?height=100&width=100" },
        { name: "Neha Singh", role: "Project Manager", image: "/placeholder.svg?height=100&width=100" },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
            <header className="container mx-auto px-4 py-16 text-center">
                <motion.h1
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Karnal Web Tech
                </motion.h1>
                <motion.p
                    className="text-xl text-muted-foreground mb-8"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Transforming Ideas into Powerful Web Solutions
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Button size="lg" className="bg-black text-primary-foreground hover:text-black hover:bg-primary/90">
                        <Coffee className="mr-2 h-5 w-5" /> Get in Touch
                    </Button>
                </motion.div>
            </header>

            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-semibold mb-8 text-center">Our Story</h2>
                <Card className="mb-8">
                    <CardContent className="pt-6">
                        <p className="mb-4">
                            Founded in the vibrant city of Karnal, Karnal Web Tech has been a leading name in web development since 2015. What started as a small startup with a vision to revolutionize the web development landscape has now grown into one of the most trusted names in the industry. Our journey has been fueled by passion, innovation, and a commitment to delivering cutting-edge, user-friendly solutions for businesses of all sizes.
                        </p>
                        <p>
                            At Karnal Web Tech, we believe that great websites are not just about beautiful designs but about building a strong, scalable, and functional online presence that drives growth. We are proud of the impact we've had on our clients, transforming their digital dreams into reality with our tailored web development solutions.
                        </p>
                    </CardContent>
                </Card>
                <Tabs defaultValue="mission" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="mission">Our Mission</TabsTrigger>
                        <TabsTrigger value="journey">Our Journey</TabsTrigger>
                    </TabsList>
                    <TabsContent value="mission">
                        <Card>
                            <CardHeader>
                                <CardTitle>Empowering Businesses through Web Development</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Our mission is simple: to provide high-quality web development services that empower businesses to thrive in the digital age. We understand the complexities of the modern digital world and strive to create solutions that are not only visually appealing but also perform at the highest levels of functionality.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="journey">
                        <Card>
                            <CardHeader>
                                <CardTitle>From Start-Up to Industry Leader</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Karnal Web Tech was founded with a vision to deliver exceptional web solutions to businesses in Karnal and beyond. Over the years, we have evolved and expanded our services, helping hundreds of businesses develop their digital identities and achieve online success. Our growth can be attributed to our commitment to excellence, customer satisfaction, and our ability to adapt to the rapidly changing digital landscape.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>

            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-semibold mb-8 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                        >
                            <Card className="h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                                <CardHeader>
                                    <service.icon className={`w-12 h-12 mb-4 ${hoveredService === index ? 'text-primary' : 'text-muted-foreground'} transition-colors duration-300`} />
                                    <CardTitle>{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{service.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-semibold mb-8 text-center">Our Team</h2>
                <p className="text-center mb-8">Behind the success of Karnal Web Tech is our team of talented professionals who bring their expertise and creativity to every project.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="text-center">
                                <CardHeader>
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src={member.image} alt={member.name} />
                                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <CardTitle>{member.name}</CardTitle>
                                    <CardDescription>{member.role}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Digital Presence?</h2>
                    <p className="text-xl text-muted-foreground mb-8">Let's create a powerful web solution together.</p>
                    <Button size="lg" className="bg-black text-primary-foreground hover:text-black hover:bg-primary/90">
                        <Zap className="mr-2 h-5 w-5" /> Start Your Project
                    </Button>
                </motion.div>
            </section>


        </div>
    )
}