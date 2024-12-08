'use client'

import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FaAws, FaReact, FaShieldAlt, FaDesktop, FaJava, FaFigma, FaNode, FaPython, FaLaptopCode  } from 'react-icons/fa'
// import { SiGooglecloud } from 'react-icons/si'

const certifications = [
  {
    id: 1,
    name: "Cloud Computing Discovery Day",
    organization: "AWS/Estácio/KaSolution",
    date: "2023-05-15",
    category: "cloud",
    icon: <FaAws className="text-[#FF9900]" size={40} />,
    color: "bg-[#FF9900]",
  },
  {
    id: 2,
    name: "Responsive Web Design Developer Certification",
    organization: "FreeCodeCamp",
    date: "2022-04-30",
    category: "development",
    icon: <FaDesktop className="text-[#1DA1F2]" size={40} />, 
    color: "bg-[#1DA1F2]" 
  },
  {
    id: 3,
    name: "Introduction to Java",
    organization: "ADA Tech",
    date: "2024-06-24",
    category: "development",
    icon: <FaJava className="text-[#f2521d]" size={40} />, 
    color: "bg-[#f2521d]" 
  },
  {
    id: 4,
    name: "Figma for Devs",
    organization: "ADA Tech",
    date: "2024-06-30",
    category: "design",
    icon: <FaFigma className="text-[#881df2]" size={40} />, 
    color: "bg-[#881df2]" 
  },
  {
    id: 5,
    name: "Introduction to Node.js",
    organization: "ADA Tech",
    date: "2024-07-06",
    category: "development",
    icon: <FaNode className="text-[#20a54f]" size={40} />, 
    color: "bg-[#20a54f]" 
  },
  {
    id: 6,
    name: "Python: Introductory Concepts",
    organization: "ADA Tech",
    date: "2024-07-12",
    category: "development",
    icon: <FaPython className="text-[#f2d21d]" size={40} />, 
    color: "bg-[#f2d21d]" 
  },
  {
    id: 7,
    name: "Digital Track | Coders 24 | Front-End",
    organization: "ADA Tech",
    date: "2024-06-01",
    category: "development",
    icon: <FaLaptopCode  className="text-[#1d4ff2]" size={40} />, 
    color: "bg-[#1d4ff2]" 
  },
  // {
  //   id: 2,
  //   name: "Google Cloud Professional",
  //   organization: "Google Cloud",
  //   date: "2023-07-22",
  //   category: "cloud",
  //   icon: <SiGooglecloud className="text-[#4285F4]" size={40} />,
  //   color: "bg-[#4285F4]",
  // },
  // {
  //   id: 3,
  //   name: "Certified Information Systems Security Professional (CISSP)",
  //   organization: "(ISC)²",
  //   date: "2023-09-10",
  //   category: "security",
  //   icon: <FaShieldAlt className="text-[#00A4B4]" size={40} />,
  //   color: "bg-[#00A4B4]",
  // },
  // {
  //   id: 4,
  //   name: "React Developer Certification",
  //   organization: "Meta",
  //   date: "2023-11-05",
  //   category: "development",
  //   icon: <FaReact className="text-[#61DAFB]" size={40} />,
  //   color: "bg-[#61DAFB]",
  // },
]

const categories = ["all", "cloud", "development", "security", "design"]

export default function CertificationBadges() {
  const [filter, setFilter] = useState("all")

  const filteredCertifications = certifications.filter(
    cert => filter === "all" || cert.category === filter
  )

  return (
    <div className="mt-8 bg-gray-900 rounded-xl p-6 shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-white">Certifications</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(category => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter(category)}
            className={`capitalize ${filter === category ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-600' : 'text-gray-500 hover:bg-yellow-100'}`}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredCertifications.map(cert => (
          <TooltipProvider key={cert.id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className={`flex flex-col items-center justify-center p-4 rounded-lg ${cert.color} bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 cursor-pointer`}>
                  <div className="mb-3">{cert.icon}</div>
                  <Badge className={`${cert.color} text-white px-2 py-1 text-xs font-semibold rounded-full`}>
                    {cert.category}
                  </Badge>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-white p-4 rounded-lg shadow-xl">
                <p className="font-bold text-lg mb-1">{cert.name}</p>
                <p className="text-gray-300 mb-1">{cert.organization}</p>
                <p className="text-gray-400 text-sm">Obtained: {new Date(cert.date).toLocaleDateString()}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  )
}