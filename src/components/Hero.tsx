import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-orange-50 to-orange-100 min-h-[500px] relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold mb-4">
              Hello, I'm a<br />
              <span className="text-orange-500">Developer</span>
            </h1>
            <p className="text-gray-600 mb-8">Frontend Developer | Based in Innovation</p>
            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
                Let's Talk
              </button>
              <div className="flex gap-4 items-center">
                <a href="#" className="text-gray-700 hover:text-orange-500 transition">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition">
                  <Mail size={24} />
                </a>
                <a href="#" className="text-gray-700 hover:text-orange-500 transition">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img 
               src="/images/aboutme/netaji.jpg" 
              alt="Profile" 
              className="w-[300px] h-[300px] rounded-full object-cover border-8 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
