import {useParams } from "react-router-dom"

export const ClassComponent = () => {

    const { newAddress } = useParams();
    return <h2>Nueva Direccion: {newAddress}</h2>

}