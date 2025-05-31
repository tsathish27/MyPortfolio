"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Varun delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with Varun was a game-changer for our startup. He built our MVP quickly and efficiently, helping us launch ahead of schedule. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Varun has an excellent eye for design and user experience. He transformed our complex requirements into a beautiful, intuitive interface that our users love.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-primary-50/30 to-secondary-50/30 dark:from-gray-800 dark:via-primary-950/30 dark:to-secondary-950/30 transition-colors"
    >
      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">What Clients Say</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
              Testimonials from satisfied clients and collaborators
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-secondary-50/50 to-accent-50/50 dark:from-primary-950/20 dark:via-secondary-950/20 dark:to-accent-950/20"></div>

              <div className="relative z-10 text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-500 fill-current" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary-200 dark:border-primary-800"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-600/20 to-secondary-600/20"></div>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-8 relative z-10">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="rounded-full border-primary-300 dark:border-primary-700 hover:bg-primary-600 hover:text-white"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex
                          ? "bg-gradient-to-r from-primary-600 to-secondary-600"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="rounded-full border-primary-300 dark:border-primary-700 hover:bg-primary-600 hover:text-white"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
