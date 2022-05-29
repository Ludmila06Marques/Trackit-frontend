import styled from "styled-components"
import { useState } from "react"


export default function Days({selectedDay , setSelectedDay}){
 
    const [changeColorDomingo , setChangeColorDomingo]=useState("nothing")
    const [changeColorSegunda , setChangeColorSegunda]=useState("nothing")
    const [changeColorTerca , setChangeColorTerca]=useState("nothing")
    const [changeColorQuarta , setChangeColorQuarta]=useState("nothing")
    const [changeColorQuinta , setChangeColorQuinta]=useState("nothing")
    const [changeColorSexta , setChangeColorSexta]=useState("nothing")
    const [changeColorSabado , setChangeColorSabado]=useState("nothing")
    
 
    function toggleDomingo(){
            if(changeColorDomingo=="nothing"){
                setChangeColorDomingo("selected")
                setSelectedDay([...selectedDay , 0])
            }
            else{
                setChangeColorDomingo("nothing")
               setSelectedDay( selectedDay.filter((item) => item !== 0))
            }
       
        console.log(selectedDay)
    }
    function toggleSegunda(){
        if(changeColorSegunda=="nothing"){
            setChangeColorSegunda("selected")
            setSelectedDay([...selectedDay , 1])
        }
        else{
            setChangeColorSegunda("nothing")
           setSelectedDay( selectedDay.filter((item) => item !== 1))
        }
        console.log(selectedDay)
    }
    function toggleTerca(){
        if(changeColorTerca=="nothing"){
            setChangeColorTerca("selected")
            setSelectedDay([...selectedDay , 2])
        }
        else{
            setChangeColorTerca("nothing")
           setSelectedDay( selectedDay.filter((item) => item !== 2))
        }
        console.log(selectedDay)
    }
    function toggleQuarta(){
        if(changeColorQuarta=="nothing"){
            setChangeColorQuarta("selected")
            setSelectedDay([...selectedDay , 3])
        }
        else{
            setChangeColorQuarta("nothing")
           setSelectedDay( selectedDay.filter((item) => item !== 3))
        }
        console.log(selectedDay)
    }
    function toggleQuinta(){
        if(changeColorQuinta=="nothing"){
            setChangeColorQuinta("selected")
            setSelectedDay([...selectedDay , 4])
        }
        else{
            setChangeColorQuinta("nothing")
           setSelectedDay( selectedDay.filter((item) => item !== 4))
        }
        console.log(selectedDay)
    }
    function toggleSexta(){
        if(changeColorSexta=="nothing"){
            setChangeColorSexta("selected")
            setSelectedDay([...selectedDay , 5])
        }
        else{
            setChangeColorSexta("nothing")
           setSelectedDay( selectedDay.filter((item) => item !== 5))
        }
        console.log(selectedDay)
    }
    function toggleSabado(){
        if(changeColorSabado=="nothing"){
            setChangeColorSabado("selected")
            setSelectedDay([...selectedDay , 6])
        }
        else{
            setChangeColorSabado("nothing")
           setSelectedDay( selectedDay.filter((item) => item !== 6))
        }
        console.log(selectedDay)
    }


    return(
        <>
        <BoxWrapper>

        <Box className={changeColorDomingo} onClick={toggleDomingo} >
          <BoxDay>D</BoxDay>
        </Box>
        <Box className={changeColorSegunda} onClick={toggleSegunda}>
          <BoxDay>S</BoxDay>
        </Box>
        <Box className={changeColorTerca} onClick={toggleTerca}>
          <BoxDay>T</BoxDay>
        </Box>
        <Box className={changeColorQuarta} onClick={toggleQuarta}>
          <BoxDay>Q</BoxDay>
        </Box>
        <Box className={changeColorQuinta}onClick={toggleQuinta}>
          <BoxDay>Q</BoxDay>
        </Box>
        <Box className={changeColorSexta}onClick={toggleSexta}>
          <BoxDay>S</BoxDay>
        </Box>
        <Box className={changeColorSabado}onClick={toggleSabado}>
          <BoxDay>S</BoxDay>
        </Box>
       
      
        
        </BoxWrapper>

        </>
    )
}
const BoxWrapper = styled.div`
display: flex;
margin-top: 8px;

`
const Box = styled.div`
width: 30px;
height: 30px;
//background-color:${props => props.click ? "#D4D4D4" :"#FFFFFF" };
border:#D4D4D4 1px solid;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 4px;
`

const BoxDay = styled.h1`
font-size: 25px;
//color: ${props => props.click ? "#FFFFFF" :"#D4D4D4"} ;

`