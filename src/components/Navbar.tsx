import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useNavMenu } from '../hooks/useNavMenu';

export default function Navbar() {
  const location = useLocation();
  const { isOpen, toggleMenu, closeMenu } = useNavMenu();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1F2937] text-white z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl tracking-wider">
            NETAJIMATH
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLinks location={location} />
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <NavLinks location={location} onClick={closeMcenu} mobile />
          </div>
        )}
      </div>
    </nav>
  );
}

interface NavLinksProps {
  location: { pathname: string };
  onClick?: () => void;
  mobile?: boolean;
}

function NavLinks({ location, onClick, mobile = false }: NavLinksProps) {
  const linkClass = `hover:text-primary transition-colors ${mobile ? 'block py-2' : ''}`;
  
  return (
    <>
      <Link 
        to="/about" 
        onClick={onClick}
        className={`${linkClass} ${location.pathname === '/about' ? 'text-purple-400 ' : ''}`}
      >
        About Me
      </Link>
      <Link 
        to="/case-studies" 
        onClick={onClick}
        className={`${linkClass} ${location.pathname === '/case-studies' ? 'text-purple-400 ' : ''}`}
      >
        Case Studies
      </Link>
      
    </>
  );
}