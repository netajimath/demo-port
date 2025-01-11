import { useState, useEffect } from 'react';

export function useProgressiveLoading(totalComponents: number) {
  const [loadedComponents, setLoadedComponents] = useState<number[]>([]);

  useEffect(() => {
    // Reset loaded components
    setLoadedComponents([]);
    
    // Load header immediately
    setLoadedComponents([0]);
    
    // Load remaining components progressively
    const timer = setTimeout(() => {
      setLoadedComponents([...Array(totalComponents).keys()]);
    }, 100);

    return () => clearTimeout(timer);
  }, [totalComponents]);

  return { loadedComponents };
}