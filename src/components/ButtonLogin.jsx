import React from 'react'
import styled, {css} from 'styled-components'
export default function ButtonLogin({text, $primary}) {

    const Button = styled.button`
    background: transparent;
    border-radius: 15px;
    border: 2px solid #BF4F74;  
    color: #BF4F74;
    margin: 0.2em;
    padding: 0.75em 1.5em;
    cursor: pointer;
  
    ${props => props.$primary && css`
      background: #BF4F74;
      color: white;
    `}
  `;
  
  const Container = styled.div`
    text-align: center;
  `

return (
  <Container>
    <Button $primary={$primary}>{text}</Button>
  </Container>
)};
