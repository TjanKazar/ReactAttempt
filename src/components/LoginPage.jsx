import React from 'react';
import ButtonLogin from './ButtonLogin';
import TextBoxLogin from './TextBoxLogin';
import CardWrapper from './CardWrapper';
import NoAcc from './NoAcc';

export default function LoginPage() {
  return (
    <div className='Container'>
      <h2>Login</h2>
          <CardWrapper>
          <form className='LoginForm'>
            <TextBoxLogin text='Username'/>
            <TextBoxLogin text='Password' type='password'/>
            <br />
            <ButtonLogin text='Login'/>
          </form>
    </CardWrapper>
    <NoAcc></NoAcc>
        </div>

  );
}
