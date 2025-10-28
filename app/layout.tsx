import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AIChat } from "@/components/ai-chat"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Nikesh SAPKOTA - AI Engineer Portfolio",
  description: "AI Engineer specializing in Machine Learning, Data Science, and Full-Stack Development",
  generator: "v0.app",
  keywords: ["AI Engineer", "Machine Learning", "Data Science", "Full-Stack Developer", "Nikesh SAPKOTA"],
  authors: [{ name: "Nikesh SAPKOTA" }],
  openGraph: {
    title: "Nikesh SAPKOTA - AI Engineer Portfolio",
    description: "AI Engineer specializing in Machine Learning, Data Science, and Full-Stack Development",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <AIChat />
        <Analytics />
      </body>
    </html>
  )
}
