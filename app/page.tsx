// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F7F7]">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#104A43]">Juris</h1>

        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-[#104A43] hover:text-[#0E5441]">
            Home
          </a>
          <a href="#" className="text-[#104A43] hover:text-[#0E5441]">
            About
          </a>
          <a href="#" className="text-[#104A43] hover:text-[#0E5441]">
            Services
          </a>
          <a href="#" className="text-[#104A43] hover:text-[#0E5441]">
            Contact
          </a>
          <button className="bg-[#83D3A7] text-[#104A43] px-6 py-2 rounded-full hover:bg-[#74be97] transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 mt-20">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[#104A43] leading-tight">
            Welcome to Our Legal Experts
          </h1>

          <div className="my-8">
            <div className="w-16 h-1 bg-[#83D3A7]"></div>
          </div>

          <p className="text-xl md:text-2xl text-[#104A43] mb-12">
            Empowering Your Legal...
          </p>

          <button className="bg-[#83D3A7] text-[#104A43] px-8 py-3 rounded-full text-lg hover:bg-[#74be97] transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
