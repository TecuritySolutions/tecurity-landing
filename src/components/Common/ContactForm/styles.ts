'use client';
import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 6.25rem;
  background: var(--green);
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: var(--emerald);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
  }
`;

export const SuccessMessage = styled.p`
  color: var(--emerald);
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: #ff4d4d;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
`;
