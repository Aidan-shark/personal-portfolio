'use client'
import Heading from './sub/Heading'
import Achievement from './sub/Achievement'
import Image from 'next/image'

const About = () => {
    return (
           <div>
            
                <Heading />
           <div>
            <Image src='/about-me.png' alt="About Image" width={400} height={400} />
            <div>
                <span>
                    Arrow left
                    <p>
                        About me
                    </p>
                    <a href="/aidan.cv.pdf" download="">
                    <span>
                        Download CV
                    </span>
                    <span>
                        Download icon
                    </span>

                    </a>
                </span>
            </div>
            </div>
            <div><Achievement /></div>
           </div>

            
              
        
        
        
    )

}

export default About
