import Presentation from "./components/Presentation"
import Carousel from "./components/Carousel"
import Skills from "./components/Skills"
import '../app/components/embla.css'

const OPTIONS = { loop: true }
const SLIDE_COUNT = 8
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <main className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 space-y-16 pb-16">
          <Presentation />
        <section id="projects" className="scroll-mt-16">
          <h2 className="text-3xl font-semibold  text-center">My Projects</h2>
          <Carousel slides={SLIDES} options={OPTIONS} />
        </section>

        <section id="skills" className="scroll-mt-16">  
          <Skills />
        </section>
      </main>

      <footer className="bg-gray-800 py-8 px-4 md:px-8 lg:px-12 text-center">
        <p>&copy; 2024 Lucas Costa. All rights reserved.</p>
      </footer>
    </div>
  )
}