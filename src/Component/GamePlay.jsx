import { useState } from 'react'
import styled from 'styled-components'
import TotalScore from './TotalScore'
import NumberSelecter from './NumberSelecter'
import RoleDice from './RoleDice'
import { Button, OutLineButton } from '../Styled/Button'
import Rules from './Rules'

const GamePlay = () => {
    const[score,setScore]=useState(0);
    const[selectedNumber,setSelectedNumber]=useState(5);
    const[currentDice,setCurrentDice]=useState(1);
    const[error,setError]=useState("");
    const[showRules,setShowRules]=useState(false)

        const generateRandomNumber=(min,max)=>{
        console.log(Math.floor(Math.random() * (max-min)+min));
        return Math.floor(Math.random() * (max-min)+min);
        }
    
    const roleDice=()=>{
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber);

        if(!selectedNumber){
            setError("You have not select any Number.")
            return;
        }
        

        if(selectedNumber===randomNumber){
            setScore((prev)=>prev+randomNumber);
        }else{
            setScore((prev)=>prev-2)
        }

        setSelectedNumber(undefined);
    }
    const resetScore =()=>{
        setScore(0);
    }

  return (
    <MainContainer>
        <div className='top-section'>
            <TotalScore score={score}/>
            <NumberSelecter 
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
            error={error}
            setError={setError}
            />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className="btn">
            <OutLineButton
            onClick={resetScore}
            
            >Reset</OutLineButton>

            <Button onClick={()=>setShowRules(prev=> !prev)}> {showRules ? "Hide" : "Show"}</Button>
        </div>
    {showRules &&  <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer=styled.div`
padding-top:70px;
.top-section{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
.btn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
}
`;