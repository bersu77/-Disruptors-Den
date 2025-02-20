"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/layout/theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 dark:bg-[#00144b]/95 backdrop-blur-sm" : "bg-white dark:bg-[#00144b]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src='/TddBlack.png'
                alt="The Disruptors Den"
                width={180}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link
              href="/"
              className="text-gray-800 dark:text-white/90 hover:text-[#f5aa14] dark:hover:text-[#f5aa14] transition-colors px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/event"
              className="text-gray-800 dark:text-white/90 hover:text-[#f5aa14] dark:hover:text-[#f5aa14] transition-colors px-3 py-2 text-sm font-medium"
            >
              Event
            </Link>
            <Link
              href="/blog"
              className="text-gray-800 dark:text-white/90 hover:text-[#f5aa14] dark:hover:text-[#f5aa14] transition-colors px-3 py-2 text-sm font-medium"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-gray-800 dark:text-white/90 hover:text-[#f5aa14] dark:hover:text-[#f5aa14] transition-colors px-3 py-2 text-sm font-medium"
            >
              About Us
            </Link>
            <ThemeToggle />
            <Button asChild className="ml-4 bg-[#f5aa14] hover:bg-[#f5aa14]/90 text-[#00144b] font-medium px-6">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                Join
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white hover:text-[#f5aa14] focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-[#00144b]/95 backdrop-blur-sm">
          <Link
            href="/"
            className="text-gray-800 dark:text-white/90 hover:text-[#f5aa14] dark:hover:text-[#f5aa14] block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/event"
            className="text-gray-800 dark:text-white/90 hover:text-[#f5aa14] dark:hover:text-[#f5aa14] block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Event
          </Link>
          <Link
            href="/blog"
            className="text-gray-800 dark:text-white/90 hover:text-[#f5aa14] dark:hover:text-[#f5aa14] block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-800 dark:text-white/90 hover:text-[#f5aa14] dark:hover:text-[#f5aa14] block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Button asChild className="w-full bg-[#f5aa14] hover:bg-[#f5aa14]/90 text-[#00144b] font-medium mt-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              Join
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

