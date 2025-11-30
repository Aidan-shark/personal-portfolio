'use client'
import Heading from './sub/Heading'
import Achievement from './sub/Achievement'
import Image from 'next/image'
import { FaGithub, FaProjectDiagram } from "react-icons/fa";



const About = () => {

    const aboutData = [
    {
      id: 1,
      title: "Github Repos",
      amount: "348",
      icon: <FaGithub className="w-8 h-8 text-yellow-500" />,
    },
    {
      id: 2,
      title: "Certificates",
      amount: "12",
      icon: <FaProjectDiagram className="w-8 h-8 text-yellow-500" />,
    },
    {
      id: 3,
      title: "Projects",
      amount: "12",
      icon: <FaProjectDiagram className="w-8 h-8 text-yellow-500" />,
    },

    
  ];

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
          <div className="bg-gray-800 text-gray-200 p-6 rounded-xl shadow-lg max-w-md">
          <p className="text-lg leading-relaxed">
            Hi, I'm Aidan. I build full-stack applications with React, Next.js, and cloud technologies.
          </p>
          </div>

          <a
            href="/aidan.cv.pdf"
            download
            className="mx-auto mt-8 block w-max rounded-lg bg-yellow-400 px-4 py-2 font-light capitalize tracking-wider
            text-white hover:bg-yellow-700 transition-colors"
          >
            <span>Download CV</span>
          </a>

          <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
            {aboutData.map((item, i) => (
              <Achievement 
                   key={i} 
                   title={item.title} 
                   amount={item.amount} 
                   icon={item.icon} 
              />

              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About