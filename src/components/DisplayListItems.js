import React from 'react'
import ToDoItem from './ToDoItem'


function DisplayListItems({list, deleteItem, setList}) {
    return (
        list.map((item)=>{
            return(
              <ToDoItem 
                item={item} 
                deleteItem={deleteItem}
                setList={setList}
                list={list}
            />     
            )
        })
    )
}

export default DisplayListItems
