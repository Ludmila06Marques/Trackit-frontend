import styled from "styled-components"
import { Link } from "react-router-dom"
export default function RegisterScreen({email , setEmail , password , setPassword , name , setName , picture , setPicture}){
   
    return(
        <>
        <Container>
            <Poster src="./img/Poster.png"/>
            <InputEmail placeholder=" email" onChange={(e)=> setEmail(e.target.value)} value={email} required/>
            <InputPassword type="password" placeholder=" senha"onChange={(e)=> setPassword(e.target.value)} value={password} required/>
            <InputName placeholder=" nome"onChange={(e)=> setName(e.target.value)} value={name} required/>
            <InputPicture placeholder=" foto"onChange={(e)=> setPicture(e.target.value)} value={picture} required/>
            <Link to="/habitos">
                <Register> Cadastrar </Register>
            </Link>
            <Link to="/">
                 <LogIn>Já tem uma conta? Faça login!</LogIn>
            </Link>
        </Container>
        </>
    )
}

const Container= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Poster=styled.img`
width:180px;
height: 178px;
margin-top: 68px;
`
const InputEmail= styled.input`
width: 303px;
height: 45px;
font-size: 20px;
margin-top: 32px;
border: solid #D4D4D4 1px;
`
const InputPassword= styled.input`
width: 303px;
height: 45px;
font-size: 20px;
margin-top: 6px;
border: solid #D4D4D4 1px;
`
const InputName=styled.input`
width: 303px;
height: 45px;
font-size: 20px;
margin-top: 6px;
border: solid #D4D4D4 1px;
`

const InputPicture=styled.input`
width: 303px;
height: 45px;
font-size: 20px;
margin-top: 6px;
border: solid #D4D4D4 1px;
`

const Register=styled.button`
width: 303px;
height: 45px;
background-color: 
#52B6FF;
color: 
#FFFFFF;
font-size: 20px;
margin-top: 6px;
border-radius: 5px;
`
const LogIn=styled.h3`
font-size: 17px;
color: 
#52B6FF;
margin-top: 25px;
text-decoration: underline;

`