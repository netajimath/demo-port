import { useState, useEffect } from 'react';

export function useNavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes or on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return { isOpen, toggleMenu, closeMenu };
}