import React, {useState} from 'react'

function AddItem({addItem}) {
    const [item, setItem] = useState({
        "title": undefined,
        "description": undefined,
        "key": 0
    })
    const addLogoStyle = {
        width: "40px",
        height: "40px"
    }
    const updateList = (e)=>{
        if(item.description !== undefined){
            addItem(item)
            document.getElementById("item-description").placeholder = "Enter the note description..."
            document.getElementById("item-description").value = ""
            document.getElementById("item-title").value = ""
            setItem({"title": undefined, description: undefined, "key": (item.key + 1)})
        }
        else{
            document.getElementById("item-description").classList.add("warning")
            document.getElementById("item-description").placeholder = "Please enter a note description !"
        }
    }
    const clickOnDescription = ()=>{
        document.getElementById("item-description").classList.remove("warning")
    }
    return (
        <div className="addItem-form">
            <input placeholder="note title" type="text" id="item-title" onChange={ (e) => setItem( {"title": e.target.value, "description": item.description, "key": item.key} ) }/>
            <textarea placeholder="Enter the note description..." type="text" id="item-description" class="description" onChange={ (e) => setItem( {"title": item.title, "description": e.target.value, "key": item.key} ) } onClick={clickOnDescription}></textarea>
            <button className="addItem-form-button" onClick={updateList}>
                <img src={require("../icons/plus.svg")} alt="+" style={addLogoStyle}/>
            </button>
        </div>
    )
}

export default AddItem
