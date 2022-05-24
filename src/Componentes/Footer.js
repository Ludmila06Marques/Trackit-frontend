import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <>
        <Content>
            <Link to="/habitos">
        <Habits> Habitos</Habits>
        </Link>
        <Progress/>
        <Link to="/historico">
        <Historic> Historico</Historic>
        </Link>
        </Content>
        </>
    )
}
const Content = styled.div`
width: 100%;
height: 70px;
background-color:rgba(255 , 255 , 255 , 0.5);
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
position: fixed;
bottom:0;
left: 0;
`
const Historic= styled.h3`
font-size: 18px;
color: 
#52B6FF;
font-weight: revert;
`
const Habits= styled.h3`
font-size: 18px;
color: 
#52B6FF;
font-weight: revert;
`
const Progress= styled.div`
width:91px;
height: 91px;
border-radius: 50px;
background-color: #52B6FF;
margin-bottom: 40px;
`