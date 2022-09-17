import React, { Component } from "react";
import ReactDOM from "react-dom";
import './component.css'

const NewComponent = (props) =>{
  let users = [
    {id: 1, name: "juan", apellido:"perez"},
    {id: 2, name: "carlos", apellido:"calvo"},
    {id: 3, name: "hector", apellido:"alterio"}
  ]

  return(
    <div>
        <h1>{props.title}</h1>
        {users.map((user)=>{
          return(
            <div key={user.id}>
              <p><span className="title">Apellido: </span>{user.apellido}<span className="title"> - Nombre : </span>{user.name}</p>
            </div>
          )
        })}
    </div>
  )
}


export default NewComponent;