'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ServiceCardProps {
    title: string
    description: string
    icon: LucideIcon
    delay?: number
}

export function ServiceCard({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-700/50 hover:border-gray-600/50"
        >
            <div className="mb-6 inline-block p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl shadow-inner">
                <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl text-white font-semibold mb-4 group-hover:text-teal-400 transition-colors">{title}</h3>
            <p className="text-gray-300 leading-relaxed">{description}</p>
        </motion.div>
    )
}