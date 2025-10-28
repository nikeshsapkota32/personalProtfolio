"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function Education() {
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
    <section id="education" ref={sectionRef} className="relative py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-primary">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">Building a strong foundation in computer science</p>
        </div>

        <Card
          className={`glass p-6 md:p-8 max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Jacksonville State University</h3>
                <p className="text-lg text-primary font-semibold">Bachelor of Science in Computer Science</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                  <span>Expected May 2026</span>
                  <span>•</span>
                  <span>Jacksonville, Alabama</span>
                  <span>•</span>
                  <span className="font-semibold text-foreground">GPA: 3.5+</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Relevant Coursework:</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Project Management, Data Structures & Algorithms, Web Development, Software Engineering I & II,
                  Calculus I & II
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
