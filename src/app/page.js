"use client"
import Hero from '../components/sub/Hero';
import about from '../components/sub/about';


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-4 text-center">
      <Hero />
      <about />
    </main>
  );
}
