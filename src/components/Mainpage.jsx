import React from 'react'
import Navbar from './Navbar'
export default function Mainpage({children}) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      
    </div>
  )
}

