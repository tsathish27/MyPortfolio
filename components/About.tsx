"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Briefcase, Award } from "lucide-react"

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Passionate full-stack developer with 2+ years of experience building scalable web applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative w-80 h-80 mx-auto lg:mx-0 mb-8 lg:mb-0">
                <img
                  src="/myimg.jpeg?height=320&width=320"
                  alt="Varun - Full Stack Developer"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 via-secondary-600/20 to-accent-600/20 rounded-2xl"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 rounded-2xl opacity-20 blur-xl"></div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Building <span className="text-secondary-600 dark:text-secondary-400">digital experiences</span> that
                matter
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                I'm a passionate full-stack developer with expertise in modern web technologies. I love creating
                beautiful, functional applications that solve real-world problems and provide exceptional user
                experiences.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl border border-primary-200 dark:border-primary-800 hover:shadow-lg transition-all duration-300">
                  <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Computer Science Degree</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 rounded-xl border border-secondary-200 dark:border-secondary-800 hover:shadow-lg transition-all duration-300">
                  <Briefcase className="w-8 h-8 text-secondary-600 dark:text-secondary-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2+ Years</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 dark:from-accent-900/20 dark:to-accent-800/20 rounded-xl border border-accent-200 dark:border-accent-800 hover:shadow-lg transition-all duration-300">
                  <Award className="w-8 h-8 text-accent-600 dark:text-accent-400 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Projects</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">25+ Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
