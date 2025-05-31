"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/placeholder.svg?height=800&width=600"
    link.download = "T-SATHISH-Resume2.pdf"
    link.click()
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-primary-100 dark:border-primary-900"
          : "bg-transparent"
      }`}
    >
      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-gradient">Sathish</span>
            <span className="text-accent-500">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Theme Toggle and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-primary-100 dark:border-primary-900 shadow-lg z-50">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-left py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-left py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-left py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                >
                  Contact
                </button>
                <div className="pt-4 border-t border-primary-200 dark:border-primary-800">
                  <Button
                    onClick={handleDownloadResume}
                    className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white w-full shadow-lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
