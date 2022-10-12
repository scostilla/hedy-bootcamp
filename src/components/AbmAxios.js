import React, { useState } from "react";
import axios from "axios";
import "./component.css";
import { getDefaultNormalizer } from "@testing-library/react";

/*
5- Tomar datos de la api https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false
Y renderizar el nombre, simbolo, precio actual, MCR, MC e imagen de todos los objetos utilizando AXIOS.
opcional: Utilizar CSS para desplegar los datos de una forma ordenada

¡Muy importante! Recordar que si hacemos un get de toda la api
vamos a recibir un objeto iterable, probablemente querramos
utilizar una funcion como map para renderizar correctamente
nuestro componente
*/

const AbmAxios = () => {
  const [getId, SetGetId] = useState("");
  const [getData, SetGetData] = useState("");
  const apiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";
  const id = "1";

  const GetData = async () => {
    await axios
      .get(apiUrl + id)
      .then((response) => {
        SetGetId(response.data.id);
        SetGetData(response.data);
        console.log(response);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Axios</h1>
      <br />
      GET Id: {getId}
      <br />
      GET Username:
      <br />
      <button onClick={() => GetData()}> GET POST</button>
      <br />
      {!getData ? null : (
        <table className="table">
          <thead>
            <tr>
              <td>nombre</td>
              <td>simbolo</td>
              <td>precio</td>
              <td>MCR</td>
              <td>MC</td>
              <td>imagen</td>
            </tr>
          </thead>

          {getData.map((data) => {
            return (
              <tbody>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.symbol}</td>
                  <td>{data.current_price}</td>
                  <td>{data.market_cap_rank}</td>
                  <td>{data.market_cap}</td>
                  <td>
                    <img src={data.image} className="thumbnail" />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      )}
    </div>
  );
};

export default AbmAxios;
