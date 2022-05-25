import styled from "styled-components"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Displaying from "./Displaying"
import NewHabit from "./NewHabit"
import {useState} from "react"
import Days from "./Days"




export default function Habits({token}){
    console.log(token)
    const [selected , setSelected]= useState("hid")
    function addHabit(){
        setSelected("nothing")
    
    }


    return(
        <>
        <Footer/>
            <ContentUp>
            <PersonalHabits>Meus habitos</PersonalHabits>
            <Icon onClick={addHabit} ><ion-icon  name="add-outline"></ion-icon></Icon>
            </ContentUp>
            {/* Se nao tiver nenhum habito adicionado */}

            <Displaying>
                 {/* Quando clicar no + esse componente NewHabit tem que aparecer*/}
                <NewHabitWrapper className={selected}>
                    <NewHabit />
                </NewHabitWrapper>
                <NoHabits>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoHabits>
            </Displaying>

            
        <Navbar/>
        </>
    )
}
const NewHabitWrapper= styled.div`

`

const ContentUp = styled.div`
width: 100%;
height: 70px;
margin-top: 70px;
display:  flex;
justify-content: space-between;
align-items: center;
padding: 20px;

`
const PersonalHabits = styled.h1`
font-size:23px;
color: #126BA5;

`
const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 35px;
background-color: 
#52B6FF;
border-radius: 5px;
color: #FFFFFF;
`
const NoHabits=styled.h3`
font-size: 20px;
color: #666666;


`