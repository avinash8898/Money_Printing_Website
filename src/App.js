import React from 'react';
import ScrollingImage from './components/ScrollingImage';
import './App.css';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Basic Pay ($16/hr)</h1>
      <ScrollingImage speed={500} /> 
      <br/>
      <h1>Teacher ($24/hr)</h1>
      <ScrollingImage speed={50} /> 
      <br/>
      <h1>Software Engineer ($40/hr)</h1>
      <ScrollingImage speed={20} /> 
      <ScrollingImage speed={20} />
      <br/>
      <h1>Doctor ($90/hr)</h1>
      <ScrollingImage speed={6} /> 
      <ScrollingImage speed={6} /> 
      <ScrollingImage speed={6} /> 
      <br/>
      <h1>CEO ($500/hr)</h1>
      <ScrollingImage speed={2} /> 
      <ScrollingImage speed={2} /> 
      <ScrollingImage speed={2} /> 
      <ScrollingImage speed={2} /> 
      <br/>
      
    </div>
    
  );
}

export default App;
