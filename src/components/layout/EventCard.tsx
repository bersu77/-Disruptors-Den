import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Clock, Mic, Users } from "lucide-react"

interface EventCardProps {
  title: string
  image: string
  date: string
  location: string
  time: string
  topic: string
  speakers: string
}

export function EventCard({ title, image, date, location, time, topic, speakers }: EventCardProps) {
  return (
    <div className="flex-shrink-0 w-64 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-3 space-y-2 flex-grow overflow-y-auto">
        <h3 className="text-lg font-semibold text-[#00144b] dark:text-white">{title}</h3>
        <div className="space-y-1 text-xs">
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <CalendarDays className="w-3 h-3 mr-1 text-[#f5aa14]" />
            {date || "Date TBA"}
          </p>
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <MapPin className="w-3 h-3 mr-1 text-[#f5aa14]" />
            {location || "Location TBA"}
          </p>
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <Clock className="w-3 h-3 mr-1 text-[#f5aa14]" />
            {time || "Time TBA"}
          </p>
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <Mic className="w-3 h-3 mr-1 text-[#f5aa14]" />
            {topic || "Topic TBA"}
          </p>
          <p className="flex items-center text-gray-600 dark:text-gray-300">
            <Users className="w-3 h-3 mr-1 text-[#f5aa14]" />
            {speakers || "Speakers TBA"}
          </p>
        </div>
      </div>
      <div className="p-3">
        <Button className="w-full bg-[#f5aa14] hover:bg-[#f5aa14]/90 text-[#00144b] font-medium text-sm">
          Register
        </Button>
      </div>
    </div>
  )
}

