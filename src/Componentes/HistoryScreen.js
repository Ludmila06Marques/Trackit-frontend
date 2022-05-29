import Navbar from "./Navbar"
import Footer from "./Footer"
import Displaying from "./Displaying"
import styled from "styled-components"

export default function HistoryScreen({image}){
    return(
        <>
         <Footer/>
        <Displaying>
                <ContentUp>
                <PersonalHabits>Histórico</PersonalHabits>
                </ContentUp>
                <NoHabits >
                Em breve você poderá ver o histórico dos seus hábitos aqui!
                </NoHabits>
            
        </Displaying>
        <Navbar image={image}/>
        </>
    )
}
const ContentUp = styled.div`
width: 100%;
height: 70px;
margin-top: 70px;
display:  flex;
justify-content: space-between;
align-items: center;


`
const PersonalHabits = styled.h1`
font-size:23px;
color: #126BA5;
font-weight: bold;

`
const NoHabits=styled.h3`
font-size: 20px;
color: #666666;
font-weight: bold;


`