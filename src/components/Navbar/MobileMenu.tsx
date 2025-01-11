// src/components/Navbar/MobileMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm lg:hidden">
      <div className="fixed right-0 top-0 w-[75%] h-screen bg-[#1F2937] p-6">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-primary"
        >
          <X size={24} />
        </button>
        
        <nav className="mt-16 space-y-6">
          <Link 
            to="/case-studies" 
            className="block text-white hover:text-primary text-lg"
            onClick={onClose}
          >
            Case Studies
          </Link>
          <Link 
            to="/about" 
            className="block text-white hover:text-primary text-lg"
            onClick={onClose}
          >
            About Me
          </Link>
        </nav>
      </div>
    </div>
  );
}
