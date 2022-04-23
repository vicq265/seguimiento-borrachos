import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBeer, faIdCard, faPhone, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Rescatado = ({borracho, setBorracho , eliminarBorracho}) => {

  const {nombre, cedula, representante, licor, telefono, id} = borracho;

  const handleEliminar = () => {
    const repuesta = confirm('Deseas llevarte este borracho');
    if(repuesta) {
      eliminarBorracho(id)
    }
  }

  return (
    <li className="bg-indigo-900 mx-5 p-3 rounded-md mb-5 shadow-md">
      <div className="md:flex items-center gap-3 mb-2">
        <h2 className="font-bold "><FontAwesomeIcon icon={faUser} /> Nombre del Borracho: </h2>
        <span className="font-medium text-lg md:text-base "> {nombre} </span>
      </div>

      <div className="md:flex items-center gap-3 mb-2">
        <h2 className="font-bold "><FontAwesomeIcon icon={faIdCard} /> Cedula del Borracho: </h2>
        <span className="font-medium text-lg md:text-base "> {cedula} </span>
      </div>

      <div className="md:flex items-center gap-3 mb-2">
        <h2 className="font-bold "><FontAwesomeIcon icon={faUserTie} /> Representate del Borracho: </h2>
        <span className="font-medium text-lg md:text-base "> {representante} </span>
      </div>

      <div className="md:flex items-center gap-3 mb-2">
        <h2 className="font-bold "><FontAwesomeIcon icon={faPhone} /> Telefono del Representate : </h2>
        <span className="font-medium text-lg md:text-base "> {telefono} </span>
      </div>

      <div className="md:flex items-center gap-3 mb-2">
        <h2 className="font-bold "><FontAwesomeIcon icon={faBeer} /> Ingresado por : </h2>
        <span className="font-medium text-lg md:text-base  capitalize"> {licor} </span>
      </div>

      <div className="flex flex-wrap gap-2 justify-center md:justify-between">
        <button className="transition ease-in-out delay-150 bg-orange-400 
          hover:-translate-y-1 hover:scale-100 hover:bg-orange-500  duration-300 ...
          p-3 uppercase
          font-bold 
          rounded-md"
          onClick={() => setBorracho(borracho)} 
        >
          Editar</button>
        <button className="
          transition ease-in-out delay-150 bg-red-500 
          hover:-translate-y-1 hover:scale-100 hover:bg-red-600  duration-300 ...
          p-3 uppercase
          font-bold 
          rounded-md"
          onClick={handleEliminar}
        >
          Eliminar</button>
      </div>

    </li>
  )
}

export default Rescatado
