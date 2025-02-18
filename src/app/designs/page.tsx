"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function ComingSoon() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Card className="w-full max-w-lg mx-auto p-8 bg-white shadow-lg">
        {isLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6 mx-auto" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-6"
          >
            <motion.h1
              className="text-3xl font-bold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              Designs in Progress
            </motion.h1>
            <motion.p
              className="text-gray-600 max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
              I&apos;m crafting something extraordinary. My design showcase is currently under construction, promising to
              deliver an unparalleled visual experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-16 h-16 mx-auto">
                <motion.div
                  className="absolute inset-0 border-t-2 border-r-2 border-gray-900 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </motion.div>
            <motion.p
              className="text-sm text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Thank you for your patience. Excellence takes time.
            </motion.p>
          </motion.div>
        )}
      </Card>
    </div>
  )
}

