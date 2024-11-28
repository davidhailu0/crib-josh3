'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface SocialIconProps {
    href: string
    icon: LucideIcon
    bgColor: string
    delay?: number
}

export function SocialIcon({ href, icon: Icon, bgColor, delay = 0 }: SocialIconProps) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.1 }}
            className={`w-12 h-12 rounded-full ${bgColor} text-white flex items-center justify-center hover:opacity-90 transition-all shadow-lg`}
        >
            <Icon className="w-5 h-5" />
        </motion.a>
    )
}