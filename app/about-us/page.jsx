import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow py-20 px-6 md:px-24">
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-blue-500">
            About Us
          </h1>

          <p className="text-gray-300 text-lg leading-8">
            Welcome to <span className="text-blue-400 font-semibold">Forge of Justice</span>, the world's first and finest destination for real superhero gadgets and crime-fighting tech. We’re not talking cosplay—we’re talking functionality, innovation, and power that would make even Bruce Wayne take notes.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">Our Mission</h2>
              <p className="text-gray-400 leading-7">
                Forge of Justice was born from the belief that power should be accessible to those who protect and serve. Whether you're a vigilante patrolling your city or a civilian in need of a little backup, we craft real-world gadgets that elevate ordinary humans into extraordinary defenders.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Gadgets built with advanced real-world engineering</li>
                <li>Used by independent defenders and licensed heroes worldwide</li>
                <li>Tested for performance, durability, and stealth</li>
                <li>Discreet packaging and secure global delivery</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Contact Us</h2>
            <p className="text-gray-400">
              Got a mission? Need gear? We're here for you.<br />
              Email: <a href="mailto:support@forgeofjustice.com" className="text-blue-300">support@forgeofjustice.com</a><br />
              Phone: <span className="text-blue-300">+91 12345 67890</span>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-700 pt-6 px-4 md:px-10">
        <Footer />
      </footer>
    </div>
  );
};

export default AboutUs;
