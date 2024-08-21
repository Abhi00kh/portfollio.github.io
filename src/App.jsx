import { useState } from 'react';
import 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Project from './components/Project';

function App() {
  return (
    <>
  <Home />
  <Hero />
  <Skills />
  <Project />
  
  </>
  );
}

export default App;