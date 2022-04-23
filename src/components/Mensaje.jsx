import React from 'react'

const Mensaje = ({children,tipo}) => {

  return (
    <div className={tipo === 'error' ? "bg-pink-600 text-white text-center p-3 uppercase font-bold mb-3 rounded-md" : tipo === 'alert' ? 'bg-indigo-900 text-white text-center p-3  font-bold mb-3 rounded-md' : ''}>   
       {children}
    </div>
  )
}

export default Mensaje
