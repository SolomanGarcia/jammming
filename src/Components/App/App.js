import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import  SearchBar  from '../SearchBar/SearchBar';

function App() {
render() 

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults />
          <PlayList />
        </div>
      </div>
    </div>
  );
}

export default App;
