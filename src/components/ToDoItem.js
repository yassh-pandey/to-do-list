import React, {useState} from 'react'
import EditItem from './EditItem'

const deleteLogoStyle = {
    width: "20px",
    height: "20px"
}
const editLogoStyle = {
    width: "20px",
    height: "20px",
    top: "1rem",
    left: "1rem",
    cursor: "pointer",
    position: "absolute"
}
const mouseOverButton = (key)=>{
    if(document.getElementById(key)){
        document.getElementById(key).classList.add("hover")
    }
}
const mouseOutButton = (key)=>{
    if(document.getElementById(key)){
        document.getElementById(key).classList.remove("hover")
    }
}
function ToDoItem({deleteItem, item, setList, list}) {

    const [editable, setEditable] = useState(false);

    const itemDelete = (e, key)=>{
        document.getElementById(key).classList.add("animate-on-delete")
        e.currentTarget.classList.add("fade-button-on-delete")
        deleteItem(key)
    }

    const editClick = (e, key)=>{
        setEditable(true);
    }

    return (
        editable
        ?
        <EditItem 
            item={item} 
            setEditable={setEditable} 
            setList={setList}
            list={list}
        />
        :
        <div key={item.key} className="list-item animate-on-display">
            <div id={item.key} className="list-item-body">
                <div className="list-item-title">
                    {item.title}
                </div>
                <div className="list-item-content">
                {item.description}
                </div>  
                <img src={require("../icons/edit.svg")} onClick={(e) => editClick(e, item?.key)} alt="Edit" style={editLogoStyle}/>
            </div>
            <button className="remove-item-button" 
                onClick={(e) => itemDelete(e, item?.key)} 
                onMouseOver={()=>mouseOverButton(item.key)} 
                onMouseOut={()=>mouseOutButton(item.key)} >
                <img src={require("../icons/cross.svg")} alt="X" style={deleteLogoStyle}/>
            </button>
        </div>
    )
}

export default ToDoItem
