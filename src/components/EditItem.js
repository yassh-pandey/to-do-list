import React, {useState} from 'react'
import firestore from "../firestore";
import {todosCollectionName} from "../App";

function EditItem({item, setEditable, list, setList}) {
    const [state, setState] = useState({
        title: item.title,
        description: item.description,
    })
    const handleInputChange = (event)=>{
        event.persist();
        setState(cs=>({
            ...cs,
            [event.target.getAttribute("name")]: event.target.value
        }))
    }
    const saveClick = ()=>{
        firestore.collection(todosCollectionName)
        .doc(item.key)
        .set(state, { merge: true })
        .catch(err =>{
            console.error(err);
        });
        let stagingList = [...list]; 
        stagingList.forEach((listItem, index)=>{
            if(listItem.key===item.key){
                stagingList[index] = {
                    ...stagingList[index],
                    ...state
                }
            }
        })
        setList(stagingList);
        setEditable(false);
    }

    const discardClick = ()=>{
        setEditable(false);
    }
    return (
        <div key={item.key} className="list-item">
            <div id={item.key} className="list-item-body" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <input 
                    className="list-item-title edit" 
                    value={state.title} placeholder="Enter the new title"
                    style={{width: "max-content"}} 
                    onChange={handleInputChange}   
                    name="title"
                />
                <input 
                    className="list-item-content edit" 
                    value={state.description} 
                    placeholder="Enter new description"
                    style={{width: "max-content"}} 
                    onChange={handleInputChange}    
                    name="description"
                />
                <div>
                    <button onClick={saveClick} className="edit-mode-button">Save Changes</button>
                    <button onClick={discardClick} className="edit-mode-button">Discard</button>
                </div>
            </div>
        </div>
    )
}

export default EditItem
