import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import Navbar from "@/components/layout/NavBar"
import Footer from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
<body className={`${inter.className} flex flex-col min-h-screen`}>        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="pt-20 flex-grow">{children}</main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}

