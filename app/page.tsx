// // app/page.tsx
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#F6F7F7]">
//       {/* Navigation */}
//       <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
//         <h1 className="text-2xl font-bold text-[#104A43]">Juris</h1>
//         <div className="hidden md:flex space-x-8 items-center">
//           <a href="#" className="text-[#104A43] hover:text-[#0E5441]">
//             Home
//           </a>
//           <a href="#" className="text-[#104A43] hover:text-[#0E5441]">
//             About
//           </a>
//           <a href="#" className="text-[#104A43] hover:text-[#0E5441]">
//             Services
//           </a>
//           <a href="#" className="text-[#104A43] hover:text-[#0E5441]">
//             Contact
//           </a>
//           <button className="bg-[#83D3A7] text-[#104A43] px-6 py-2 rounded-full hover:bg-[#74be97] transition-colors">
//             Get Started
//           </button>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="container mx-auto px-4 mt-12 md:mt-20">
//         <div className="flex flex-col md:flex-row items-center gap-8">
//           <div className="max-w-2xl md:w-1/2">
//             <p className="my-8 ml-40 font-bold text-[#104A43] leading-tight">
//               Welcome to Our Legal Experts
//             </p>
//             {/* <div className="my-8 w-16 h-1 bg-[#83D3A7]"></div> */}
//             <h1 className="text-5xl md:text-6xl text-[#104A43] mb-12 justify-evenly">
//               Empowering Your Legal...
//             </h1>
//             <button className="bg-[#83D3A7] text-[#104A43] px-8 py-3 rounded-full text-lg hover:bg-[#74be97] transition-colors ml-48">
//               Get Started
//             </button>
//           </div>
//           <div className="md:w-1/2 w-full h-96 bg-[#83D3A7]/20 rounded-2xl flex items-center justify-center">
//             <p className="text-[#104A43]">Hero Image Placeholder</p>
//           </div>
//         </div>
//       </section>

