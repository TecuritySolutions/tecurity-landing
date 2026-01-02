'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-bottom: 8.25rem;

  @media (max-width: 768px) {
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

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
`;

export const StepNumber = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(72, 214, 76, 0.1);
  border: 2px solid var(--emerald);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  color: var(--emerald);
`;

export const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--white);
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--link-color);
  line-height: 1.5rem;
`;
