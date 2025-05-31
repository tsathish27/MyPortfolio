"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Code2, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-primary-950 dark:to-secondary-950 pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-900 dark:to-secondary-900 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary-200 to-accent-200 dark:from-secondary-900 dark:to-accent-900 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/50 dark:to-secondary-900/50 px-4 py-2 rounded-full mb-8 border border-primary-200 dark:border-primary-800">
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for new projects</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-gradient">Sathish</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-medium">
            Full Stack Developer & <span className="text-secondary-600 dark:text-secondary-400">UI/UX Enthusiast</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional web applications using modern technologies. Passionate about creating seamless
            user experiences and robust backend solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-2 border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 dark:hover:text-white px-8 py-3 transition-all duration-300 transform hover:-translate-y-1"
            >
              Hire Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/tsathish27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/tsathish27"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6" />
            </a>
              <a
              href="https://leetcode.com/u/Sathish_T27/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:-translate-y-1"
              title="LeetCode Profile"
            >  <Code2 className="w-6 h-6" /></a>
            <a
              href="mailto:sathist.27@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  )
}
