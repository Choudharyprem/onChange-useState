import React,{useState} from "react";
import "./style.css";

export default function App() {
  let [input,setInput]=useState('')
  function manageInp(e){
   let {id,value}=e.target;
   console.log(id,value)
   setInput(value)
  }
  return (
   <>
   <input type="text"placeholder="enter the value" id="tuesday" onChange={manageInp}/>
   <div>{input}</div>
   </>
  );
}
