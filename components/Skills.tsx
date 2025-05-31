"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Coffee, Database, Palette, Smartphone } from "lucide-react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const skills = [
    {
      icon: Code,
      title: "MERN/MEAN Stack",
      description: "Full-stack development with MongoDB, Express.js, React/Angular, and Node.js",
      color: "primary",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      icon: Database,
      title: "REST APIs",
      description: "Building scalable and secure RESTful APIs with proper authentication",
      color: "secondary",
      gradient: "from-secondary-500 to-secondary-600",
    },
    {
      icon: Coffee,
      title: "Java Full Stack",
      description: "Enterprise development with Spring Boot, Hibernate, and modern Java frameworks",
      color: "accent",
      gradient: "from-accent-500 to-accent-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user interfaces with modern design principles",
      color: "primary",
      gradient: "from-primary-600 to-secondary-600",
    },
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-primary-50/30 to-secondary-50/30 dark:from-gray-800 dark:via-primary-950/30 dark:to-secondary-950/30 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className={`group bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 bg-gradient-to-br ${skill.gradient} text-white group-hover:scale-110 group-hover:rotate-3`}
                >
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
