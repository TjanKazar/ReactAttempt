import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function NoAcc() {

  return (
    <div>
        dont have an accout ?
         <Link to ="/Registration"><p>Reigister</p></Link>
    </div>
  )
}
