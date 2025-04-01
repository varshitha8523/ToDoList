import  { useState } from "react";
export default function InputContainer({addNewTodo}) {
    const[inputValue,setInputValue]=useState("")
    return (
       <div>
        <input placeholder="add an item"
        value={inputValue}
        onChange={(e)=>setInputValue(e.currentTarget.value)}
        />
        <button
        onClick={()=>{
            addNewTodo(inputValue)
            setInputValue("")

        }}
        >
            Add
        </button>
       </div>)
}