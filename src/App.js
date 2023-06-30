import React from 'react';
import './App.css';
import AppRouter from './AppRouter';
import TVShows from './components/TVShows';
import Home from './components/Home';
import Movies from './components/Movies';


function App() {
  return (
    <div className="App">
      <Home/>
      <Movies/>
      <TVShows/>
      <AppRouter />
    </div>
  );
}

export default App;
