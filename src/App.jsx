import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Float from './components/Float';

function App() {
  return (
    <>
      <NavBar />
      <Float />
      <Hero />
    </>
  );
}

export default App;
