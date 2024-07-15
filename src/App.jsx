import React from 'react'
import Home from './Home'
import LoginPage from './components/LoginPage';
import Start from './components/Start';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Mainpage from "./components/Mainpage"
import Registration from './components/Registration';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/LoginPage" element={<Mainpage><LoginPage/></Mainpage>}></Route>
        <Route path="/Home" element={<Mainpage><Home /></Mainpage>} />
        <Route path="/" element={<Mainpage><Start /></Mainpage>} />
        <Route path="/Registration" element={<Mainpage><Registration /></Mainpage>} />

      </Routes>
    </div>
  )}