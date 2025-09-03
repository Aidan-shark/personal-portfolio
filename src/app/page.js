"use client"
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';

export default function Home() {
  return (
    
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-4 text-center">
      <Hero />
      <About />
    </main>
  );
}
