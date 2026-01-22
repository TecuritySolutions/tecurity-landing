'use client';
import Image from 'next/image';
import ic_import from '../../../../public/images/TNew2.gif';

import { Wrapper, Inner, SecondOverlay } from './styles';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const word = ['T', 'e', 'c', 'u', 'r', 'i', 't', 'y'];

  const spans = useRef<any>([]); // Create a ref to store the span elements
  const imageRef = useRef(null);
  const secondOverlayRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(imageRef.current, {
      rotate: '360deg',
      ease: 'back.out(1.7)', // Easing function
      duration: 2.5,
    });
    // Iterate through the span elements and animate them
    tl.to(spans.current, {
      y: '-150%', // Move the spans up further to ensure complete disappearance
      ease: 'back.out(1.7)', // Easing function
      duration: 2, // Animation duration
      stagger: 0.1, // Stagger duration
    });
    // Animate the image at the same time as the last span animation
    tl.to(imageRef.current, {
      y: '-150%', // Move the image up with the text, further to ensure complete disappearance
      ease: 'back.out(1.7)', // Easing function
      duration: 2,
    }, '<'); // '<' means start at the same time as previous animation
    // Animate both the wrapper and the second overlay almost at the same time
    tl.to([wrapperRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'back.out(1.7)',
      duration: 1.5,
      stagger: 0.3,
      onComplete: () => {
        setComplete(true);
      },
    });

    // Apply a small delay to one of the elements (adjust as needed)
    tl.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      ease: [0.83, 0, 0.17, 1] as any,
      duration: 1.5,
      delay: -1.2, // Adjust this delay as needed to fine-tune the timing
    });
  }, [setComplete]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          <Image width={200} height={200} ref={imageRef} src={ic_import} alt="import icon" />
          <div>
            {word.map((t, i) => (
              <div
                key={i}
                ref={(element) => (spans.current[i] = element)} // Assign ref to each span
              >
                {t}
              </div>
            ))}
          </div>
        </Inner>
      </Wrapper>
      <SecondOverlay ref={secondOverlayRef}></SecondOverlay>
    </>
  );
};

export default Preloader;