//       {/* Expertise Section */}
//       <section className="container mx-auto px-4 py-16 md:py-24">
//         <div className="flex flex-col md:flex-row-reverse items-center gap-12">
//           <div className="md:w-1/2 w-full h-96 bg-[#83D3A7]/20 rounded-2xl flex items-center justify-center">
//             <p className="text-[#104A43]">Expertise Image</p>
//           </div>
//           <div className="md:w-1/2">
//             <h2 className="text-4xl md:text-5xl font-bold text-[#104A43] mb-6">
//               Discover Our Expertise
//             </h2>
//             <p className="text-lg text-[#104A43] mb-8">
//               As a leading legal practice, we pride ourselves on our
//               comprehensive understanding of the law and our ability to deliver
//               innovative solutions.
//             </p>
//             <button className="bg-[#83D3A7] text-[#104A43] px-8 py-3 rounded-full hover:bg-[#74be97] transition-colors">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="bg-[#0E5441] py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl md:text-5xl font-bold text-[#F6F7F7] mb-16 text-center">
//             Why Choose Us?
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               "Personalized Attention",
//               "Proven Track Record",
//               "Responsive Communication",
//             ].map((item) => (
//               <div key={item} className="bg-[#F6F7F7] p-6 rounded-xl">
//                 <h3 className="text-xl font-bold text-[#104A43] mb-4">
//                   {item}
//                 </h3>
//                 <p className="text-[#104A43]">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                 </p>
//                 <button className="mt-4 text-[#0E5441] hover:text-[#104A43] font-semibold">
//                   Learn More →
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="container mx-auto px-4 py-16 md:py-24">
//         <h2 className="text-4xl md:text-5xl font-bold text-[#104A43] mb-16 text-center">
//           Our Services
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[
//             "Litigation",
//             "Transactions",
//             "Estate Planning",
//             "Employment Law",
//           ].map((service) => (
//             <div key={service} className="bg-white p-6 rounded-xl shadow-lg">
//               <div className="h-48 bg-[#83D3A7]/20 rounded-xl mb-4"></div>
//               <h3 className="text-xl font-bold text-[#104A43] mb-2">
//                 {service}
//               </h3>
//               <p className="text-[#104A43]">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               </p>
//               <button className="mt-4 text-[#0E5441] hover:text-[#104A43] font-semibold">
//                 Read More →
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-[#0E5441] text-[#F6F7F7] py-16">
//         <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">Juris</h3>
//             <p className="text-sm">
//               © 2025 Juris, Inc.
//               <br />
//               All rights reserved.
//             </p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">Quick Links</h4>
//             {["Home", "About", "Services", "Contact"].map((link) => (
//               <a
//                 key={link}
//                 href="#"
//                 className="block mb-2 hover:text-[#83D3A7]"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">Our Services</h4>
//             {[
//               "Litigation",
//               "Transactions",
//               "Estate Planning",
//               "Employment Law",
//             ].map((service) => (
//               <a
//                 key={service}
//                 href="#"
//                 className="block mb-2 hover:text-[#83D3A7]"
//               >
//                 {service}
//               </a>
//             ))}
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">Connect</h4>
//             {["Email", "Phone", "Address"].map((contact) => (
//               <p key={contact} className="mb-2">
//                 {contact}
//               </p>
//             ))}
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }

// app/page.tsx
import Image from "next/image";

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

      {/* 1. Home Page */}
      <section className="container mx-auto px-4 mt-12 md:mt-20 mb-24">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="max-w-2xl md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold text-[#104A43] leading-tight">
              Welcome to Our Legal Experts
            </h1>
            <div className="my-8 w-16 h-1 bg-[#83D3A7]"></div>
            <p className="text-xl md:text-2xl text-[#104A43] mb-12">
              Empowering Your Legal Journey
            </p>
            <button className="bg-[#83D3A7] text-[#104A43] px-8 py-3 rounded-full text-lg hover:bg-[#74be97] transition-colors">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 w-full h-96 bg-[#83D3A7]/20 rounded-2xl flex items-center justify-center">
            <p className="text-[#104A43]">Hero Image</p>
          </div>
        </div>
      </section>

      {/* 2. Discover Our Expertise */}
      <section className="bg-[#0E5441] py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-[#F6F7F7]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Discover Our Expertise
            </h2>
            <p className="text-lg md:text-xl mb-8">
              As a leading legal practice, we pride ourselves on our
              comprehensive understanding of the law and our ability to deliver
              innovative solutions.
            </p>
            <button className="bg-[#83D3A7] text-[#104A43] px-8 py-3 rounded-full hover:bg-[#74be97] transition-colors">
              Learn More
            </button>
          </div>
          <div className="md:w-1/2 w-full h-96 bg-[#83D3A7]/20 rounded-2xl"></div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-[#104A43] mb-16 text-center">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Personalized Attention",
            "Proven Track Record",
            "Responsive Communication",
          ].map((item) => (
            <div key={item} className="text-center p-6">
              <div className="h-16 w-16 bg-[#83D3A7] rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold text-[#104A43] mb-4">{item}</h3>
              <p className="text-[#104A43]">
                We prioritize your unique needs with customized legal strategies
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Trusted by Businesses */}
      <section className="bg-[#83D3A7] py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full h-96 bg-[#0E5441]/20 rounded-2xl"></div>
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-[#104A43] mb-6">
              Trusted by Businesses
            </h2>
            <p className="text-lg text-[#104A43] mb-8">
              Our law firm has a proven track record of providing top-tier legal
              services to businesses of all sizes.
            </p>
            <button className="bg-[#0E5441] text-[#F6F7F7] px-8 py-3 rounded-full hover:bg-[#104A43] transition-colors">
              Connect with Us
            </button>
          </div>
        </div>
      </section>

      {/* 5. Elevate Your Legal Journey */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#104A43] mb-6">
            Elevate Your Legal Journey
          </h2>
          <p className="text-lg text-[#104A43] mb-8">
            We are dedicated to providing exceptional legal services tailored to
            your unique needs.
          </p>
          <button className="bg-[#83D3A7] text-[#104A43] px-8 py-3 rounded-full hover:bg-[#74be97] transition-colors">
            Get Started
          </button>
        </div>
      </section>

      {/* 6. Personalized Legal Solutions */}
      <section className="bg-[#0E5441] py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-[#F6F7F7]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Personalized Legal Solutions
            </h2>
            <p className="text-lg md:text-xl mb-8">
              We develop tailored strategies that address your specific needs
              and objectives.
            </p>
            <button className="bg-[#83D3A7] text-[#104A43] px-8 py-3 rounded-full hover:bg-[#74be97] transition-colors">
              Schedule Consultation
            </button>
          </div>
          <div className="md:w-1/2 w-full h-96 bg-[#83D3A7]/20 rounded-2xl"></div>
        </div>
      </section>

      {/* 7. Our Commitment to You */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#104A43] mb-12 text-center">
            Our Commitment to You
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Trusted Legal Advisors",
                text: "With years of experience and a proven track record of success",
                button: "Get in Touch",
                color: "bg-[#83D3A7]",
              },
              {
                title: "Responsive Communication",
                text: "We understand the importance of clear and timely communication",
                button: "Schedule Consultation",
                color: "bg-[#0E5441]",
              },
              {
                title: "Cost-Effective Solutions",
                text: "We are committed to providing cost-effective legal solutions",
                button: "Explore Pricing",
                color: "bg-[#0E5441]",
              },
              {
                title: "Personalized Attention",
                text: "At our law firm, we believe that every client deserves care",
                button: "Get in Touch",
                color: "bg-[#83D3A7]",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-[#83D3A7]/20"
              >
                <h3 className="text-xl font-bold text-[#104A43] mb-4">
                  {item.title}
                </h3>
                <p className="text-[#104A43] mb-6">{item.text}</p>
                <button
                  className={`${item.color} text-[#104A43] px-6 py-2 rounded-full text-sm hover:opacity-90 transition-opacity`}
                >
                  {item.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-[#0E5441] text-[#F6F7F7] py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Juris</h3>
            <p className="text-sm">
              © 2025 Juris, Inc.
              <br />
              All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            {["Home", "About", "Services", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="block mb-2 hover:text-[#83D3A7]"
              >
                {link}
              </a>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            {[
              "Litigation",
              "Transactions",
              "Estate Planning",
              "Employment Law",
            ].map((service) => (
              <a
                key={service}
                href="#"
                className="block mb-2 hover:text-[#83D3A7]"
              >
                {service}
              </a>
            ))}
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            {[
              "Email: info@juris.com",
              "Phone: (555) 123-4567",
              "Address: 123 Legal St.",
            ].map((item) => (
              <p key={item} className="mb-2">
                {item}
              </p>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
