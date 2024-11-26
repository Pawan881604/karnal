'use client'

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

export default function ContsctUs() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' }
    ]

    return (
        <section className="relative overflow-hidden">


            <div className="container relative mx-auto px-4 py-16 md:py-24">
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Left Column */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                                Let&apos;s Work Together!
                            </h2>
                            <p className="text-muted-foreground text-sm">
                                I would like to meet with you to discuss something and opportunities for collaboration.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                                <Mail className="h-5 w-5 text-black" />
                                <span>info@yourdomain.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                                <MapPin className="h-5 w-5 text-black" />
                                <span>JI.KH Samanhudi Metro Atom Plaza Bl AK5 (Tl, DKI Jakarta</span>
                            </div>
                            <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                                <Phone className="h-5 w-5 text-black" />
                                <span>+62 (0) 000 0000 00</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <div className='bg-gray-100 p-4 rounded-md transition-shadow'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, x: 20 },
                                visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <Input
                                placeholder="Name"
                                className="border-black/60 bg-white/5 text-black placeholder:text-gray-400"
                            />
                            <Input
                                placeholder="info@yourdomain.com"
                                type="email"
                                className="border-black/60 bg-white/5 text-black placeholder:text-gray-400"
                            />
                            <Textarea
                                placeholder="Message"
                                className="min-h-[150px] border-black/60 bg-white/5 text-black placeholder:text-gray-400"
                            />
                            <Button className="group bg-black text-white hover:text-black hover:bg-gray-100">
                                Let&apos;s Talk
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </motion.div>
                    </div>
                </div>

                {/* Social Links */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-12 flex justify-center space-x-6"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            variants={fadeIn}
                            whileHover={{ scale: 1.1 }}
                            className="rounded-full bg-black p-3 text-gray-300 transition-colors hover:bg-white/10 hover:text-black"
                            aria-label={social.label}
                        >
                            <social.icon className="h-5 w-5" />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Newsletter Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-16 rounded-xl bg-black p-8 text-center"
                >
                    <h3 className="mb-2 text-xl font-semibold text-white">Get Notified About Project</h3>
                    <p className="mb-6 text-gray-300">Subscribe Now</p>
                    <div className="mx-auto flex max-w-md gap-2">
                        <Input
                            placeholder="Email"
                            type="email"
                            className="border-blue-500/30 bg-white/5 text-white placeholder:text-gray-400"
                        />
                        <Button size="icon" className="bg-white text-black hover:text-white hover:bg-gray-700">
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}