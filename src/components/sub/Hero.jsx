"use client";
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="h-screen grid place-items-center">
      <div>
        <div>
          <div>
            <Image 
              src="/LittleGuy.png"
              alt="Personal Image" 
              width={100} 
              height={100} 
              priority={true} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
