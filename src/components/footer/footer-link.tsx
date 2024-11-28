'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface FooterLinkProps {
    href: string
    children: React.ReactNode
    delay?: number
}

export function FooterLink({ href, children, delay = 0 }: FooterLinkProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
        >
            <Link
                href={href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
            >
                {children}
            </Link>
        </motion.div>
    )
}