import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import swbaseball from './img/swbaseball.jpg';
import './App.css';
import styled from 'styled-components';

const BigBoy = styled.div`
  margin: 5%;
`;

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);

  const strike = () => {
    if(strikes === 2){
      setStrikes(0);
      setBalls(0);
    }else{
      setStrikes(strikes + 1);
    }
  };

  const ball = () => {
    if(balls === 3){
      setBalls(0);
      setStrikes(0);
    }else{
      setBalls(balls + 1);
    }
  };

  const foul = () => {
    if(strikes === 2){
      setStrikes(2);
    }else{
      setStrikes(strikes + 1);
    }
  };

  const hit = () => {
    setStrikes(0);
    setBalls(0);
  };

  return (
    <BigBoy className="container">
      <img src={swbaseball} alt="Star Wars baseball" data-testid="sw-img" />
      <Display strikes={strikes} balls={balls} />
      <Dashboard ball={ball} strike={strike} foul={foul} hit={hit} />
    </BigBoy>
  );
}

export default App;
