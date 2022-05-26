import styled from "styled-components"
import Days from "./Days"

export default function NewHabit(){

    return(
        <>
        <Content>
        <HabitName>Ler 1 capítulo de livro</HabitName>
        <Days/>
        </Content>
        </>
    )
}
const Content=styled.div`
width:340px;
height: 91px;
background-color: #FFFFFF;
border-radius: 5px;
`
const HabitName=styled.h1`
color:
#666666;
font-size: 20px;
`