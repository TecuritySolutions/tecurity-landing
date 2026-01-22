'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header, Preloader } from '..';
import { useState, useEffect } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('preloaderShown');
    if (hasSeenPreloader) {
      setComplete(true);
    } else {
      setShowPreloader(true);
    }
  }, []);

  const handlePreloaderComplete: React.Dispatch<React.SetStateAction<boolean>> = (value) => {
    setComplete(value);
    sessionStorage.setItem('preloaderShown', 'true');
  };

  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}
      >
        <GlobalStyles />
        {showPreloader && !complete && (
          <Preloader setComplete={handlePreloaderComplete} />
        )}
        <div className={complete ? 'complete' : 'not_complete'}>
          <Header />
          {children}
          <Footer />
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;
