import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

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
    <div className="container">
      
    </div>
  );
}

export default App;
