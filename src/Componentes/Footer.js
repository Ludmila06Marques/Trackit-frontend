import styled from "styled-components"
import { Link } from "react-router-dom"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Footer(props){
    const {score}=props

    const calcColor=(percent , start  , end)=>{
        let a=percent/100,
        b=(end-start)*a,
        c=b+start;

       
    }
    return(
        <>
        <Content>

            <Link to="/habitos">
            <Habits> Habitos</Habits>
            </Link>

            <Progress>  
                <CircularProgressbar
                value={score}
                text="Hoje"
                circleRatio={0.7} 
                styles={{
                    trail:{
                        strokeLinecap:"butt",
                        transform:"rotate(-126deg)",
                        transformOrigin:"center center"
                    },
                    path:{
                        strokeLinecap:"butt",
                        transform:"rotate(-126deg)",
                        transformOrigin:"center center",
                        stroke: calcColor(score , 0, 120)
                    },
                    text:{
                        fill: "#ddd"
                    }
                }}
                strokeWidth={10}
                />          
            </Progress>

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
z-index: 1;
bottom:0;
left: 0;
a{
    text-decoration: none;
}

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