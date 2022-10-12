import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Component from "./Component";
import Address from "./Address";
import { ClassComponent } from "./ClassComponent";

const Home = () => {
  const [newAddress, setNewAddress] = useState("");

  return (
    <Router>
      <div className="nest-header">
        <Link to={"./Component"}>Listado de Nombres y Apellidos</Link>
        <br />
        <Link to={"./Address"}>Direcciones</Link>
        <br />
        {/* <input onChange={function(e) {setNewAddress("/ClassComponent/:"+ e.target.value);
    console.log(newAddress)}}/> */}

        <Link to={"./ClassComponent"}>Nueva Direccion</Link>

        <Routes>
          <Route path="/Component" element={<Component />} />
          <Route path="/Address" element={<Address />} />
          <Route path="/ClassComponent" element={<ClassComponent />} />
          <Route
            path={"/ClassComponent/:newAddress"}
            element={<ClassComponent />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
