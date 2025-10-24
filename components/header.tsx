"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setIsOpen(false)

    // Remove the # and find the element
    const targetId = sectionId.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      // Scroll with offset for fixed header
      const headerHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-accent/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
            <span className="text-primary font-bold text-lg">⚓</span>
          </div>
          <span className="text-primary-foreground font-bold text-sm hidden sm:inline">ASC 2026</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={(e) => handleNavClick(e as any, "#details")}
            className="text-primary-foreground hover:text-accent transition-colors text-sm font-medium"
          >
            Details
          </button>
          <button
            onClick={(e) => handleNavClick(e as any, "#leadership")}
            className="text-primary-foreground hover:text-accent transition-colors text-sm font-medium"
          >
            Leadership
          </button>
          <button
            onClick={(e) => handleNavClick(e as any, "#themes")}
            className="text-primary-foreground hover:text-accent transition-colors text-sm font-medium"
          >
            Themes
          </button>
          <button
            onClick={(e) => handleNavClick(e as any, "#objectives")}
            className="text-primary-foreground hover:text-accent transition-colors text-sm font-medium"
          >
            Objectives
          </button>
          <button className="bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-sm">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary border-t border-accent/20">
          <div className="px-4 py-4 space-y-4">
            <button
              onClick={(e) => handleNavClick(e as any, "#details")}
              className="block w-full text-left text-primary-foreground hover:text-accent font-medium"
            >
              Details
            </button>
            <button
              onClick={(e) => handleNavClick(e as any, "#leadership")}
              className="block w-full text-left text-primary-foreground hover:text-accent font-medium"
            >
              Leadership
            </button>
            <button
              onClick={(e) => handleNavClick(e as any, "#themes")}
              className="block w-full text-left text-primary-foreground hover:text-accent font-medium"
            >
              Themes
            </button>
            <button
              onClick={(e) => handleNavClick(e as any, "#objectives")}
              className="block w-full text-left text-primary-foreground hover:text-accent font-medium"
            >
              Objectives
            </button>
            <button className="w-full bg-accent text-primary px-6 py-2 rounded-lg font-semibold hover:bg-accent/90 transition-colors">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
