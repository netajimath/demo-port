import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Download } from 'lucide-react';
import { downloadResume } from '../../utils/downloadResume';

export default function Contact() {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-gray-700">+91-8884629696</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <a 
                href="mailto:netajimath@gmail.com" 
                className="text-gray-700 hover:text-primary transition-colors"
              >
                netajimath@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-gray-700">Bangalore</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-primary" />
              <a 
                href="https://www.linkedin.com/in/netaji-math-4691a21a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
          
          <button 
            onClick={downloadResume}
            className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}