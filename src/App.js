import React from 'react';
import './App.css';
import TVShows from './components/TVShows';
import Home from './components/Home';
import Movies from './components/Movies';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout/>
        <Home />
        <Movies />
        <TVShows />
      
    </div>
  );
}

export default App;
