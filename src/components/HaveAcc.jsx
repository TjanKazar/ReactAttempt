import React from 'react'
import {Link} from 'react-router-dom'

export default function HaveAcc() {
  return (
    <div>
        <p>Already have an account ? </p>
        <Link to ="/Login"><p>Log In</p></Link>
    </div>
  )};
