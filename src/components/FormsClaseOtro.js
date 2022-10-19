import React, { useState } from "react";

const Actividad = () => {
  const [nombre, setNombre] = useState("");
  const [url, setUrl] = useState("");
  const [bandera, SetBandera] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    SetBandera(true);
  };

  return (
    <div>
      {!bandera && (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Nombre del Personaje:</label>
            <input type="text" onChange={(e) => setNombre(e.target.value)} />
            <br />
            <label>URL de la imagen</label>
            <input type="text" onChange={(e) => setUrl(e.target.value)} />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}

      {bandera && (
        <div>
          <h2>El nombre del personaje es: {nombre}</h2>
          <img width="1080" height="720" alt={nombre} src={url} />
        </div>
      )}
    </div>
  );
};

export default Actividad;