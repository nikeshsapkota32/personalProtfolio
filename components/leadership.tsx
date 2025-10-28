"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Users, Award, FileText } from "lucide-react"

const activities = [
  {
    organization: "Hello Hive",
    role: "Ambassador",
    period: "Oct 2025",
    icon: Award,
    achievements: [
      "Promoting early-career opportunities as Fall 2025 Ambassador",
      "Connecting students with recruiters and resources nationwide",
      "Guiding peers toward professional development programs",
    ],
  },
  {
    organization: "Nepalese Student Organization (NSO)-JSU",
    role: "President",
    period: "Jan 2024 - Present",
    icon: Users,
    achievements: [
      "Increased active members by 75% through outreach strategy",
      "Planned large-scale cultural events enhancing campus diversity",
      "Fostered partnerships for resources and sponsorships",
    ],
  },
  {
    organization: "IEEE Student Branch, JSU",
    role: "Secretary",
    period: "Aug 2023 - Present",
    icon: FileText,
    achievements: [
      "Coordinated technical workshops promoting professional development",
      "Managed communications and documentation",
      "Expanded IEEE presence on campus",
    ],
  },
]

export function Leadership() {
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
    <section id="leadership" ref={sectionRef} className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Leadership & <span className="text-primary">Activities</span>
          </h2>
          <p className="text-muted-foreground text-lg">Building communities and driving positive change</p>
        </div>

        <div className="space-y-6">
          {activities.map((activity, index) => {
            const Icon = activity.icon
            return (
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
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{activity.organization}</h3>
                      <p className="text-lg text-primary font-semibold">{activity.role}</p>
                      <p className="text-sm text-muted-foreground">{activity.period}</p>
                    </div>

                    <ul className="space-y-2">
                      {activity.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
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
