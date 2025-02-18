'use client'

import { motion } from "framer-motion"
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Nav } from "@/components/nav"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>
      
      <Nav />
      
      <main className="relative pt-32 pb-16">
        <div className="px-6 mx-auto max-w-3xl">
          {/* Hero Section with Shining Browser Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <div className="relative mb-8">
              {/* Browser Frame */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800 shadow-2xl relative">
                {/* Browser Top Bar with natural shine */}
                <div className="h-12 bg-gradient-to-r from-zinc-800 to-zinc-700 flex items-center px-4 relative overflow-hidden">
                  <div className="flex space-x-2 relative z-10">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  {/* Natural shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine-natural"></div>
                </div>

                {/* Browser Content */}
                <div className="p-24 bg-gradient-to-b from-zinc-800 to-zinc-900">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white text-center px-4 leading-tight">
                    I craft digital experiences with code & creativity.
                  </h1>
                </div>
              </div>
            </div>
            <p className="mt-6 text-lg text-zinc-400 text-center">
              Full-stack software engineer specializing in React, Next.js, Python, and more.
            </p>
          </motion.div>

          {/* Down Arrow */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center mb-16"
          >
            <ChevronDown 
              className="w-8 h-8 text-white animate-bounce cursor-pointer" 
              onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
            />
          </motion.div>

          {/* Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-16"
          >
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.link}
                className="group block relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm transition-all hover:bg-zinc-800/70"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="object-cover w-full aspect-video"
                />
                <div className="relative z-10 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-400">{project.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
                    <span>View project</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  )
}

const projects = [
  {
    title: "Efuye Gela Company Website",
    description: "A modern and minimalistic company website showcasing Efuye Gela's services and portfolio.",
    link: "https://efuye-gela-rd-xi.vercel.app/",
    image: "/efuye-gela.png?height=600&width=1200"
  },
  {
    title: "Chat App",
    description: "Real-time chat application with instant messaging and file sharing capabilities. Powered by Socket.io and React, this app offers a responsive and intuitive interface for seamless communication across devices.",
    link: "https://chat-murex-iota.vercel.app/",
    image: "/chatapp.png?height=600&width=1200"
  },
  {
    title: "Berhanu Integrated Farming Website",
    description: "A client website for Berhanu Integrated Farming, showcasing their agricultural services and products.",
    link: "https://berhanuintegratedfarm.com/",
    image: "/berhanuintegratedfarm.com_.png?height=600&width=1200"
  },
  {
    title: "Virtual Museum",
    description: "An interactive virtual museum experience showcasing digital art and exhibitions. This immersive platform, created with Three.js and WebGL, allows users to explore curated collections from the comfort of their homes.",
    link: "https://github.com/st-miki/VR-Museum",
    image: "/virtual.png?height=600&width=1200"
  },
  {
    title: "Task Management App",
    description: "A modern task management application with real-time updates and team collaboration feature. Built with React, Node.js, and MongoDB, this app streamlines project workflows and enhances productivity.",
    link: "https://github.com/st-miki/taskmate",
    image: "/task.png?height=600&width=1200"
  }
]

