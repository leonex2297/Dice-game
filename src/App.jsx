import { useState } from "react"
import StartGame from "./Component/StartGame"
import GamePlay from "./Component/GamePlay"

const App = () => {
  const[isGameStarted,setIsGameStarted]=useState(false)
  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }
  return (
    <>
    {isGameStarted?<GamePlay/>:<StartGame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App

