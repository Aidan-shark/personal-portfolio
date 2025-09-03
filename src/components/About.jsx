'use client'
import Heading from './sub/Heading'
import Achievement from './sub/Achievement'
import Image from 'next/image'

const About = () => {
  return (
    <div className="min-h-screen px-10 py-20 flex items-center justify-center bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full items-center">
        
        <div className="flex flex-col items-center md:items-start gap-6">
            <Heading />
          <Image
            src="/about-me.png"
            alt="About me"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>

    
        <div className="flex flex-col items-start gap-6">
          
          <p className="text-lg leading-relaxed max-w-md">
            {aboutText}Hi, I'm Aidan. I build full-stack applications with React, Next.js, and cloud technologies.
          </p>

          <a
            href="/aidan.cv.pdf"
            download
            className="mx-auto mt-8 block w-max rounded-lg bg-yellow-400 px-4 py-2 font-light capitalize tracking-wider
            text-white hover:bg-yellow-700 transition-colors"
          >
            Download CV
          </a>

          <div className="mt-10">
            <Achievement />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About