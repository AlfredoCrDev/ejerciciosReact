import { useState } from 'react'

function BotonColor() {

  // Estados
  const [bgColor, setbgColor] = useState("green")

  //  Funciones (acciones)
  const toggleBgColor = ()=>{
    bgColor === "green" ? setbgColor("blue") : setbgColor("green")
  }

  // Vista
  return (
      <div className="botonColor" style={{ backgroundColor: bgColor }}>
        <button onClick={toggleBgColor}>Cambiar Color</button>
      </div>
  )
}

export default BotonColor;