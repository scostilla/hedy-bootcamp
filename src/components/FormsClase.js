import React, { useState } from "react";

const Forms = () => {
  const [flavor, setFlavor] = useState("grapefruit");
  const [color,setColor] = useState("");
  const [pais,setPais] = useState("");

  const handleChange = (event) => {
    setFlavor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your favorite flavor is " + flavor + ", your favorite color is " + color + " You live in " + pais);
  };

  return (
    <div>
      <h1>Formulario de ejemplo REACT:</h1>

      <form onSubmit={handleSubmit} >
        <label>
          Pick your favorite flavor:
          <select onChange={handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br/>
        <br/>
        <label>
            Tell me what is your favorite color:
            <textarea required onChange={(event)=> setColor(event.target.value)}></textarea>
        </label>
        <br/>
        <label>
          *Pais:
          <input required type="text" name="pais" value={pais}  onChange={(e) => setPais(e.target.value)} />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Forms;