import logo from './logo.svg';
import './App.css';
import React from 'react';
import List from './countries';
function App() {
  const europ = ['france', 'spain', 'poland'];
  return (
    <div>
      <h1>counties in europ</h1>
      <List europ={europ} />
    </div>
  );
}

export default App;
