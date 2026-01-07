'use client';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 12.38rem;
  margin-bottom: 8.25rem;

  @media (max-width: 768px) {
    margin-top: 6.44rem;
    margin-bottom: 6rem;
  }
`;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.25rem;

  h2 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    color: var(--link-color);
    font-size: 1.25rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 4rem;

    h2 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ValueCard = styled.div`
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: url(${grid_background.src}) #131313 no-repeat;
  background-size: cover;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(72, 214, 76, 0.1);
  border: 2px solid var(--emerald);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 3rem;
    height: 3rem;
  }
`;

export const ValueContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--white);
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }
`;
