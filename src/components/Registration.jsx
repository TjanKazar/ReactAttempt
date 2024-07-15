import React from 'react'
import styled from 'styled-components'
import TextBoxLogin from './TextBoxLogin'
import CardWrapper from './CardWrapper'
import ButtonLogin from './ButtonLogin'
import HaveAcc from './HaveAcc'


export default function Registration({text}) {

  return (
<div>
    <CardWrapper>
        <h2>Registration</h2>
        <br></br>
        <TextBoxLogin text='First Name' type='text'/>
        <TextBoxLogin text='Last Name' type='text'/>
        <TextBoxLogin text='Email' type='email'/>
        <TextBoxLogin text='Date Of Birth' type='date'/>
        <TextBoxLogin text='Password' type='password'/>
        <TextBoxLogin text='Confirm Passowrd' type='password'/>
        <br></br>
        <ButtonLogin text='Register' $primary/>
    </CardWrapper>

      <HaveAcc></HaveAcc>
    </div>
  )
}
