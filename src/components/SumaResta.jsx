import { useState } from 'react'

function SumaResta() {

  // Estados
  const [numero, setNumero] = useState(3)


  // Funciones (acciones)
  const handleSumar = ()=>{
    setNumero(numero + 1);
  }

  const handleRestar = ()=>{
    setNumero(numero - 1);
  }

  // Vista
  return (
    <div className='sumaResta'>
      <button onClick={handleSumar}>Sumar</button>
      <p>Numero: {numero}</p>
      <button onClick={handleRestar}>Restar</button>
    </div>
  )
}

export default SumaResta