import React from 'react'
import './App.css';
import Content from './components/Content/Content';
import Filter from './components/Filter/Filter';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Content />
    </div>
  );
}

export default App;
