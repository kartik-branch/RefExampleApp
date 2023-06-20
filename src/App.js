import React, {useEffect , useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import './Home.css';
import Home from './Home';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Cta1Page = () => {
  
  const renderCards = () => {
    const cardData = [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
    ];

    return cardData.map((card, index) => (
      <div key={index} className="card">
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <h3>Card {card.number}</h3>
        <div className="cta-buttons">
          <button>CTA Button 1</button>
          <button>Go to the App</button>
        </div>
      </div>
    ));
  };


  return (
    <div className="CTA1Page">
      <Link to="/RefExampleApp/">Home Page</Link>
      <h2>Select your credit cards</h2>        
      <div className="card-container">
        {renderCards()}
      </div>
    </div>
  );
};


function App(){

  return (
    <Router>
    <div className="App">
      <h1>Branch Referrer Example App</h1>
      <Link to="/RefExampleApp/cta1">Credit Page</Link>
      
        <Routes>
          <Route path="/RefExampleApp/" element={<Home />} />
          <Route path="/RefExampleApp/cta1" element={<Cta1Page />} />
        </Routes>
    </div></Router>
  );
}

export default App;