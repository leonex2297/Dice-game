import styled from "styled-components"

const NumberSelecter = ({selectedNumber,setSelectedNumber,error,setError}) => {

    const array=[1,2,3,4,5,6];
    
    const numberSelecterHandler=(value)=>{
        setSelectedNumber(value);
        setError("");
    }

return (
    <NumberSelecterContainer>
        <p className="error">{error}</p>
        <div className="flex">
            {array.map((value,index)=>(
            <Box 
            isSelected={value===selectedNumber}
            key={index} 
            onClick={()=>numberSelecterHandler(value)}
            >
                {value}
            </Box>))}
        </div>
        <p>Select Number</p>
        
        {/* <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box> */}
    </NumberSelecterContainer>
)
}

export default NumberSelecter

const NumberSelecterContainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700px;
    
}
.error{
    color: red;
}
`;

const Box= styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-weight: 700;
font-size: 24px;
background-color: ${(props)=>(props.isSelected ? "black" : "white")};
color: ${(props)=>(!props.isSelected ? "black" : "white")};
`;