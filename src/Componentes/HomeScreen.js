import styled from "styled-components"
import { Link , useNavigate } from "react-router-dom"
import axios from "axios"
import {ThreeDots} from "react-loader-spinner"
import { useState } from "react"
/* ERROS PARA RESOLVER :
  -Desabilitar o campo do input 

*/


export default function HomeScreen({email , setEmail , password , setPassword , setToken , setImage}){

    const [loading , setLoading]=useState(false)
    const navigate= useNavigate()

    function login(){
           const body={
            email,
            password}

          const promise= axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login' , body)
         
          setLoading(true)    
       
                promise
                .then(res=>{   
                       
                    console.log(res.data)
                    setImage(res.data.image)
                    setToken (res.data.token)
                    navigate("/hoje")
                })
                 
              .catch(err=>{
                console.log(err)
                setEmail("")
                setPassword("")
                setLoading(false)    
              
              })
                    
            
               
    }
    return(
        <>
        <Container>
            <Poster src="./img/Poster.png"/>
            <InputEmail  loading={loading} placeholder=" email" onChange={(e)=> setEmail(e.target.value)} value={email} required/>
            <InputPassword loading={loading} type="password" placeholder=" senha" onChange={(e)=> setPassword(e.target.value)} value={password} required/>
           
               <LogIn loading={loading} onClick={login} > {loading ? <ThreeDots color="white"/>  : "Entrar"} </LogIn>
           
            <Link to="/cadastro">
               <Register>Não tem uma conta? Cadastre-se!</Register>
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
opacity: ${props=> props.loading? "0.5" : "1"};
width: 303px;
height: 45px;
font-size: 20px;
margin-top: 32px;
border: solid #D4D4D4 1px;
`
const InputPassword= styled.input`
opacity: ${props=> props.loading? "0.5" : "1"};
width: 303px;
height: 45px;
font-size: 20px;
margin-top: 6px;
border: solid #D4D4D4 1px;
`

const LogIn=styled.button`
opacity: ${props=> props.loading? "0.5" : "1"};
display: flex;
justify-content: center;
align-items: center;
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

const Register=styled.h3`
font-size: 17px;
color: 
#52B6FF;
margin-top: 25px;
text-decoration: underline;

`