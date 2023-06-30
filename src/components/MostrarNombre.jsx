import React, { useState } from 'react'

function MostrarNombre() {

  // Estados
  const [showName, setshowName] = useState(true)

  // Funciones (acciones)
  const toggleName = ()=>{
    setshowName(!showName)
  }
  
  //Vista
  return (
    <div className='mostrarNombre'>
      <button onClick={toggleName}>Mostrar/Ocultar Nombre</button>
      {showName && <p>Alfredo Carrasquel</p>}
    </div>
  )
}

export default MostrarNombre