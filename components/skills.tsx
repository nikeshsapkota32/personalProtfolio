"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Layers, Wrench, Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["SQL", "Python", "R", "HTML", "Javascript", "Java", "CSS", "Kotlin"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["Django", "Pandas", "React", "Flutter", "TensorFlow", "PyTorch", "OpenCV", "Next.js"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Tableau", "Jupyter", "VSCode", "Git/GitHub", "Figma", "Android Studio"],
  },
  {
    title: "Specializations",
    icon: Sparkles,
    skills: ["Machine Learning", "Data Analysis", "Web Development", "Mobile Development", "Computer Vision", "NLP"],
  },
]

export function Skills() {
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
    <section id="skills" ref={sectionRef} className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">A comprehensive toolkit for building intelligent solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card
                key={index}
                className={`glass p-6 md:p-8 transition-all duration-700 hover:scale-[1.02] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-sm hover:bg-primary/10 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
