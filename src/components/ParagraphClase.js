/*
1-Hacer un componente que renderice un titulo y un parrafo(Lorem ipsum)
2-Al hacer click en el titulo se tiene que poder actualizar 
el posicionamiento del mismo (izquierda,centrado,derecha). 
3- Cuando el usuario toque una tecla especifica el color 
y la fuente del parrafo tienen que actualizarse 
(Tiene que haber 3 presets como minimo).
*/

import React, { useEffect, useState } from "react";
import "./component.css";
const Eventos = () => {
  const [claseColor, setClaseColor] = useState("titulo-rojo");
  const [pais, setPais] = useState('')
  const [nombre, setNombre] = useState('')
  const [texto, setTexto] = useState('')

  const CambiarColorTitulo = () => {
    switch (claseColor) {
      case "titulo-rojo":
        setClaseColor("titulo-verde");
        break;
      case "titulo-verde":
        setClaseColor("titulo-azul");
        break;
      case "titulo-azul":
        setClaseColor("titulo-rojo");
        break;
      default:
        setClaseColor("titulo-rojo");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const blog = {texto}

        alert(blog.texto)

  }

  useEffect(()=> {
    document.addEventListener('keydown',detectKeydown,true)
  }, [])

  const detectKeydown = (event) => {
    console.log("Clicked Key: ", event.key)

  if(event.key === " "){
    console.log("Key Clicked: Spacebar")
  }
    }


  return (

      <div>
        <h1 className={claseColor} onClick={() => CambiarColorTitulo()}>Esto es una prueba</h1>

        <br/>
        <form>
        <label>
          *Pais:
          <input required type="text" name="pais" value={pais} onChange={(e) => setPais(e.target.value)} />
        </label>
        <br/>
        <label>
          *Nombre y Apellido:
          <input required type="text" name="nombre-apellido" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br/>
      </form>

        <br/>
        <h2>{pais}</h2>
        <h2>{nombre}</h2>

        <br/>
        <br/>

        <form onSubmit={handleSubmit}>
        <input name="texto" value={texto} onChange={(e) => setTexto(e.target.value)}/>
        <input type="submit" value="Submit"/>
        </form>

      </div>

  );
};

export default Eventos;