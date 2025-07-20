export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-4 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Hi, I'm <span className="text-yellow-400">Aidan</span>
      </h1>
      <p className="text-xl max-w-xl text-gray-300 mb-8">
        I’m a third year software engineering student passionate about building modern, fast, and beautiful web experiences.
      </p>
      <a
        href="#projects"
        className="bg-orange-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        See My Work
      </a>
    </main>
  );
}
