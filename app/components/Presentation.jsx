'use client'

import React from 'react'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Youtube, ArrowDown } from 'lucide-react'
import CertificationBadges from './CertificationsBadge'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <div className="min-h-screen text-white p-4 md:p-8 lg:p-12 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-white mb-6">About me</h2>
      <div className="w-full max-w-4xl bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <aside className="md:w-1/3 p-6 bg-gray-700 flex flex-col items-center justify-center">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
              <Image
                src="/profile.png"
                layout="fill"
                objectFit="cover"
                alt="Profile picture of Lucas Costa"
                title="Lucas Costa"
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">Lucas Costa</h1>
            <p className="text-gray-300 text-center mb-4">Computer Science Student</p>
            <div className="flex space-x-4 mb-6">
              <SocialIcon Icon={Linkedin} bg="bg-[#0077B5]" href="https://www.linkedin.com/in/lcscostadev" />
              <SocialIcon Icon={Github} bg="bg-[#333]" href="https://github.com/lcscostadev" />
              <SocialIcon Icon={Twitter} bg="bg-[#1DA1F2]" href="https://twitter.com/lcscostadev" />
              <SocialIcon Icon={Youtube} bg="bg-[#FF0000]" href="https://www.youtube.com/@lcscostadev" />
            </div>
            <button className="group bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-yellow-400 hover:shadow-lg transition-all duration-300 flex items-center space-x-2" onClick={() => document.getElementById('carousel').scrollIntoView({ behavior: 'smooth' })}>
              <span>SEE PROJECTS</span>
              <ArrowDown className="w-5 h-5 transform group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </aside>
          <main className="md:w-2/3 p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Summary</h2>
              <p className="text-gray-300 leading-relaxed">
                I'm 25 years old and I'm a Computer Science student. I recognize myself as an enthusiast in current market technologies, always looking to learn and be better. I see my evolution daily.
              </p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <button className="bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full hover:bg-yellow-400 transition-colors duration-300">
                Contact Me
              </button>
            </div>
            <CertificationBadges />
          </main>
        </div>
      </div>
    </div>
  )
}

function SocialIcon({ Icon, bg, href }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${bg} p-2 rounded-full hover:opacity-80 transition-opacity duration-300`}>
      <Icon size={24} />
    </a>
  )
}