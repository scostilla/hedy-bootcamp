import React, { useState } from "react";
import '../component.css'

const Cars =() => {
    const[marca,setMarca]=useState("Mitsubishi");
    const [count,setCount] = useState(0);
    function RandomNumber(){
            return Math.floor(Math.random() * 10 + 1);
        }
    let value = RandomNumber();
    
    return(
        <div >
            <div className="title">
                <h1 onClick={() => setMarca("Subaru")}>{marca}</h1>
            </div>
            <p>valor a sumar: {value}</p>
            <p>valor: {count}</p>
            <button onClick={() => setCount(count + value)}>Sumar valor alatorio</button>
        </div>
        )
}

export default Cars