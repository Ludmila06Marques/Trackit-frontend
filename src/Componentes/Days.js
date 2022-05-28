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




    return(
        <>
        <BoxWrapper>
       
        <Box className={changeColorDomingo} onClick={()=>  { setSelectedDay([...selectedDay, 1])
     setChangeColorDomingo("selected")

       }}>
            <BoxDay>D</BoxDay>
        </Box>
        <Box className={changeColorSegunda} onClick={()=> { setSelectedDay([...selectedDay, 2])
       setChangeColorSegunda("selected")

       }}>
            <BoxDay>S</BoxDay>
        </Box>
        <Box className={changeColorTerca} onClick={()=>  { setSelectedDay([...selectedDay, 3])
       setChangeColorTerca("selected")

       }}>
            <BoxDay>T</BoxDay>
        </Box>
        <Box className={changeColorQuarta} onClick={()=>  { setSelectedDay([...selectedDay, 4])
       setChangeColorQuarta("selected")

       }}>
            <BoxDay>Q</BoxDay>
        </Box>
        <Box className={changeColorQuinta} onClick={()=>  { setSelectedDay([...selectedDay,5])
       setChangeColorQuinta("selected")

       }}>
            <BoxDay>Q</BoxDay>
        </Box>
        <Box className={changeColorSexta} onClick={()=>  { setSelectedDay([...selectedDay, 6])
       setChangeColorSexta("selected")

       }}>
            <BoxDay>S</BoxDay>
        </Box>
        <Box className={changeColorSabado} onClick={()=>  { setSelectedDay([...selectedDay, 7])
       setChangeColorSabado("selected")

       }}>
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

border:#D4D4D4 1px solid;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 4px;
`

const BoxDay = styled.h1`
font-size: 25px;
color: ${props => props.selectedDay ? "#FFFFFF" :"#D4D4D4"} ;

`