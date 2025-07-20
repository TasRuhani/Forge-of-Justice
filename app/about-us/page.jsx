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
            Welcome to <span className="text-blue-400 font-semibold">[Your Store Name]</span>, your go-to destination for high-quality and affordable
            products. We believe in delivering excellence and making your online shopping experience simple, seamless, and enjoyable.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">Our Mission</h2>
              <p className="text-gray-400 leading-7">
                Our mission is to provide handpicked items that bring value to your life. We are driven by innovation,
                customer satisfaction, and a commitment to ethical and sustainable practices.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-blue-400 mb-2">Why Choose Us?</h2>
              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Fast and reliable delivery</li>
                <li>Top-rated customer support</li>
                <li>Secure and flexible payment options</li>
                <li>Quality assurance on all products</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">Contact Us</h2>
            <p className="text-gray-400">
              Have questions? We’d love to hear from you.<br />
              Email: <a href="mailto:support@yourstore.com" className="text-blue-300">support@yourstore.com</a><br />
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
