'use client';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

export const CardsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InfoCard = styled(motion.div)`
  padding: 2.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.04);
  background: #131313;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(72, 214, 76, 0.2);
    transform: translateY(-4px);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h3 {
      font-size: 1.25rem;
    }
  }
`;

export const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(72, 214, 76, 0.1);
  border-radius: 0.5rem;

  img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
  }
`;

export const CardTitle = styled.h3`
  color: var(--white);
  font-size: 1.5rem;
  font-weight: 500;
`;

export const CardValue = styled.a`
  color: #989898;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  text-decoration: none;
  transition: color 0.3s ease;
  word-break: break-word;

  &:hover {
    color: var(--emerald);
  }
`;
