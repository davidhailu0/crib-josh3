'use client'

import { motion } from 'framer-motion'
import { FooterLink } from './footer-link'

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="mt-32 border-t border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 pl-32">
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white font-semibold mb-4"
                        >
                            Home
                        </motion.h3>
                        <div className="space-y-2">
                            <FooterLink href="/" delay={0.1}>Welcome</FooterLink>
                            <FooterLink href="/#services" delay={0.2}>Services</FooterLink>
                            <FooterLink href="/#testimonials" delay={0.3}>Testimonials</FooterLink>
                        </div>
                    </div>

                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white font-semibold mb-4"
                        >
                            About
                        </motion.h3>
                        <div className="space-y-2">
                            <FooterLink href="/about" delay={0.2}>My Story</FooterLink>
                            <FooterLink href="/about#experience" delay={0.3}>Experience</FooterLink>
                            <FooterLink href="/about#skills" delay={0.4}>Skills</FooterLink>
                        </div>
                    </div>

                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white font-semibold mb-4"
                        >
                            Media
                        </motion.h3>
                        <div className="space-y-2">
                            <FooterLink href="/blog" delay={0.3}>Blog</FooterLink>
                            <FooterLink href="/press" delay={0.4}>Press</FooterLink>
                            <FooterLink href="/resources" delay={0.5}>Resources</FooterLink>
                        </div>
                    </div>

                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-white font-semibold mb-4"
                        >
                            Work with Me
                        </motion.h3>
                        <div className="space-y-2">
                            <FooterLink href="/services" delay={0.4}>Services</FooterLink>
                            <FooterLink href="/contact" delay={0.5}>Contact</FooterLink>
                            <FooterLink href="/book-call" delay={0.6}>Book a Call</FooterLink>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-center pt-8 border-t border-gray-800"
                >
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Josh Cheetham. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}