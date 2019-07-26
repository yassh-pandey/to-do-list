import React from 'react'

function DisplayListItems({list, deleteItem}) {
    const deleteLogoStyle = {
        width: "20px",
        height: "20px"
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
    const itemDelete = (e, key)=>{
        document.getElementById(key).classList.add("animate-on-delete")
        e.currentTarget.classList.add("fade-button-on-delete")
        deleteItem(key)
    }
   
    return (
        list.map((item)=>{
            return(
                    <div key={item.key} className="list-item animate-on-display">
                        <div id={item.key} className="list-item-body">
                            <div className="list-item-title">
                                {item.title}
                            </div>
                            <div className="list-item-content">
                               {item.description}
                            </div>  
                        </div>
                            <button className="remove-item-button" onClick={(e) => itemDelete(e, item.key)} onMouseOver={()=>mouseOverButton(item.key)} onMouseOut={()=>mouseOutButton(item.key)} >
                                    <img src={require("../icons/cross.svg")} alt="X" style={deleteLogoStyle}/>
                            </button>
                    </div>
            )
        })
    )
}

export default DisplayListItems
