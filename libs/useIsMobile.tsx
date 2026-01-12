'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const isClient = typeof window === 'object';

export const useIsMobile = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false); // Safe default for SSR

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
    };

    if (isClient) {
      // Set initial value on mount
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [pathname]);

  return isMobile;
};
