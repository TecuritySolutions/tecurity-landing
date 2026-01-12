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
  margin: 0 auto;
`;

export const Header = styled.header`
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.75rem;

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
    margin-bottom: 5rem;

    h2 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const TeamMember = styled.div`
  height: 35rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: url(${grid_background.src}) #131313 no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    min-height: 28rem;
  }
`;

export const ImageCtn = styled.div`
  position: relative;
  height: 65%;
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
    height: 60%;
  }
`;

export const MemberInfo = styled.div`
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    color: var(--white);
  }

  .role {
    font-size: 1rem;
    font-weight: 500;
    color: var(--emerald);
  }

  .bio {
    color: var(--link-color);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h3 {
      font-size: 1.5rem;
    }
  }
`;
