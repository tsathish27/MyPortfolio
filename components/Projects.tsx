"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(projects.length / 3))
      }, 5000)
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying])

  const projects = [
   {
  title: "PassXchange – Ticket Reselling Platform",
  description:
    "A decentralized platform in development to enable secure reselling of non-refundable tickets for movies, events, and travel. Implements NFT-based ticketing using blockchain to ensure secure ownership transfer and transparency.",
  image: "/pp1.avif?height=300&width=400",
  tech: ["React", "Node.js", "Express.js", "MongoDB", "Ethereum", "Web3.js"],
  github: "https://github.com/tsathish27/passXchange-Ticket-Reselling_App",  
  live: "https://passxchange.netlify.app/",  
  gradient: "from-red-500 to-yellow-500",
}
,
   {
  title: "Exam Registration & Hall Ticket System",
  description:
    "A full-fledged application for colleges to manage student exam registration, approval workflows, and hall ticket generation with auto-email notifications. Includes Admin, HOD, and Student dashboards.",
  image: "/p2.webp?height=300&width=400",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind CSS", "JWT"],
  github: "https://github.com/tsathish27/examreg1.o",  
  live: "https://github.com/tsathish27/examreg1.o",   
  gradient: "from-blue-500 to-indigo-500",
},
   {
  title: "Digital Book Store Management System",
  description:
    "A comprehensive digital bookstore platform built using Java Full Stack and Microservices architecture, enabling efficient book cataloging, user management, and secure transactions.",
  image: "/p3.avif?height=300&width=400",
  tech: ["Angular", "Spring Boot", "Java", "Microservices", "MySQL"],
  github: "https://github.com/tsathish27",  
  live: "https://github.com/tsathish27",  
  gradient: "from-purple-500 to-pink-500",
}
,
    {
  title: "Trello Clone – Task Management Board",
  description:
    "A real-time collaborative task management application inspired by Trello. Features drag-and-drop task boards, user authentication, team collaboration, and real-time updates using WebSockets.",
  image: "/p4.png?height=300&width=400",
  tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Socket.io", "MongoDB"],
  github: "https://github.com/tsathish27/trello-clone", // replace with your repo link
  live: "https://github.com/tsathish27/trello-clone",  // replace with your deployed app link
  gradient: "from-blue-500 to-purple-500",
}
,
   {
  title: "AI Chatbot for College Website",
  description:
    "An intelligent AI-powered chatbot built using the Botpress framework to assist students and visitors on the college website. Handles FAQs, admission queries, course details, and real-time interactions with natural language understanding.",
  image: "/p5.avif?height=300&width=400",
  tech: ["Botpress", "Natural Language Processing", "JavaScript"],
  github: "https://github.com/tsathish27/Clg_bot-test0.1", // replace with your actual repo link
  live: "https://tsathish27.github.io/Clg_bot-test0.1/",  // replace with your deployed bot/live demo link
  gradient: "from-green-500 to-teal-500",
}
,
    
 {
  title: "Restaurant Website",
  description:
    "A modern and responsive restaurant website showcasing menu, chef specials, customer reviews, and online table reservations. Designed with an elegant UI and optimized for mobile viewing.",
  image: "/p6.avif?height=300&width=400",
  tech: ["HTML", "CSS", "JavaScript", "React", "EmailJS"],
  github: "https://github.com/tsathish27/restaurant_task.github.io", // replace with your actual repo link
  live: "https://tsathish27.github.io/restaurant_task.github.io/",  // replace with your actual live link
  gradient: "from-orange-400 to-red-600",
}
,
    {
      title: "Learning Management System",
      description:
        "An advanced LMS with course creation, student progress tracking, interactive quizzes, and video streaming capabilities.",
      image: "/p7.webp?height=300&width=400",
      tech: ["Angular", "NestJS", "MongoDB", "AWS S3"],
      github: "https://github.com/tsathish27/student-",
      live: "https://github.com/tsathish27/student-",
      gradient: "from-secondary-500 to-primary-500",
    },
   {
  title: "Simple Weather App",
  description:
    "A clean and minimal weather application that fetches and displays current weather conditions using the OpenWeatherMap API. Built with a responsive UI for real-time temperature, humidity, and weather status updates.",
  image: "/p8.avif?height=300&width=400",
  tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
  github: "https://github.com/tsathish27/Whether-app",  
  live: "https://tsathish27.github.io/Whether-app/",   
  gradient: "from-sky-400 to-blue-600",
}
,
  ]

  const totalSlides = Math.ceil(projects.length / 3)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const getCurrentProjects = () => {
    const startIndex = currentSlide * 3
    return projects.slice(startIndex, startIndex + 3)
  }

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              A showcase of my recent work and personal projects ({projects.length} projects total)
            </p>
          </div>

          {/* Projects Carousel */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                    {projects.slice(slideIndex * 3, slideIndex * 3 + 3).map((project, index) => (
                      <div
                        key={`${slideIndex}-${index}`}
                        className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20 overflow-hidden hover:shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 ${
                          isVisible ? "animate-fade-in-up" : ""
                        }`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-4`}
                          >
                            <Button
                              size="sm"
                              variant="secondary"
                              asChild
                              className="bg-white/90 text-gray-900 hover:bg-white"
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2" />
                                Code
                              </a>
                            </Button>
                            <Button size="sm" asChild className="bg-white text-gray-900 hover:bg-gray-100">
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Live Demo
                              </a>
                            </Button>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full border border-primary-200 dark:border-primary-800"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-12 space-x-6">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="rounded-full border-primary-300 dark:border-primary-700 hover:bg-primary-600 hover:text-white transition-all duration-300 p-3"
              disabled={totalSlides <= 1}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-gradient-to-r from-primary-600 to-secondary-600 scale-125"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-primary-400 dark:hover:bg-primary-500"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="rounded-full border-primary-300 dark:border-primary-700 hover:bg-primary-600 hover:text-white transition-all duration-300 p-3"
              disabled={totalSlides <= 1}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing {currentSlide * 3 + 1}-{Math.min((currentSlide + 1) * 3, projects.length)} of {projects.length}{" "}
              projects
            </p>
          </div>

          {/* Auto-play Indicator */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {isAutoPlaying ? "Auto-playing • Hover to pause" : "Paused • Move cursor away to resume"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
