import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return ( 
    <div className="App">
      <header>
        <h1>Hello World</h1>
        {/* <Dinner></Dinner> */}
        <Dinner dishName="Chicken Karahi" sweetDish="Kheer" />

        <hr />

        <Dinner dishName="Tikka" sweetDish="Gajar Ka Halwa" />
        
        <hr />

      </header>
    </div>
    
  );
}

export default App;
