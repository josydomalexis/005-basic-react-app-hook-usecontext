import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';
import { CastleContext, ThemeContext } from './index.js';

function App() {
  const AppDetail = useContext(CastleContext)
  const Theme = useContext(ThemeContext)

  const [name, setName] = useState("josy")
  const [newName, setNewName] = useState(name)

  const handleChange = (e)=>{
    setNewName(e.target.value)
    console.log(newName)
  }

  const handleNewName = () =>{
    console.log(AppDetail)
    console.log(Theme)
  }

  useEffect(()=>{
    console.log("Hello")
  },[]) 
  
  // useEffect render the callback everytime, when there is no dependencies
  // useEffect render the callback only one time after page load, when there is empty array [] dependency
  // useEffect render the callback everytime, when given dependencies state change. example [newName, name]

  return (
    <div className="App">
      <h1></h1>
      <input onChange={(e)=>handleChange(e)} name='newName' type='text' placeholder='name' value={newName}/>
      <button onClick={()=>handleNewName()}>Change name</button>
    </div>
  );
}

export default App;
