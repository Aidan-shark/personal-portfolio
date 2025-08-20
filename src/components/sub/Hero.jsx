"use client";
import Image from 'next/image';
import { heroIcons } from "@/assets";
import { useMotionValue } from "framer-motion"
import { usestate } from "react"

const Hero = () => {
  const [windowOffset, setWindowsOffset] = usestate({ innerwidth: 0, innerheight: 0})
  const [mouseMove, setMouseMove] = usestate(flase)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);

    console.log('Mouse Position:', clientX, clientY, x.get(), y.get());

  };
  const handleMouseEnter = () => {
    setWindowsOffset({innerwidth: window.innerWidth, innerHeight: window.innerHeight})



  }
  console.log("Rendering heroIcons:", heroIcons);

  return (
    <div className="h-screen grid place-items-center" onMouseMove={handleMouseMove}>
      <div className="text-center space-y-4">
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <div className="flex items-center justify-center relative"> 
            <Image 
              src="/LittleGuy.png"
              alt="Personal Image" 
              width={100} 
              height={100} 
              priority={true}
              className="h-auto w-[150px]"
            />
            <span className="absolute text-3xl font-semibold text-white">Hello there</span>
          </div>
        </div>

        <h1 className="text-center text-3xl font-bold tracking-wider text-gray-400">
          My name is Aidan Habibi
        </h1>

        <p className="text-lg tracking-wider text-gray-500">
          I am a third-year Computer Science student at the University of Wollongong.
        </p>

        {/* ICONS centered */}
        <div className="flex justify-center space-x-6 pt-5 pb-2">
          {Array.isArray(heroIcons) && heroIcons.map(({ icon, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl text-yellow-500 hover:text-white hover:bg-red-500 p-2 rounded-lg transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* BUTTON centered */}
        <a 
          href="#" 
          className="mx-auto mt-8 block w-max rounded-lg bg-yellow-400 px-4 py-2 font-light capitalize tracking-wider
            text-white hover:bg-yellow-700 transition-colors"
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;

