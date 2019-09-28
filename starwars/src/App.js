import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import People from './components/People.js'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1% 5%;
  justify-content: center;
`;

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

  const Header = styled.h1`
  font-family: 'Exo 2', sans-serif;
  text-align: center;
  color: rgba(234, 210, 1, 0.87);
  text-shadow: 2px 2px 5px #000;
  `;

  if(!people) return (
    <div className="App">
      <Header className="Header">React Wars</Header>
    </div>
  )

  return (
    <div className="App">
      <Header className="Header">React Wars</Header>
      <Wrapper>
        {people.map( people => <People info={people} />)}
      </Wrapper>  
    </div>
  );
}

export default App;
