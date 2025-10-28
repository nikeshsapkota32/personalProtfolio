"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="relative py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I'm always open to discussing new opportunities and collaborations
          </p>
        </div>

        <Card
          className={`glass p-8 md:p-12 transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you have a project in mind, want to discuss AI and machine learning, or just want to say hello,
                feel free to reach out!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href="mailto:nikeshsapkota.code@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Email Me
                </a>
              </Button>

              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                <a
                  href="https://linkedin.com/in/your-linkedin-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>

              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                <a
                  href="https://github.com/your-github-url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </Button>
            </div>

            <div className="text-center pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2025 Nikesh SAPKOTA. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
