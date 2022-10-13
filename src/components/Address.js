import React, { Component } from "react";
import ReactDOM from "react-dom";
import './component.css'

const Address = (props) =>{
  let addressList = [
    {id: 1, street: "Belgrano", number:"1553"},
    {id: 2, street: "San Martin", number:"127"},
    {id: 3, street: "Jujuy", number:"342"}
  ]

  return(
    <div>
        <h1>{props.title}</h1>
        {addressList.map((address)=>{
          return(
            <div key={address.id}>
              <p><span className="title">Calle: </span>{address.street}<span className="title"> Número: </span>{address.number}</p>
            </div>
          )
        })}
    </div>
  )
}


export default Address;