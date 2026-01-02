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
  margin: 12.38rem auto 0;

  @media (max-width: 768px) {
    margin-top: 6.44rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.75rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    margin-bottom: 4rem;

    h1 {
      font-size: 2.25rem;
    }
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;
