"use client";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="h-screen grid place-items-center bg-gray-900 text-white px-7">
      <div className="text-center space-y-4">
        <div className="flex flex-col items-center space-y-2">
          <Image 
            src="/LittleGuy.png"
            alt="Personal Image" 
            width={100} 
            height={100} 
            priority 
          />
          <span className="text-lg font-medium">Hello there</span>
        </div>
        <h1 className="text-3xl font-bold">My name is Aidan Habibi</h1>
        <p className="text-sm">
          I am a third-year Computer Science student at the University of Wollongong.
        </p>
        <div className="flex justify-center space-x-6 pt-5">
          <a href="#" className="text-yellow-400 hover:underline">Icon</a>
          <a href="#" className="text-yellow-400 hover:underline">Talk to me</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
