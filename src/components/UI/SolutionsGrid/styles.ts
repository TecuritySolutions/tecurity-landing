'use client';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 12.38rem;

  @media (max-width: 768px) {
    margin-top: 6.44rem;
  }
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto 8.25rem;

  @media (max-width: 768px) {
    margin-bottom: 6rem;
  }
`;

export const Header = styled.header`
  max-width: 56rem;
  margin: 0 auto 6.75rem;
  text-align: center;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    color: var(--link-color);
    font-size: 1.25rem;
    max-width: 41.75rem;
    margin: 1.5rem auto 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 5rem;

    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const SolutionCard = styled.div`
  height: 31.25rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: url(${grid_background.src}) #131313 no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    min-height: 25rem;
  }
`;

export const ImageCtn = styled.div`
  position: relative;
  height: 60%;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, #131313, transparent);
    z-index: 1;
  }

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 50%;
  }
`;

export const TextCtn = styled.div`
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.375rem;
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h2 {
      font-size: 1.5rem;
    }
  }
`;
