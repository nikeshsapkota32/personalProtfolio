"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, TrendingUp } from "lucide-react"

const projects = [
  {
    title: "WalkJSU",
    role: "Undergraduate Student Researcher",
    period: "Jul 2025 - Present",
    description: "Cross-platform navigation app with AI-powered chatbot for campus wayfinding",
    achievements: [
      "Developing cross-platform Flutter app with geolocation APIs and Dijkstra's algorithm",
      "Engineered interactive map with NLP chatbot using Python and Dialogflow",
      "Collaborating with faculty to analyze user behavior and integrate UX improvements",
    ],
    tags: ["Flutter", "Python", "NLP", "Dialogflow", "Geolocation"],
    icon: Code2,
  },
  {
    title: "Customer Churn Prediction",
    role: "Personal Project",
    period: "Apr 2024 - Jul 2025",
    description: "Machine learning model to predict customer churn with high accuracy",
    achievements: [
      "Developed Logistic Regression model with 85% accuracy for 50k+ subscribers",
      "Performed EDA and feature engineering using Pandas and Matplotlib",
      "Created Tableau visualizations projecting 12% churn reduction",
    ],
    tags: ["Python", "Machine Learning", "Pandas", "Tableau", "Data Analysis"],
    icon: TrendingUp,
  },
]

export function Projects() {
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
    <section id="projects" ref={sectionRef} className="relative py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Academic <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">Innovative solutions powered by AI and data science</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card
                key={index}
                className={`glass p-6 md:p-8 transition-all duration-700 hover:scale-[1.02] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                      <p className="text-sm text-primary font-semibold">{project.role}</p>
                      <p className="text-xs text-muted-foreground">{project.period}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
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
