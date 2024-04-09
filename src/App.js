import logo from './assets/matt.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioContainer from './components/PortfolioContainer';
import HomeHero from './components/HomeHero';
import PastBlock from './components/PastBlock';
import ProjectContainer from './components/ProjectContainer';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectPreview from './components/ProjectPreview';

function App(content) {
  return (
    <PortfolioContainer
      content={
        <HashRouter>
          <Routes>
            <Route path="home" element={<Home />} />
          </Routes>
        </HashRouter>
      }
    />
  );
}

export default App;
