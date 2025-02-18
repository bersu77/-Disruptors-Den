'use client'

import { motion } from "framer-motion"
import Image from 'next/image'
import { Nav } from "@/components/nav"

export default function Info() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-cyan-500/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>
      
      <Nav />
      
      <main className="relative px-6 pt-32 pb-16 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 md:grid-cols-[2fr,1fr]"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              About Me
            </h1>
            <div className="space-y-4 text-zinc-400">
              <p>
                I&apos;m Michael Engida, a software engineer specializing in building exceptional digital experiences. With expertise in React, Next.js, Python, Node.js, Golang, C++, Java, and ASP.NET, I bring a comprehensive skill set to every project.
              </p>
              <p>
                My passion for technology and problem-solving drives me to create innovative solutions that make a difference. I thrive in collaborative environments and enjoy tackling complex challenges head-on.
              </p>
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Expertise</h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▹</span> React & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▹</span> Python
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▹</span> Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▹</span> Golang
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▹</span> C++
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▹</span> Java
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▹</span> ASP.NET
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">▹</span> Tailwind CSS
                </li>
              </ul>
            </div>
            
            <h2 className="text-2xl font-semibold text-white mt-12 mb-6">Experience</h2>
            <div className="space-y-8">
              {experience.map((job) => (
                <div key={job.company} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-white">
                  <h3 className="font-medium text-white">{job.role}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{job.company}</p>
                  <p className="mt-2 text-sm text-zinc-500">{job.location}</p>
                  <p className="mt-2 text-sm text-zinc-500">{job.period}</p>
                  <ul className="mt-2 text-sm text-zinc-400 list-disc pl-4 space-y-1">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="sticky top-32">
              <Image
                src="/profile.jpg?height=400&width=300"
                alt="Michael Engida"
                width={300}
                height={400}
                className="rounded-2xl mb-6"
              />
              <h2 className="text-xl font-semibold text-white mb-4">Get in touch</h2>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="mailto:mikiengida52@gmail.com" className="hover:text-white transition-colors">
                    Email: mikiengida52@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/michael-engida" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    LinkedIn: /in/michael-engida
                  </a>
                </li>
                <li>
                  <a href="https://github.com/st-miki" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    GitHub: @st-miki
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
const experience = [
  {
    role: "Project Manager",
    company: "Zemenay",
    location: "Addis Ababa, Ethiopia",
    period: "2024 - September",
    responsibilities: [
      "Led cross-functional teams in delivering complex software projects",
      "Implemented Agile methodologies to improve project efficiency and team collaboration",
      "Managed project budgets and timelines, ensuring on-time and within-budget delivery"
    ]
  },
  {
    role: "Full Stack Web Developer",
    company: "Efuye Gela",
    location: "Addis Ababa, Ethiopia",
    period: "2023 - 2024",
    responsibilities: [
      "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
      "Collaborated with UX/UI designers to implement responsive and user-friendly interfaces",
      "Optimized application performance and implemented security best practices"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Instamobile",
    location: "Bucharest, Romania",
    period: "2023",
    responsibilities: [
      "Developed and contributed to two major projects: Instaflutter website and the Dopebase open-source platform",
      "Implemented new features and fixed bugs to enhance the usability and functionality of both platforms",
      "Collaborated with international teams to improve software performance and scalability"
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Doulado",
    location: "America",
    period: "2023",
    responsibilities: [
      "Worked with a newly developed framework created by the company to build scalable web applications",
      "Designed and developed full-stack solutions, ensuring efficiency and maintainability",
      "Provided technical insights to improve the framework and optimize application performance"
    ]
  }
];


