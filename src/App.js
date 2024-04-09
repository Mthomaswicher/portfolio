import logo from './assets/matt.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioContainer from './components/PortfolioContainer';
import HomeHero from './components/HomeHero';
import PastBlock from './components/PastBlock';
import ProjectContainer from './components/ProjectContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPreview from './components/ProjectPreview';

function App(content) {
  return (
    <PortfolioContainer
      content={
        <BrowserRouter>
          <Routes>
            <Route path="Home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      }
    />
  );
}

export default App;
