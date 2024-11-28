'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Linkedin, Twitter, PenTool, Search, Share2 } from "lucide-react"
import { SocialIcon } from "@/components/social-icons"
import { ServiceCard } from "@/components/service-card"
import { Footer } from "@/components/footer/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-16 py-16 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-16"
        >
          {/* Hero Content */}
          <div className="lg:w-1/2 space-y-10">
            <div className="flex gap-4">
              <SocialIcon href="https://facebook.com" icon={Facebook} bgColor="bg-blue-600" delay={0.2} />
              <SocialIcon href="https://linkedin.com" icon={Linkedin} bgColor="bg-blue-700" delay={0.3} />
              <SocialIcon href="https://twitter.com" icon={Twitter} bgColor="bg-sky-500" delay={0.4} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <h1 className="text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-teal-400">
                Josh Cheetham
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transforming ideas into impactful digital experiences through strategic marketing and creative content solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-teal-500/20 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-20 blur-[100px]"></div>
            <Image
              src="/josh-cheetham.jpg"
              alt="Josh Cheetham"
              width={500}
              height={500}
              className="rounded-2xl shadow-2xl relative border-2 border-gray-700/50 self-center mx-auto"
              priority
            />
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-32 max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-3xl -z-10"></div>
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">About Me</h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            With over a decade of experience in digital marketing, I specialize in crafting data-driven strategies
            that elevate brands and drive meaningful engagement. My passion lies in blending creativity with
            analytics to deliver exceptional results for businesses of all sizes.
          </p>
        </motion.section>

        {/* Services Section */}
        <section className="mt-32">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            My Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={PenTool}
              title="Content Strategy"
              description="Develop comprehensive content plans that align with your brand voice and business goals."
              delay={0.2}
            />
            <ServiceCard
              icon={Search}
              title="SEO Optimization"
              description="Improve your online visibility and drive organic traffic through expert SEO techniques."
              delay={0.4}
            />
            <ServiceCard
              icon={Share2}
              title="Social Media Management"
              description="Build and engage your audience across platforms with tailored social media strategies."
              delay={0.6}
            />
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32 text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl -z-10"></div>
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's collaborate to create a powerful digital strategy that drives results.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-teal-500/20 transition-all duration-300"
          >
            Start Your Journey
          </Link>
        </motion.section>
      </div>

      <Footer />
    </main>
  )
}