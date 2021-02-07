import React, {useState} from 'react'

const initialState = {
    "title": "",
    "description": "",
};
function AddItem({addItem}) {
    const [item, setItem] = useState(initialState)
    const addLogoStyle = {
        width: "40px",
        height: "40px"
    }
    const updateList = (e)=>{
        if(item.description.length !== 0){
            addItem(item)
            document.getElementById("item-description").placeholder = "Enter the note description..."
            document.getElementById("item-description").value = ""
            document.getElementById("item-title").value = ""
            setItem(initialState)
        }
        else{
            document.getElementById("item-description").classList.add("warning")
            document.getElementById("item-description").placeholder = "Please enter a note description !"
        }
    }
    const clickOnDescription = ()=>{
        document.getElementById("item-description").classList.remove("warning")
    }
    const handleItemDescriptionChange = (e)=>{
        const description =  e?.target?.value;
        setItem(cs=>({
            ...cs,
            "description": description
        }));
    }
    const handleItemTitleChange = (e)=>{
        const title = e?.target?.value;
        setItem(cs=>({
            ...cs,
            "title": title,
        }));
    }
    return (
        <div className="addItem-form">
            <input placeholder="note title" type="text" id="item-title" onChange={handleItemTitleChange}/>
            <textarea placeholder="Enter the note description..." type="text" id="item-description" className="description" onChange={handleItemDescriptionChange} onClick={clickOnDescription}></textarea>
            <button className="addItem-form-button" onClick={updateList}>
                <img src={require("../icons/plus.svg")} alt="+" style={addLogoStyle}/>
            </button>
        </div>
    )
}

export default AddItem
