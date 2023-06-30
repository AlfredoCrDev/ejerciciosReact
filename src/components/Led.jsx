import { useState } from "react"
import "../index.css"

function Led() {

  // Estados
  const [led, setLed] = useState("black")

  // Funciones (acciones)
  const handleLed = ()=>{
    led === "black" ? setLed("yellow") : setLed("black")
  }

  // Vista
  return (
    <div className="divled">
      <button onClick={handleLed}>Encender/Apagar LED</button>
      <div className="led" style={{backgroundColor: led}}></div>
    </div>
  )
}

export default Led