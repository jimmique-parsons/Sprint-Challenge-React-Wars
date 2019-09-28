import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import People from './components/People.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [ people, setPeople ] = useState(null);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get(
        "https://swapi.co/api/people/"
        )
      .then( res => { 
      
       setPeople(res.data.results);
      })
      .catch( err => console.log(err));
  }, []);

  if(!people) return (
    <div className="App">
      <h1 classNAme="Header">React Wars</h1>
    </div>
  )

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
        {people.map( people => <People info={people} />)}
    </div>
  );
}

export default App;
