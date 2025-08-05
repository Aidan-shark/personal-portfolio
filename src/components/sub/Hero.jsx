"use client";
import Image from 'next/image';
import { heroIcons } from "@/assets";
;



const Hero = () => {
   console.log("Rendering heroIcons:", heroIcons);

  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center space-y-4">
        <div className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">
          <div className="flex items-center justify-center"> 
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
        <h1 className="text-center text-3xl font-bold tracking-wider text-gray-400">My name is Aidan Habibi</h1>
        <p className="text-lg tracking-wider text-gray-500">
          I am a third-year Computer Science student at the University of Wollongong.
        </p>
         <div className="flex justify-center space-x-6 pt-5">

             {Array.isArray(heroIcons) && heroIcons.map(({ icon, url }, i) => (
        <a
             key={i}
             href={url}
             target="_blank"
             rel="noopener noreferrer"
             className="text-white hover:text-yellow-400 text-5xl transition-all duration-200"
       >
           {icon}
       </a>
          ))}


         <a href="#" className="mx-auto mt-7 block w-max rounded-lg bg-yellow-400 px-3 py-1 font-light capitalize tracking-wider
           text-white hover:bg-yellow-600 transition-colors">
         Talk to me
        </a>
           </div>


      </div>
    </div>
  );
};

export default Hero;
