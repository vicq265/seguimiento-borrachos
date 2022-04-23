import { useState, useEffect } from 'react'
import { generarId } from '../helpers';
import Mensaje from './Mensaje';

const Formulario = ({borrachos ,setBorrachos, borracho, setBorracho}) => {

    const [nombre, setNombre] = useState('');
    const [cedula, setCedula] = useState('');
    const [representante, setRepresentante] = useState('');
    const [licor, setLicor] = useState('');
    const [telefono, setTelefono] = useState('');

    const [error, setError] = useState(false);
    const [alert, setAlert] = useState(false);
    const [mensaje, setMensaje] = useState('');


    useEffect(() => {
        if(Object.keys(borracho).length > 0){
            setNombre(borracho.nombre)
            setCedula(borracho.cedula)
            setRepresentante(borracho.representante)
            setLicor(borracho.licor)
            setTelefono(borracho.telefono)
        }
    }, [borracho])
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const arrC = [0, 1, 2, 3, 4, 5, 6, 7]

        // Validacion del formulario
        if([nombre, cedula, representante, licor, telefono].includes('') ){

            setError(true)
            setMensaje('Todos los campos son obligatorios')
            setTimeout(() => {
                setMensaje('')

                setError(false)
            }, 2000);
            return
            
        } else if( cedula.length < arrC.length) { // Verificando q la cedula tenga algo de validez
            setMensaje('Cedula invalida');
            setError(true)
            setTimeout(() => {
                setMensaje('')

                setError(false)
            }, 2000);
            return
        }

        // Revisando q licor es para mostrar una alerta
        if([licor].length > 0) {
            setAlert(true)

            switch (licor) {
                case 'whisky':
                    setMensaje('Ingresado por whisky. 1 Dia de rehabilitacion');
                  break;
                case 'ron':
                    setMensaje('Ingresado por Ron. la resaca tarda un poco mas que el Whisky');
                  break;
                case 'vodka':
                    setMensaje('Ingresado por Vodka. quien toma Vodka');
                  break;
                case 'cerveza':
                    setMensaje('Ingresado por Cerveza. Denle otra y se arregla');
                  break;
                case 'cocuy':
                    setMensaje('Ingresado por Cocuy. perdida total');
                    break;
                case 'tequila':
                    setMensaje('Ingresado por Tequila. no damos garantia de regresar');
                  break;
                default:
                  
              }
              
            setTimeout(() => {
                setMensaje('')

                setAlert(false)
            }, 7000);
        }

        setError(false)
        const objBorracho = {
            nombre,
            cedula,
            representante,
            licor,
            telefono
        }

        if(borracho.id){
            // Agregando el id al objBorracho para despues verificarlo
            objBorracho.id = borracho.id;

            const borrachoAtualizado = borrachos.map( borrachoState => borrachoState.id === borracho.id ? objBorracho : borrachoState);

            setBorrachos(borrachoAtualizado);
            setBorracho({})

        }else {
            objBorracho.id = generarId();
            setBorrachos([...borrachos, objBorracho]);
        }

        setNombre('')
        setCedula('')
        setRepresentante('')
        setLicor('');
        setTelefono('')
    }


  return (
    <div className="md:w-2/5 text-center bg-gray-200 rounded-md md:rounded-r-none md:rounded-l-md md:h-screen ">
        <div className="heading my-4">
            <h2 className="text-3xl font-bold">Seguimientos <span className="text-purple-900 ">Borrachos</span></h2>
            <span className="block font-semibold">{borracho.id ? ' Estas editando el Borracho' : 'Añade el borracho a rescatar'}</span>
        </div>
        <div className="formulario px-3">
            <form 
                onSubmit={handleSubmit}
            >
                {error && <Mensaje tipo="error"> {mensaje} </Mensaje>}
                {alert && <Mensaje tipo="alert"> {mensaje} </Mensaje>}
                <div className="mb-5">
                    <label htmlFor="borracho" className="block text-gray-700 uppercase font-bold text-left">
                        Nombre Borracho
                    </label>
                    <input
                        id="borracho"
                        type="text"
                        placeholder="Nombre del Borracho"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none "
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="ced" className="block text-gray-700 uppercase font-bold text-left">
                        Cedula
                    </label>
                    <input
                        id="ced"
                        type="number"
                        placeholder="Cedula del Borracho"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md
                        outline-none appearance-none"
                        value={cedula}
                        onChange={ (e) => setCedula(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="representante" className="block text-gray-700 uppercase font-bold text-left">
                        Representante
                    </label>
                    <input
                        id="representante"
                        type="text"
                        placeholder="Representante del Borracho"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md outline-none "
                        value={representante}
                        onChange={ (e) => setRepresentante(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold text-left">
                        Telefono Representante
                    </label>
                    <input
                        id="telefono"
                        type="tel"
                        placeholder=" Telefono Representante"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md
                        outline-none appearance-none"
                        value={telefono}
                        onChange={ (e) => setTelefono(e.target.value) }
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="licor" className="block text-gray-700 uppercase font-bold text-left">
                        Licor Ingerido
                    </label>
                    <select 
                         id="licor"
                         placeholder="Seleccione el licor"
                         className="border-2 w-full p-2 mt-2 text-center placeholder-gray-400 rounded-md outline-none "
                         value={licor}
                         onChange={ (e) => setLicor(e.target.value) }
                    >
                        <option value="">--- Seleccione ---</option>
                        <option value="whisky">Whisky</option>
                        <option value="ron">Ron</option>
                        <option value="cerveza">Cerveza</option>
                        <option value="vodka">Vodka</option>
                        <option value="cocuy">Cocouy</option>
                        <option value="tequila">Tequila</option>
                    </select> 
                </div>
                
                <input
                    type="submit"
                    className="bg-purple-700 w-full p-3 text-white uppercase font-bold hover:bg-purple-800 cursor-pointer transition-colors mb-5 rounded-sm"
                    value={borracho.id ? 'Editando el Borracho' : 'Agregar Borracho'}
                />
            </form>
        </div>
    </div>
  )
}

export default Formulario
