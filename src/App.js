import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

console.log(process.env)
/////////////////////////////////////////////////////
  return (
   <React.Fragment>
     <h1>{Date()}</h1>

     <h1>{process.env.NODE_ENV}</h1>
   </React.Fragment>


  
  );
}

export default App;
