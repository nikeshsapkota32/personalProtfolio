"use client"

import { useEffect, useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const roles = ["AI Engineer", "Machine Learning Developer", "Data Scientist", "Full-Stack Developer"]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />

          <div className="space-y-4 relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-balance">
              Nikesh <span className="text-primary">SAPKOTA</span>
            </h1>

            <div className="h-12 md:h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground">
                {displayText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jacksonville, AL</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(469) 226-2626</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>nikeshsapkota.code@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
            <Button size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
