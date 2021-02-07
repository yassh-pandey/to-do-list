import React, {useState, useEffect} from 'react';
import './App.css';
import AddItem from "./components/AddItem"
import DisplayListItems from './components/DisplayListItems';
import firestore from "./firestore";
import firebase from "firebase";
import { v4 as uuidv4 } from 'uuid';

export const todosCollectionName = "GlobalList";

function App() {
  
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    firestore.collection(todosCollectionName)
    .orderBy("timeStamp", "desc")
    .get()
    .then(querySnapshot=>{
      const fetchedData = querySnapshot?.docs?.map(el=>el?.data());
      setList(fetchedData);
      setLoading(false);
    })
    .catch(err=>{
      console.error(err);
    })
  }, [setList])

  const addItem = (item)=>{
      const newDocId = uuidv4();
      item["key"] = newDocId;
      setList([...list, item]);
      firestore.collection(todosCollectionName)
      .doc(newDocId)
      .set({
        title: item?.title,
        description: item?.description,
        key: newDocId,
        timeStamp: firebase.firestore.Timestamp.now()
      })
      .catch(err =>{
        console.error(err);
      })
  }
  const deleteItem = (key)=>{
    let newState = list.filter((item)=>{
      return (item.key !== key)
    })
    firestore.collection(todosCollectionName)
    .doc(key)
    .delete()
    .catch(err=>{
      console.error(err)
    })
    setTimeout(()=>{
      setList(newState)
    },1000)
  }

  return (
    <div className="App">
      <header></header>
      <AddItem addItem={addItem}/>
      {
        loading
        ?
        <h2 style={{display: "flex", justifyContent: "center", margin:"5rem"}}>Loading data...</h2>
        :
        <DisplayListItems list={list} setList={setList} deleteItem={deleteItem}/>
      }
    </div>
  );
}

export default App;
