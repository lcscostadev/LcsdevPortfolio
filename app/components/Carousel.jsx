'use client'

import React, { useEffect, useState, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { X, Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useMediaQuery } from 'react-responsive'

const slides = [
  {
    id: 1,
    name: "FastFreeTools.com",
    description: "A collection of fast, free online tools for developers and designers.",
    learningPath: "Advanced web development techniques and performance optimization",
    technologies: ["Next.js", "Internationalization", "Redux", "shadcn/ui", "Tailwind CSS"],
    repository: "",
    liveUrl: "https://fastfreetools.com",
    image: "/fastfreetools-snapshot.png?height=300&width=400",
  },
  {
    id: 2,
    name: "2D Adventure Shooter",
    description: "A top-down 2D adventure game where players evade and battle slimes, collect weapons, and survive.",
    learningPath: "Game development with Java, 2D graphics, and AI behaviors",
    technologies: ["Java", "Java Swing", "Object-Oriented Programming"],
    repository: " ",
    liveUrl: "",
    image: "/gramundor.gif?height=300&width=400",
  },
  {
    "id": 3,
    "name": "Discord Bot GVBot",
    "description": "GVBot is a Node.js-based Discord bot that automates tasks and enhances server interaction, offering customizable commands for moderation and more.",
    "learningPath":"Learn the basics of JavaScript and Node.js, then set up a Discord bot using the 'discord.js' library. Create custom commands and user interactions.",
    "technologies": ["Node.js", "discord.js", "JavaScript", "API Integration"],
    "repository": "https://github.com/lcscostadev/DiscordBOT",
    "liveUrl": "https://lcscostadev.github.io/Discord-bot-GVBot-website/",
    "image": "/gvg-bot.png?height=300&width=400"
  },
  {
    "id": 4,
    "name": "Gamified Retro ToDoList",
    "description": "A gamified to-do list with a retro design inspired by classic games, featuring immersive sounds and interactivity to keep users focused and motivated.",
    "learningPath": "Gamification in web applications, retro design, audio manipulation with the Web Audio API, and responsive styling using Tailwind CSS.",
    "technologies": ["Next.js", "TypeScript", "Tailwind CSS", "Web Audio API"],
    "repository": "https://github.com/lcscostadev/Gamified-Retro-ToDoList",
    "liveUrl": "https://gamified-retro-todolist-demo.com",
    "image": "/retro-todo-list.png?height=300&width=400"
  },
  {
    "id": 5,
    "name": "Portfolio Website",
    "description": "An interactive and visually captivating portfolio showcasing projects, skills, and experience with smooth animations and a modern carousel design.",
    "learningPath": "Building modern and responsive portfolios, advanced animations with Framer Motion, carousel integration using Embla Carousel, and creating accessible components with Radix UI.",
    "technologies": ["Next.js", "Framer Motion", "Embla Carousel", "Radix UI", "Tailwind CSS"],
    "repository": "https://github.com/lcscostadev/lcscostadev-portfolio",
    "liveUrl": "https://gamified-retro-todolist-demo.com",
    "image": "/lcscostadev-website.png?height=300&width=400"
  }
]

export default function Component({ options = {} }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      play: true,
      stopOnMouseEnter: false, 
    }),
  ])

  const [isPlaying, setIsPlaying] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSlide, setSelectedSlide] = useState(null)
  const emblaNode = useRef(null)
  const modalRef = useRef(null)
  const imageRef = useRef(null)
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 })
  const [isTouchZoomed, setIsTouchZoomed] = useState(false)
  const [touchPosition, setTouchPosition] = useState({ x: 0, y: 0 })
  const touchStartRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!emblaApi) return

    const autoScroll = emblaApi.plugins().autoScroll
    if (!autoScroll) return

    const handlePlay = () => setIsPlaying(true)
    const handleStop = () => setIsPlaying(false)
    const handleReInit = () => setIsPlaying(autoScroll.isPlaying())

    emblaApi.on('autoScroll:play', handlePlay)
    emblaApi.on('autoScroll:stop', handleStop)
    emblaApi.on('reInit', handleReInit)

    return () => {
      emblaApi.off('autoScroll:play', handlePlay)
      emblaApi.off('autoScroll:stop', handleStop)
      emblaApi.off('reInit', handleReInit)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const autoScroll = emblaApi.plugins().autoScroll

    const handleMouseEnter = () => autoScroll.stop()
    const handleMouseLeave = () => autoScroll.play()

    const node = emblaNode.current
    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter)
      node.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (node) {
        node.removeEventListener('mouseenter', handleMouseEnter)
        node.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [emblaApi])

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const openModal = (index) => {
    setSelectedSlide(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedSlide(null)
    setZoom(1)
    setPosition({ x: 0, y: 0 })
    setIsTouchZoomed(false)
    setTouchPosition({ x: 0, y: 0 })
  }

  const handleModalClick = (e) => {
    if (e.target === modalRef.current) {
      closeModal()
    }
  }

  const handleImageHover = (e) => {
    if (isMobileOrTablet) return
    if (!imageRef.current) return

    const { left, top, width, height } = imageRef.current.getBoundingClientRect()
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    setPosition({ x, y })
  }

  const handleImageWheel = (e) => {
    if (isMobileOrTablet) return
    e.preventDefault()
    setZoom(prevZoom => Math.min(Math.max(prevZoom - e.deltaY * 0.01, 1), 3))
  }

  const handleTouchStart = (e) => {
    if (!isMobileOrTablet) return
    const touch = e.touches[0]
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchMove = (e) => {
    if (!isMobileOrTablet || !isTouchZoomed) return
    const touch = e.touches[0]
    const deltaX = touch.clientX - touchStartRef.current.x
    const deltaY = touch.clientY - touchStartRef.current.y

    setTouchPosition(prev => ({
      x: Math.max(Math.min(prev.x + deltaX, 100), -100),
      y: Math.max(Math.min(prev.y + deltaY, 100), -100)
    }))

    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchEnd = () => {
    if (!isMobileOrTablet) return
    if (!isTouchZoomed) {
      setIsTouchZoomed(true)
      setTouchPosition({ x: 0, y: 0 })
    } else {
      setIsTouchZoomed(false)
      setTouchPosition({ x: 0, y: 0 })
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8" id='carousel'>
      <div className="embla bg-gray-800 rounded-3xl shadow-2xl overflow-hidden" ref={emblaNode}>
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div 
                className="embla__slide flex-[0_0_45%] min-w-0 pl-4 py-5" 
                key={index} 
                onClick={() => openModal(index)}
              >
                <div className="embla__slide__content bg-gray-700 hover:bg-gray-600 transition-colors duration-300 rounded-2xl h-72 flex flex-col justify-between p-6 cursor-pointer border-2 border-gray-600 hover:border-yellow-500 overflow-hidden">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{slide.name}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{slide.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {slide.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-gray-800 text-white text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {slide.technologies.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-800 text-white text-xs">
                          +{slide.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && selectedSlide !== null && (
        <div 
          ref={modalRef}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleModalClick}
        >
          <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 w-full max-w-4xl relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X size={24} />
            </button>
            <div className="text-white mt-6 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{slides[selectedSlide].name}</h2>
                <p className="text-gray-300 mb-4">{slides[selectedSlide].description}</p>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Learning Path:</h3>
                  <p className="text-gray-300">{slides[selectedSlide].learningPath}</p>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {slides[selectedSlide].technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-700 text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="flex items-center gap-2" asChild>
                    <a href={slides[selectedSlide].repository} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                      Repository
                    </a>
                  </Button>
                  <Button className="flex items-center gap-2 text-black" variant="outline" asChild>
                    <a href={slides[selectedSlide].liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div 
                  ref={imageRef}
                  className={`relative w-full h-[400px] rounded-lg overflow-hidden ${isMobileOrTablet ? 'cursor-zoom-in' : ''}`}
                  onMouseMove={handleImageHover}
                  onWheel={handleImageWheel}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <Image
                    src={slides[selectedSlide].image}
                    alt={slides[selectedSlide].name}
                    layout="fill"
                    objectFit="cover"
                    style={{
                      transform: isMobileOrTablet
                        ? isTouchZoomed
                          ? `scale(2) translate(${touchPosition.x}px, ${touchPosition.y}px)`
                          : 'scale(1)'
                        : `scale(${zoom})`,
                      transformOrigin: isMobileOrTablet ? 'center' : `${position.x * 100}% ${position.y * 100}%`,
                      transition: 'transform 0.2s ease-out',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}