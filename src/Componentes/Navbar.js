import styled from "styled-components"

export default function Navbar(){
    return(
        <>
        <Content>
        <Style src="./img/Poster2.png"/>
        <Poster src="./img/Style.png"/>
        </Content>

        </>
    )
}

const Content = styled.div`
width: 100%;
height: 70px;
background-color: 
#126BA5;
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
position: fixed;
top:0;
left: 0;
box-shadow: 1px 1px 1px rgba(0 , 0 , 0 , 0.5);
`
const Poster= styled.img`

`
const Style = styled.img`

`

