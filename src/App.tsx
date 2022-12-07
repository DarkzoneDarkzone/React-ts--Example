import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';

function App() {
  const allUser = [
    {name: 'darkzone'},
    {name: 'darkzone'},
    {name: 'darkzone'},
    {name: 'darkzone'},
    {name: 'darkzone'},
    {name: 'darkzone'},
    {name: 'darkzone'},
    {name: 'darkzone'},
    {name: 'darkzone'},
  ]
  return (
    <div className="App">
      <Greet data={allUser}/>
    </div>
  );
}

export default App;
