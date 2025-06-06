'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimation } from "framer-motion"
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker } from "react-icons/fa"
import { SiTypescript, SiJavascript, SiNextdotjs } from "react-icons/si"
import { Info } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const skillsData = [
  { id: 1, component: FaReact, name: "React", color: "text-[#61DAFB]", experience: "3 years", projects: ["Portfolio Website", "E-commerce Platform", "ToDoList"] },
  { id: 2, component: FaNodeJs, name: "Node.js", color: "text-[#339933]", experience: "2 years", projects: ["RESTful API", "Discord Bot"] },
  { id: 3, component: SiTypescript, name: "TypeScript", color: "text-[#3178C6]", experience: "1 year", projects: ["Habit Gamification App", "Fast Free Tools"] },
  // { id: 4, component: FaPython, name: "Python", color: "text-[#3776AB]", experience: "4 years", projects: ["Machine Learning Model", "Web Scraper"] },
  { id: 5, component: SiJavascript, name: "JavaScript", color: "text-[#F7DF1E]", experience: "3 years", projects: ["Interactive Web Games", "Browser Extensions"] },
  { id: 6, component: FaJava, name: "Java", color: "text-[#007396]", experience: "1 year", projects: ["2D Games"] },
  { id: 7, component: SiNextdotjs, name: "Next.js", color: "text-white", experience: "2 years", projects: ["Server-side Rendered App", "Habit Gamification App", "Fast Free Tools"] },
  // { id: 8, component: FaDocker, name: "Docker", color: "text-[#2496ED]", experience: "1 year", projects: ["Containerized Microservices", "CI/CD Pipeline"] },
]

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)
  const containerRef = useRef(null)
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 })
  const [iconPositions, setIconPositions] = useState([])
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      const updateSize = () => {
        const { width, height } = containerRef.current.getBoundingClientRect()
        setContainerSize({ width, height })
        setIconPositions(generateRandomPositions(width, height))
      }
      updateSize()
      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
    }
  }, [])

  const generateRandomPositions = (width, height) => {
    return skillsData.map(() => ({
      x: Math.random() * (width - 40),
      y: Math.random() * (height - 40),
    }))
  }

  const handleIconClick = (clickedSkill) => {
    setSelectedSkill(selectedSkill?.id === clickedSkill.id ? null : clickedSkill)
  }

  const resetPositions = () => {
    setIconPositions(generateRandomPositions(containerSize.width, containerSize.height))
    setSelectedSkill(null)
    setKey(prevKey => prevKey + 1)
  }

  return (
    <TooltipProvider>
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-white mb-6">My Skills</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <Card className="bg-gray-800 border-gray-700 flex-grow relative">
            <CardContent className="p-6">
              <div ref={containerRef} className="relative w-full h-[400px] overflow-hidden border-2 border-gray-600 rounded-lg">
                {iconPositions.length > 0 && skillsData.map((skill, index) => (
                  <FloatingIcon
                    key={`${skill.id}-${key}`}
                    skill={skill}
                    containerSize={containerSize}
                    onClick={() => handleIconClick(skill)}
                    velocity={5 + index * 0.5}
                    initialPosition={iconPositions[index]}
                  />
                ))}
              </div>
              <Button onClick={resetPositions} className="mt-4 bg-yellow-500 text-gray-900 hover:bg-yellow-600">
                Reset Positions
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700 w-full md:w-64">
            <CardContent className="p-6">
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 mb-4 h-40 flex items-center justify-center">
                {selectedSkill ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="text-white text-center"
                  >
                    <div className="flex items-center justify-center mb-4">
                      <selectedSkill.component className={`text-6xl ${selectedSkill.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{selectedSkill.name}</h3>
                    <p className="text-gray-300 flex items-center justify-center">
                      Experience: {selectedSkill.experience}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="w-4 h-4 ml-1 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Experience from academic and personal projects</p>
                        </TooltipContent>
                      </Tooltip>
                    </p>
                  </motion.div>
                ) : (
                  <p className="text-gray-400 text-center">Click on a skill to view details</p>
                )}
              </div>
              {selectedSkill && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">Projects:</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {selectedSkill.projects.map((project, index) => (
                      <Badge key={index} variant="secondary" className="bg-yellow-500 text-gray-900">
                        {project}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  )
}

function FloatingIcon({ skill, containerSize, onClick, velocity, initialPosition }) {
  const controls = useAnimation()
  const IconComponent = skill.component

  useEffect(() => {
    const randomPosition = () => ({
      x: Math.random() * (containerSize.width - 40),
      y: Math.random() * (containerSize.height - 40),
    })

    const animate = async () => {
      if (initialPosition) {
        await controls.start({
          x: initialPosition.x,
          y: initialPosition.y,
          transition: { type: "spring", stiffness: 300, damping: 20 },
        })
        controls.start({
          x: [initialPosition.x, randomPosition().x],
          y: [initialPosition.y, randomPosition().y],
          transition: {
            duration: velocity * 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          },
        })
      }
    }

    if (containerSize.width > 0 && containerSize.height > 0) {
      animate()
    }

    return () => controls.stop()
  }, [controls, containerSize, velocity, initialPosition])

  return (
    <motion.div
      className={`absolute cursor-pointer transform hover:scale-110 transition-transform duration-200 ${skill.color}`}
      animate={controls}
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconComponent className="text-4xl md:text-5xl" />
    </motion.div>
  )
}