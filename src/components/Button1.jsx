import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components'

export default function Button1() {
  const Button = styled.button`
  background: transparent;
  border-radius: 15px;
  border: 2px solid #BF4F74;  
  color: #BF4F74;
  margin: 0.5em 1em;
  padding: 0.75em 2em;
  cursor: pointer;

  ${props => props.$primary && css`
    background: #BF4F74;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`
  const [count, setCount] = useState(100);
  
    const counterFunc = () => {
      setCount(count + 1);
    };

return(

  <Container>
    <p>{count}</p>
    <Button onClick={counterFunc} >Press me to see a change</Button>
    <Button $primary>Press me because you can</Button>
  </Container>

)};
