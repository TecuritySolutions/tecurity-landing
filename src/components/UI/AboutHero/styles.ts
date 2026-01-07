'use client';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 6.25rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

export const Inner = styled.div`
  max-width: 56rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: url(${grid_background.src}) no-repeat;
  background-size: cover;
  text-align: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const Pill = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--white);
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-size: 6rem;
    font-weight: 400;
    line-height: 1.1;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--link-color);
    line-height: 1.5;
    max-width: 41.75rem;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    gap: 1rem;

    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
