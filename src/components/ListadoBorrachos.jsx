import React from "react";
import Rescatado from "./Rescatado";

import "../styles/app.css";

const ListadoBorrachos = ({ borrachos, setBorracho, eliminarBorracho }) => {
  return (
    <div className="md:w-3/5 text-center bg-purple-800 rounded-md md:rounded-l-none md:rounded-r-md text-white md:h-screen md:overflow-y-auto scrollModi">
      {borrachos.length ? (
        <>
          <div className="heading my-4 z-10 relative">
            <h2 className="text-3xl font-bold">Listado Borrachos</h2>
            <span className="block font-semibold">
              Lista de los borrachos ingresados
            </span>
          </div>

          <div className="py-2">
            <ul className="lista text-center relative z-10">
              {borrachos.map((borracho) => (
                <Rescatado 
                  key={borracho.id}
                  borracho={borracho}
                  setBorracho={setBorracho} 
                  eliminarBorracho={eliminarBorracho}
                />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="heading my-4 z-10 relative">
          <h2 className="text-3xl font-bold">Aun no hay Borrachos</h2>
          <p className="">Comienza agregando alguno</p>
          <span className="block font-semibold">
            Y apareceran aqui
          </span>
        </div>
      )}
    </div>
  );
};

export default ListadoBorrachos;
