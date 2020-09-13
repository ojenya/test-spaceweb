import React,{useState,useEffect} from 'react';
import './App.scss';

import {Home}  from './pages'

function App() {

  // Main
  // --> <Nav>
  // --> <Content>
  // Footer

  const [list,setList] = useState()

useEffect (()=>{
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => setList(json))
},[])


  return (
   <Home list={list}/>
  );
}

export default App;
