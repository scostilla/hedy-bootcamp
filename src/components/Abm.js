import React, { useState } from "react";
import "./component.css";

const Abm = (props) => {
    const [abmClass, SetAbmClass] = useState('abm-container-red');

    if (!props.bandera) return null;

    const ChangeColor = () => {

        if (abmClass === 'abm-container-red') {
            SetAbmClass('abm-container-yellow')
            console.log(abmClass)
        }
        else {
            SetAbmClass('abm-container-red');
            console.log(abmClass)
        }

    }

    return (
        <div className="app-abm">
            <div>
                <h1 className="abm-title">Super ABM</h1>
                <br></br>
                <div className={abmClass}>
                    <label>ID:</label>
                    <input type="text"></input>
                    <label>Nombre</label>
                    <input type="text"></input>
                    <label>Apellido</label>
                    <input type="text"></input>
                    <button type="submit">Submit me</button>
                </div>
                <button onClick={() => ChangeColor()}>Change my ABM background</button>
            </div>
        </div>
    );
};

export default Abm;