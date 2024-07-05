import SidePage1 from './components/RotatingTextContent'
import styled from 'styled-components';


export default function HomePage() {
  const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;
  return (
    <div>
    <main>   
        <Title><SidePage1/> </Title>

         
       

    </main>

    </div>
  )
}
