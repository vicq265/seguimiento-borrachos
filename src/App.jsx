import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoBorrachos from './components/ListadoBorrachos'

function App() {

  const [borrachos, setBorrachos] = useState([]);
  const [borracho, setBorracho] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const borrachosLS = JSON.parse(localStorage.getItem('borrachos')) ?? [];
      setBorrachos(borrachosLS)
    }
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem('borrachos', JSON.stringify( borrachos ));
  }, [borrachos]);

  const eliminarBorracho = (id) => {
      const borrachosAtualizados = borrachos.filter( borracho => borracho.id !== id );
      setBorrachos(borrachosAtualizados)
  }

  return (
    <div className="App bg-gray-100 h-full md:h-screen ">
      <Header />
      <div className="mt-10 md:flex px-5 pb-10">
        <Formulario 
          borrachos={borrachos}
          setBorrachos={setBorrachos}
          borracho={borracho}
          setBorracho={setBorracho}
        />
        <ListadoBorrachos 
          borrachos={borrachos}
          setBorracho={setBorracho}
          eliminarBorracho={eliminarBorracho}
        /> 
      </div>
    </div>
  )
}
export default App
