import styled from "styled-components"
import Days from "./Days"

export default function NewHabit({ props ,hidHabit , newHabit , setNewHabit}){



    return(
        <>
        <Wrapper className={hidHabit}>
        <Content  >
            <Icon><ion-icon name="trash-outline"></ion-icon></Icon>
        <HabitName>{props.name}</HabitName>
        <Days/>
        </Content>
        </Wrapper>
        </>
    )
}

const Wrapper=styled.div`
`

const Icon=styled.div`
font-size: 15px;
position: absolute;
top: 0;
right: 0;
padding: 5px;
`
const Content=styled.div`
width:340px;
height: 91px;
background-color: #FFFFFF;
border-radius: 5px;
padding: 10px;
position: relative;

`
const HabitName=styled.h1`
color:
#666666;
font-size: 20px;
margin-left: 7px;


`
