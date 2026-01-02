'use client';
import { styled } from 'styled-components';

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Label = styled.label`
  color: var(--white);
  font-size: 1rem;
  font-weight: 500;

  span {
    color: var(--emerald);
  }
`;

export const Textarea = styled.textarea<{ hasError?: boolean }>`
  padding: 1rem 1.5rem;
  background: #131313;
  border: 1px solid
    ${(props) => (props.hasError ? '#ff4d4d' : 'rgba(255, 255, 255, 0.04)')};
  border-radius: 0.75rem;
  color: var(--white);
  font-size: 1rem;
  font-family: 'SF Pro Display', sans-serif;
  outline: none;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 150px;

  &:focus {
    border-color: var(--emerald);
  }

  &::placeholder {
    color: #989898;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.25rem;
  }
`;

export const ErrorText = styled.span`
  color: #ff4d4d;
  font-size: 0.875rem;
`;
