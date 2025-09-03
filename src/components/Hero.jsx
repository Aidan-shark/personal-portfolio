"use client";
import Image from 'next/image';
import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion"
import { useState } from "react"

const Hero = () => {
  const [windowOffset, setWindowsOffset] = useState({ innerWidth: 0, innerheight: 0})
  const [mouseMove, setMouseMove] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);

    console.log('Mouse Position:', clientX, clientY, x.get(), y.get());

  };
  const handleMouseEnter = () => {
    setWindowsOffset({innerWidth: window.innerWidth, innerHeight: window.innerHeight}) 
    setMouseMove(true)

    console.log(innerWidth, innerHeight)

  };

  const {innerWidth, innerHeight} = windowOffset

  const xSpring = useSpring(x, {stiffnesss: 100, damping: 30})
  const ySpring = useSpring(y, {stiffnesss: 100, damping: 30})


  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30])
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50])

  return (
    <div className="h-screen grid place-items-center" 
    onMouseMove={handleMouseMove}
    onMouseEnter={handleMouseEnter}
    >
        <div className="text-center space-y-4">
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <motion.div
            className="flex items-center justify-center relative"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src="/LittleGuy.png"
              alt="Personal Image"
              width={100}
              height={100}
              priority
              className="h-auto w-[150px]"
            />
            <motion.span className="absolute text-3xl font-semibold text-white"
            initial={{scale: 0}}
            animate={{
              opacity: buttonHover ? 0 : 1,
              scale: buttonHover ? 2 : 0,
              y: buttonHover ? -40 : 0,
            }}
            transition={{ opacity: { delay:0.4 }}}>
              
              Hello there
              </motion.span>
          </motion.div>
        </div>

        <h1 className="text-center text-3xl font-bold tracking-wider text-gray-400 sm:text-2xl">
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
              className="text-3xl text-yellow-500 hover:text-white hover:bg-red-500 p-2 rounded-lg transition-colors sm:text-2xl"
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
             onMouseEnter={() => setButtonHover(true)}
             onMouseLeave={() => setButtonHover(false)}

       
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;

