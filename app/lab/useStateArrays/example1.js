import { useState } from "react";

let fruits = ["apple", "orange", "banana", "coconut"];

export default function ExampleOne() {
    const[item, setItem] = useState([])
    
    return(
        <>
        <button onClick={()=>{
            setItem(["adding"])
            console.log(item);
        }}>Add to Array</button>
        {item}
        </>
    );
}