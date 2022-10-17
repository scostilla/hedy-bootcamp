import React, { useEffect, useState } from "react";
import "./component.css";

const EventParagraph = () => {
  const [getNewColor, setNewColor] = useState("black-paragraph");
  const [getParagraph, setParagraph] = useState();
  const [getTitle, setTitle] = useState("");
  const[getNewAlign,setNewAlign] = useState("center");


  const ChangeTextAlign = () => {
    switch (getNewAlign) {
      case "rigth":
        setNewAlign("left");
        break;
      case "center":
        setNewAlign("rigth");
        break;
      case "left":
        setNewAlign("center");
        break;
      default:
        setNewAlign("center");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", detectKeydown, true);
  }, []);

  const detectKeydown = (event) => {
    switch (event.key){
        case "r":
            setNewColor("red-paragraph");
        console.log("caso red-paragraph");
        break;
        case "a":
            setNewColor("blue-paragraph");
        console.log("caso blue-paragraph");
        break;
        case "v":
            setNewColor("green-paragraph");
        console.log("caso green-paragraph");
        break;
        default:
        setNewColor("black-paragraph");

    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const instructions = document.getElementById("instructions");
    instructions.innerHTML = 'Para cambiar el color presione R(rojo) V(Verde), o A(azul)';
    setTitle("Parrafo generado");
    setParagraph(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor orci vitae posuere malesuada. Donec sem nisl, volutpat non arcu non, imperdiet varius arcu. Etiam finibus felis velit, quis finibus nisl aliquet eu. Quisque lacinia nibh eget dui rhoncus imperdiet. Morbi gravida tempus accumsan. Praesent malesuada mauris neque, quis convallis lectus placerat sed. Pellentesque non quam viverra, consectetur metus non, rutrum elit. Mauris rutrum nulla eu odio interdum euismod. Mauris congue mattis est, eget molestie lectus vestibulum sit amet. Donec ac mattis magna. Duis mollis vitae nulla in efficitur. Integer imperdiet porta ante eget elementum. Nam maximus sem rhoncus aliquam convallis."
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="Generar Parrafo" onSubmit={handleSubmit} />
      </form>
      <br />
      <h1 id='title' className={getNewAlign} onClick={() => ChangeTextAlign()}>{getTitle}</h1>
      <h6 id='instructions'></h6>
      <p id="paragraph" className={getNewColor}>
        {getParagraph}
      </p>
    </div>
  );
};

export default EventParagraph;

/*
1-Hacer un componente que renderice un titulo y un parrafo(Lorem ipsum)
2-Al hacer click en el titulo se tiene que poder actualizar 
el posicionamiento del mismo (izquierda,centrado,derecha). 
3- Cuando el usuario toque una tecla especifica el color 
y la fuente del parrafo tienen que actualizarse 
(Tiene que haber 3 presets como minimo).
*/
