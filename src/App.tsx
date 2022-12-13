import React, { useState } from 'react';
import './App.css';
import { CardList } from './components/CardList';
import { SearchBox } from './components/SearchBox';
import { robots } from './initial/robots';

function App() {

  const [searchInput, changeSearchInput] = useState('');

  const filteredRobots =  robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchInput.toLowerCase());
  })
  
  return (  
    <div className="App">
      <SearchBox searchHandler={changeSearchInput}/>
      <CardList robots={filteredRobots}/>
    </div>
  );
}

export default App;
