import { useState } from 'react'

function CambiarTexto() {

  //Estados
  const [texto, setTexto] = useState("Alfredo")
  
  //Funciones (acciones)
  const handleTexto = ()=>{
    texto === "Alfredo" ? setTexto("Rafael") : setTexto("Alfredo")
  }

  //Vista
  return (
    <div className='cambiarText'>
      <button onClick={handleTexto}>Cambiar Texto</button>
      <p>{texto}</p>
    </div>
  )
}

export default CambiarTexto