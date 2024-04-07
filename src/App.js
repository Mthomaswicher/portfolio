import logo from './assets/matt.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioContainer from './components/PortfolioContainer';
import HomeHero from './components/HomeHero';
import PastBlock from './components/PastBlock';
import ProjectContainer from './components/ProjectContainer';

function App(content) {
  return (
    <PortfolioContainer
      content={
        <>
          <HomeHero />
          <PastBlock />
          <ProjectContainer />
        </>
      }
    />
  );
}

export default App;
