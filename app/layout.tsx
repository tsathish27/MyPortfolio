import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Varun - Full Stack Developer | Portfolio",
  description:
    "Full-stack developer specializing in MERN stack, blockchain, and modern web technologies. View my portfolio and get in touch for your next project.",
  keywords: "full stack developer, web developer, React, Node.js, portfolio, MERN stack, blockchain",
  authors: [{ name: "Varun" }],
  openGraph: {
    title: "Varun - Full Stack Developer",
    description: "Full-stack developer specializing in modern web technologies",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
