import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: solid 1px salmon;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  background-color: #2b2929;
  margin: 1rem auto; 
  margin-top: 5rem ;
  align-items: center;
  max-width: 400px; 
  width: 100%; 
`;

export default function CardWrapper({ children }) {
  return <Card>{children}</Card>;
}
