import React from 'react'
import styled, { keyframes } from 'styled-components';
import RotatingTextContent from './RotatingTextContent';

export default function RotatingText({textToRotate}) {
  const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 15s linear infinite;
  padding: 2rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;
  return (
    <Rotate><RotatingTextContent/></Rotate>
  )
}
