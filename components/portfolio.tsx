"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Mail, MapPin, Phone, Database, Code, Terminal, Zap, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = {
    languages: ["JavaScript", "Python", "Go", "TypeScript"],
    databases: ["MongoDB", "Supabase", "Redis"],
    tools: ["Postman", "Git"],
  }

  const projects = [
    {
      title: "File upload cdn",
      description:
        "file storage cdn server making use of telegram api or vps",
      tech: ["nodejs/bunjs", "Hono", "telegram-api"],
      highlights: ["Storage", "Telegram-exploitation"],
      githubLink: "https://github.com/hakisolos/cdn",
    },
    {
      "title": "FlareDB",
      "description": "A lightweight database library combining the syntax familiarity of Mongoose with the simplicity and freedom of SQLite. FlareDB makes it easy to define schemas, manage collections, and perform basic CRUD operations with an intuitive API, suitable for fast prototyping and lightweight applications.",
      "tech": ["TypeScript", "SQLite", "Mongoose-like API"],
      "highlights": ["Schema-based Collections", "Async CRUD Methods", "SQLite Backend", "Easy Initialization"],
      "githubLink": "https://github.com/CodeTheEarth/flareDb"
    },
   {
      "title": "bytecamp",
      "description": "No detailed description or evidence was found in the codebase to indicate this project is a Multi-device WhatsApp Bot or has related messaging, automation, device, or API features based on current README and available code search results.",
      "tech": [],
      "highlights": [],
      "githubLink": "https://github.com/hakisolos/bytecamp"
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-white/40 flex items-center justify-center">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="font-mono font-bold tracking-wider">SHELL HAKI</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="font-mono text-sm hover:text-white/70 transition-colors"
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="font-mono text-sm hover:text-white/70 transition-colors"
              >
                SKILLS
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="font-mono text-sm hover:text-white/70 transition-colors"
              >
                PROJECTS
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-mono text-sm hover:text-white/70 transition-colors"
              >
                CONTACT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10">
              <div className="px-4 py-6 space-y-4">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left font-mono text-lg hover:text-white/70 transition-colors py-2"
                >
                  ABOUT
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block w-full text-left font-mono text-lg hover:text-white/70 transition-colors py-2"
                >
                  SKILLS
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block w-full text-left font-mono text-lg hover:text-white/70 transition-colors py-2"
                >
                  PROJECTS
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left font-mono text-lg hover:text-white/70 transition-colors py-2"
                >
                  CONTACT
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Geometric Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 w-16 h-16 sm:w-32 sm:h-32 sm:left-10 border border-white/10 rotate-45 animate-pulse"></div>
        <div className="absolute top-40 right-8 w-12 h-12 sm:w-24 sm:h-24 sm:right-20 border border-white/5 rotate-12 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-8 h-8 sm:w-16 sm:h-16 border border-white/10 rotate-45 animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-4 w-20 h-20 sm:w-40 sm:h-40 sm:right-10 border border-white/5 rotate-12 animate-pulse delay-1500"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 sm:w-64 sm:h-64 border border-white/5 rotate-45 -translate-x-1/2 -translate-y-1/2 animate-pulse delay-700"></div>
      </div>

      {/* Hero Section */}
      <section id="about" className="relative px-4 sm:px-6 py-24 sm:py-32 text-center min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          {/* Large Terminal Icon */}
          <div className="mb-8 sm:mb-12 relative">
            <div className="w-24 h-24 sm:w-40 sm:h-40 mx-auto mb-6 sm:mb-8 border-2 border-white/20 rounded-none flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              <Terminal className="w-12 h-12 sm:w-20 sm:h-20 text-white relative z-10" />
              <div className="absolute top-1 left-1 sm:top-2 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
              <div className="absolute top-1 left-5 sm:top-2 sm:left-8 w-2 h-2 sm:w-3 sm:h-3 bg-white/60 rounded-full"></div>
              <div className="absolute top-1 left-9 sm:top-2 sm:left-14 w-2 h-2 sm:w-3 sm:h-3 bg-white/30 rounded-full"></div>
            </div>

            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-4 h-4 sm:w-8 sm:h-8 border-l-2 border-t-2 border-white/30"></div>
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-4 h-4 sm:w-8 sm:h-8 border-r-2 border-t-2 border-white/30"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-8 sm:h-8 border-l-2 border-b-2 border-white/30"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-8 sm:h-8 border-r-2 border-b-2 border-white/30"></div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-7xl font-black mb-2 sm:mb-4 tracking-tighter">SHELL HAKI</h1>

            <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="h-px bg-white/30 w-8 sm:w-16"></div>
              <h2 className="text-sm sm:text-xl font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/90">
                Backend Developer
              </h2>
              <div className="h-px bg-white/30 w-8 sm:w-16"></div>
            </div>

            <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light px-4">
              Crafting robust backend systems that power modern applications.
              <br />
              <span className="text-white/50 text-sm sm:text-base">
                Passionate about APIs • Microservices • Database Architecture
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 px-4">
            <Link href="https://github.com/hakisolos" target="_blank">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-mono uppercase tracking-wider"
              >
                <Github className="w-5 h-5 mr-3" />
                GitHub
              </Button>
            </Link>
            <Link href="https://wa.me/2349112171078">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 transition-all duration-300 font-mono uppercase tracking-wider"
              >
                <Mail className="w-5 h-5 mr-3" />
                Contact
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-12 sm:mt-16 text-white/60 font-mono text-sm">
            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4" />
              <span>Imo State, Nigeria</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4" />
              <span>hakixer@gmail.com</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-white/40" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-4 sm:px-6 py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-black mb-2 sm:mb-4 tracking-tighter">TECHNICAL</h2>
            <h3 className="text-2xl sm:text-4xl font-light tracking-wider text-white/80">SKILLS</h3>
            <div className="w-16 sm:w-24 h-px bg-white/30 mx-auto mt-4 sm:mt-8"></div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-transparent border-2 border-white/20 hover:border-white/40 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white font-mono uppercase tracking-wider text-sm sm:text-base">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {skills.languages.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white/5 border border-white/10 px-3 py-2 text-center font-mono text-xs sm:text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-2 border-white/20 hover:border-white/40 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white font-mono uppercase tracking-wider text-sm sm:text-base">
                  <Database className="w-5 h-5 sm:w-6 sm:h-6" />
                  Databases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {skills.databases.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white/5 border border-white/10 px-3 py-2 text-center font-mono text-xs sm:text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-transparent border-2 border-white/20 hover:border-white/40 transition-all duration-300 group md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-white font-mono uppercase tracking-wider text-sm sm:text-base">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {skills.tools.map((skill) => (
                    <div
                      key={skill}
                      className="bg-white/5 border border-white/10 px-3 py-2 text-center font-mono text-xs sm:text-sm text-white hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-6 py-16 sm:py-24 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl font-black mb-2 sm:mb-4 tracking-tighter">FEATURED</h2>
            <h3 className="text-2xl sm:text-4xl font-light tracking-wider text-white/80">PROJECTS</h3>
            <div className="w-16 sm:w-24 h-px bg-white/30 mx-auto mt-4 sm:mt-8"></div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-black/95 border-2 border-white/20 hover:border-white/60 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white/40 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white"></div>
                    </div>
                    <div className="text-right font-mono text-xs text-white/60">
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <CardTitle className="text-lg sm:text-xl font-bold tracking-tight text-white mb-3">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-white/60 mb-3">Tech Stack</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.tech.map((tech) => (
                          <div
                            key={tech}
                            className="bg-white/10 border border-white/20 px-2 py-1 text-xs font-mono text-white text-center"
                          >
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-white/60 mb-3">Features</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-3 text-xs sm:text-sm text-white">
                            <div className="w-1 h-1 bg-white"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6 sm:mt-8">
                    <Link href={project.githubLink}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black transition-all duration-300 font-mono text-xs uppercase tracking-wider flex-1"
                      >
                        <Github className="w-3 h-3 mr-2" />
                        Code
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 sm:px-6 py-24 sm:py-32 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-6xl font-black mb-2 sm:mb-4 tracking-tighter">LET'S BUILD</h2>
            <h3 className="text-3xl sm:text-5xl font-light tracking-wider text-white/80">SOMETHING GREAT</h3>
            <div className="w-20 sm:w-32 h-px bg-white/30 mx-auto mt-6 sm:mt-8"></div>
          </div>

          <p className="text-lg sm:text-xl text-white/70 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Ready to bring your backend vision to life? Let's discuss how we can build robust, scalable systems that
            power your applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link href="https://wa.me/2349112171078">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 transition-all duration-300 font-mono uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                <Mail className="w-5 h-5 mr-3" />
                Get In Touch
              </Button>
            </Link>
            <Link href="https://wa.me/2349112171078">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-mono uppercase tracking-wider px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              >
                <Phone className="w-5 h-5 mr-3" />
                Schedule Call
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-8 sm:py-12 border-t border-white/20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-4 sm:mb-6">
            <div className="h-px bg-white/20 flex-1"></div>
            <div className="font-mono text-xs text-white/60 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Shell Haki • Backend Developer
            </div>
            <div className="h-px bg-white/20 flex-1"></div>
          </div>
          <p className="text-white/40 font-mono text-xs">
            © 2025 • Built with Next.js & Tailwind CSS • Crafted with precision
          </p>
        </div>
      </footer>
    </div>
  )
}
