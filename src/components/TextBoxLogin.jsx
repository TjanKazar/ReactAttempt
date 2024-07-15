import React from 'react';
import styled, {css} from 'styled-components';

const TextBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em 0 auto;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
  color: #333;
  font-weight: bold;
`;

const TextBox = styled.input`
  padding: 0.5em;
  border: 2px solid #BF4F74;
  border-radius: 4px;
  background-color: white;
  font-size: 1em;
  width: 15rem;
`;


export default function TextBoxLogin({ text, type }) {
  return (
    <TextBoxWrapper>
      <Label htmlFor={text}>{text}</Label>
      <TextBox id={text} type={type}  />
    </TextBoxWrapper>
  );
}
