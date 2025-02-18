import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michael Engida - Software Engineer',
  description: 'Portfolio of Michael Engida, a full-stack software engineer specializing in React, Next.js, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black min-h-screen`}>{children}</body>
    </html>
  )
}

