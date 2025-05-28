"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Globe,
  ExternalLink,
  Download,
  Moon,
  Sun,
  ChevronDown,
  MapPin,
  Calendar,
  Code,
  Briefcase,
  GraduationCap,
  Star,
  Send,
  ArrowUp,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    { name: "React", level: 80, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Python", level: 70, category: "Language" },
    { name: "PostgreSQL", level: 70, category: "Database" },
    { name: "MongoDB", level: 60, category: "Database" },
    { name: "GraphQL", level: 75, category: "API" },
  ]

  const experiences = [
    {
      title: "Backend Developer",
      company: "SINART",
      period: "2024",
      description:
        "Entrei como estagiario e adquiri uma grande experiencia",
      technologies: ["Node.js", "Postman", "TypeScript", "API"],
    },
    {
      title: "Full-Stack Developer",
      company: "SINART",
      period: "2024",
      description:
        "Desenvolvi aplicações web completas do zero, implementando features para o crescimento da empresa.",
      technologies: ["HTML5", "PHP", "TypeScript", "React"],
    },
    {
      title: "Frontend Developer",
      company: "SINART",
      period: "2024",
      description: "Criei interfaces responsivas e interativas, focando em performance e experiência do usuário.",
      technologies: ["TailWind", "HTML5", "React", "Figma"],
    },
  ]

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com sistema de produtos, carrinho integrados, dashboard demonstrativo com um CSS robusto feito em React.",
      tech: ["Node.js", "React", "Json"],
      image: "/store.png",
      github: "https://github.com/robsongabrielalencar/app-cordova",
      demo: "https://e-commercecordova.netlify.app/",
      featured: true,
    },
    {
      title: "Maze Game",
      description: "Projeto em JS/HTML/CSS para um jogo de labirinto com autobot backtraking.",
      tech: ["HTML5", "CSS", "JavaScript"],
      image: "/mazegame.png?height=300&width=400",
      github: "https://github.com/robsongabrielalencar/A3-estrutura-de-dados",
      demo: "https://a3-estrutura-de-dados.onrender.com/",
      featured: true,
    },
    {
      title: "Jogo da Velha Java",
      description: "Jogo clássico com lógica para dois jogadores.",
      tech: ["Java"],
      image: "/velha.png?height=300&width=400",
      github: "https://github.com/robsongabrielalencar/Jogo_da_Velha_Java",
      featured: false,
    },
    {
      title: "Ponto de Venda",
      description: "Gerenciamento de vendas, produtos e estoque.",
      tech: ["Java"],
      image: "/venda.png?height=300&width=400",
      github: "https://github.com/robsongabrielalencar/ponto-de-venda",
      featured: false,
    },
    {
      title: "Control Xbox 360 Python",
      description: "Controle de eventos do controle Xbox 360 via Python.",
      tech: ["Python"],
      image: "/xbox.png?height=300&width=400",
      github: "https://github.com/robsongabrielalencar/control-xbox360-python",
      featured: false,
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(sectionId)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${darkMode ? "bg-gray-900/80 border-gray-700" : "bg-white/80 border-gray-200"} border-b`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl">
              <span className={`${darkMode ? "text-white" : "text-gray-900"}`}>GabrielAlencar</span>
              <span className="text-blue-600">.netlify.app</span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "experience", "projects"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-200 ${activeSection === item
                    ? "text-blue-600"
                    : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {item === "home"
                    ? "Início"
                    : item === "about"
                      ? "Sobre"
                      : item === "skills"
                        ? "Habilidades"
                        : item === "experience"
                          ? "Experiência"
                          : item === "projects"
                            ? "Projetos"
                            : "Contato"}
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className={`text-5xl md:text-7xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                  Gabriel
                  <span className="block text-blue-600">Alencar</span>
                </h1>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className={`text-xl ${darkMode ? "text-gray-300" : "text-gray-600"}`}>Desenvolvedor Full-Stack</p>
                </div>
                <p className={`text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  Transformo ideias em experiências digitais excepcionais. Especializado em criar soluções web modernas,
                  escaláveis e centradas no usuário com mais de 4 anos de experiência em estudos.
                </p>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className={darkMode ? "text-gray-400" : "text-gray-600"}>Salvador, Bahia, Brasil</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Contatos Abaixo
                </Button>
              </div>

              <div className="flex space-x-6">
                {[
                  { icon: <Github className="w-5 h-5" />, href: "https://github.com/robsongabrielalencar" },
                  { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/robson-gabriel-alencar-souza-57b70528b/" },
                  { icon: <Mail className="w-5 h-5" />, href: "mailto:gabrielrps89@gmail.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <Button variant="ghost" size="icon">
                      {social.icon}
                    </Button>
                  </a>
                ))}
              </div>

            </div>

            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse opacity-20"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <Image
                  src="/gabriel2.jpg"
                  alt="Gabriel Alencar"
                  width={300}
                  height={300}
                  className="absolute inset-8 w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl"
                />

              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-blue-600" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Sobre Mim</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p
                className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                style={{ textAlign: "justify" }}
              >
                Sou Robson Gabriel Alencar Souza, estudante de Ciência da Computação na UNIFACS, atualmente no 5º semestre. Tenho como objetivo me tornar um desenvolvedor fullstack, com atuação no frontend e backend.
                Estudo Java, JavaScript, HTML e CSS, com ênfase em Java para backend, além de ter interesse em desenvolvimento mobile.
              </p>
              <p
                className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                style={{ textAlign: "justify" }}
              >
                Participei de projetos como jogos em JavaScript e sistemas de e-commerce, o que fortaleceu minhas habilidades técnicas. Tenho bons conhecimentos em HTML5 e CSS3, focando na criação de interfaces acessíveis e
                responsivas. Pretendo concluir minha graduação até o final de 2026 e seguir evoluindo profissionalmente, sempre buscando soluções eficientes e inovadoras.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Projetos Concluídos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">4+</div>
                  <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Tecnologias</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? "text-white" : "text-gray-900"}`}>
                Especialidades
              </h3>
              {[
                {
                  icon: <Code className="w-5 h-5" />,
                  title: "Desenvolvimento Frontend",
                  desc: "React, Node.js, JavaScript, TypeScript, CSS, TailWind, HTML5",
                },
                {
                  icon: <Briefcase className="w-5 h-5" />,
                  title: "Desenvolvimento Backend",
                  desc: "Node.js, Python, APIs, Postman, Java",
                },
                {
                  icon: <GraduationCap className="w-5 h-5" />,
                  title: "Desenvolvimento Full-Stack",
                  desc: "React, TypeScript, CI/CD, Node.js, QA, TailWind",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50"} hover:shadow-lg transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-600">{item.icon}</div>
                      <div>
                        <h4 className={`font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                          {item.title}
                        </h4>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Habilidades</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {["Frontend", "Backend", "Database", "Language", "API"].map((category) => (
              <Card
                key={category}
                className={`${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"} hover:shadow-xl transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <h3 className={`text-xl font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-2">
                            <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                              {skill.name}
                            </span>
                            <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className={`w-full bg-gray-200 rounded-full h-2 ${darkMode ? "bg-gray-700" : ""}`}>
                            <div
                              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Experiência</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-600"></div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card
                    className={`${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50"} hover:shadow-lg transition-all duration-300`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 text-blue-600 mr-2" />
                        <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{exp.period}</span>
                      </div>
                      <h3 className={`text-xl font-semibold mb-1 ${darkMode ? "text-white" : "text-gray-900"}`}>
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                      <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Projetos</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className={`text-2xl font-semibold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Projetos em Destaque
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects
                .filter((p) => p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className={`group ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/store.png"}
                        alt={project.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-2">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="ghost" className="p-2">
                              <Github className="w-4 h-4" />
                            </Button>
                          </a>
                          {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <Button size="sm" variant="ghost" className="p-2">
                                <ExternalLink className="w-4 h-4" />
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className={`text-xl font-semibold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className={`text-2xl font-semibold mb-8 ${darkMode ? "text-white" : "text-gray-900"}`}>
              Outros Projetos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((p) => !p.featured)
                .map((project, index) => (
                  <Card
                    key={index}
                    className={`group ${darkMode ? "bg-gray-800 border-gray-700" : "bg-white"} hover:shadow-lg transition-all duration-300`}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                        {project.title}
                      </h3>
                      <p className={`text-sm mb-3 ${darkMode ? "text-gray-300" : "text-gray-600"} line-clamp-2`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Button size="sm" variant="ghost" className="p-2">
                              <Github className="w-4 h-4" />
                            </Button>
                          </a>
                        <Button size="sm" variant="ghost" className="p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              © 2024 Gabriel Alencar. Todos os direitos reservados.
            </p>
            <p className={`mt-2 text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
              Desenvolvido com  usando React e Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  )
}
