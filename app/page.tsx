"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import AnimatedSection from "@/components/animated-section";

// Create a MotionButton component to wrap the Button component and forward motion props
const MotionButton = motion(Button);

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=2070&auto=format&fit=crop" // High-quality tech/coding background
          alt="Background"
          fill
          className="object-cover opacity-20 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay for contrast */}
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 md:pt-40 md:pb-40 overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16">
            <motion.div 
              className="text-center md:text-left max-w-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <AnimatedText text="Hi, I'm Rahul Pruthi" className="inline-block" />
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-blue-400 mb-8">
                <AnimatedText 
                  text="Full-Stack Developer" 
                  className="inline-block"
                  once={true}
                />
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
                I build exceptional and accessible digital experiences for the web. Specializing in modern web technologies to create fast, responsive, and user-friendly applications.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <MotionButton 
                  asChild 
                  size="lg" 
                  className="w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </MotionButton>
                <MotionButton 
                  variant="outline" 
                  size="lg" 
                  className="w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </MotionButton>
              </div>
              <div className="flex gap-4 mt-10 justify-center md:justify-start">
                <motion.a
                  href="https://github.com/Rp3152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-gray-200 hover:bg-blue-500 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/rahul-pruthi-5112a3238/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-gray-200 hover:bg-blue-500 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800 text-gray-200 hover:bg-blue-500 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="mailto:rk9008204@example.com"
                  className="p-3 rounded-full bg-gray-800 text-gray-200 hover:bg-blue-500 hover:text-white transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
            <motion.div 
              className="flex-1 relative max-w-xs md:max-w-md"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-full aspect-square max-w-64 md:max-w-80 mx-auto">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-blue-500/50 blur-3xl opacity-20 animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800/50">
                  <Image
                    src="/rahul.jpeg"
                    alt="Rahul Pruthi"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10" />
      </section>
    </div>
  );
}