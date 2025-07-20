import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow px-6 md:px-24 py-20">
        <div className="max-w-4xl mx-auto space-y-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-blue-500">Contact Us</h1>

          <p className="text-gray-300 text-lg leading-8">
            Got questions, feedback, or inquiries? We're here to help. Fill out the form below or reach us directly at 
            <span className="text-blue-400 font-medium"> support@yourstore.com</span>.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-md bg-slate-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-md bg-slate-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message here..."
                className="w-full px-4 py-3 rounded-md bg-slate-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-6 py-3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>

      <footer className="mt-12 border-t border-gray-700 pt-6 px-4 md:px-10">
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
