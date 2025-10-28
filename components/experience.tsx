"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Mein Bowl",
    role: "Business Analyst (Part-Time)",
    period: "Nov 2022 - Jul 2025",
    achievements: [
      "Optimized inventory tracking using SQL, reducing discrepancies by 20%",
      "Conducted sales trend analysis using Tableau and SQL, boosting monthly revenue by 15%",
      "Built predictive models for seasonal demand, reducing overstock and waste",
    ],
  },
  {
    company: "International House, JSU",
    role: "Student Worker",
    period: "Dec 2021 - Oct 2022",
    achievements: [
      "Managed confidential data for 100+ international students with 100% accuracy",
      "Designed SQL database structure, reducing data retrieval time by 40%",
      "Handled high-volume communication with faculty and students",
    ],
  },
]

export function Experience() {
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
    <section id="experience" ref={sectionRef} className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">Building solutions that drive business impact</p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`glass p-6 md:p-8 transition-all duration-700 hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.role}</p>
                    <p className="text-sm text-muted-foreground">{exp.period}</p>
                  </div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
