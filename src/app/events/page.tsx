"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { EventCard } from "@/components/layout/EventCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
import DenCommunityPage from "@/components/layout/EventVido"

const events = [
  {
    title: "AI & Innovation Forum",
    image: "/placeholder.svg?height=192&width=320",
    date: "April 10, 2025",
    location: "TBA",
    time: "TBA",
    topic: "AI & Innovation",
    speakers: "TBA",
  },
  {
    title: "AI & Innovation Forum",
    image: "/placeholder.svg?height=192&width=320",
    date: "April 10, 2025",
    location: "TBA",
    time: "TBA",
    topic: "AI & Innovation",
    speakers: "TBA",
  },
  {
    title: "AI & Innovation Forum",
    image: "/placeholder.svg?height=192&width=320",
    date: "April 10, 2025",
    location: "TBA",
    time: "TBA",
    topic: "AI & Innovation",
    speakers: "TBA",
  },
  {
    title: "AI & Innovation Forum",
    image: "/placeholder.svg?height=192&width=320",
    date: "April 10, 2025",
    location: "TBA",
    time: "TBA",
    topic: "AI & Innovation",
    speakers: "TBA",
  },
  {
    title: "AI & Innovation Forum",
    image: "/placeholder.svg?height=192&width=320",
    date: "April 10, 2025",
    location: "TBA",
    time: "TBA",
    topic: "AI & Innovation",
    speakers: "TBA",
  },
  {
    title: "AI & Innovation Forum",
    image: "/placeholder.svg?height=192&width=320",
    date: "April 10, 2025",
    location: "TBA",
    time: "TBA",
    topic: "AI & Innovation",
    speakers: "TBA",
  },
  // Add more events here...
]

export default function EventsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }, [])

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      handleScroll() // Check initial state
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [handleScroll])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#00144b] dark:text-white">Upcoming Events</h1>
      <DenCommunityPage/>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-[#00144b] dark:text-white" />
          </button>
        )}
        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-[#00144b] dark:text-white" />
          </button>
        )}
      </div>
    </div>
  )
}

