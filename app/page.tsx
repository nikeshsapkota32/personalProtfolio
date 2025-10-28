import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Leadership } from "@/components/leadership"
import { Contact } from "@/components/contact"
import { ParticleBackground } from "@/components/particle-background"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <ScrollProgress />
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Leadership />
      <Contact />
      <BackToTop />
    </main>
  )
}
