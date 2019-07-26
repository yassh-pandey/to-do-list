import React, {useState} from 'react';
import './App.css';
import AddItem from "./components/AddItem"
import DisplayListItems from './components/DisplayListItems';

function App() {
  
  const [list, setList] = useState([])

  const addItem = (item)=>{
      setList([...list, item])
  }
  const deleteItem = (key)=>{
    let newState = list.filter((item)=>{
      return (item.key !== key)
    })
    setTimeout(()=>{
      setList(newState)
    },1000)
  }

  return (
    <div className="App">
      <header></header>
      <AddItem addItem={addItem}/>
      <DisplayListItems list={list} deleteItem={deleteItem}/>
    </div>
  );
}

export default App;
