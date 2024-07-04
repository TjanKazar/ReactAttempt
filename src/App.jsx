import React from 'react'
import Home from './Home'
import Start from './components/Start';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Button1 from "./components/Button1"
import Mainpage from "./components/Mainpage"
import Navbar from './components/Navbar';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Mainpage><Home /></Mainpage>} />
        <Route path="/" element={<Mainpage><Start/></Mainpage>} />
      </Routes>
    </div>
  )
}

