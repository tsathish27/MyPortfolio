"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-950 to-secondary-950 text-white py-12 transition-colors">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                Sathish
              </span>
              <span className="text-accent-400">.T</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional web applications that solve
              real-world problems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tsathish27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tsathish27/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a> */}
              <a
                href="mailto:varun@example.com"
                className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 text-gray-400 hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-primary-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-primary-300 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-400 hover:text-primary-300 transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-primary-300 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-secondary-300">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>UI/UX Design</li>
              <li>Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Sathisht. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
