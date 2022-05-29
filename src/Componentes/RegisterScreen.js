import styled from "styled-components"
import { Link  , useNavigate} from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import {ThreeDots} from "react-loader-spinner"
/*ERROS PARA RESOLVER :
    -Desabilitar inputs 

*/

export default function RegisterScreen({email , setEmail , password , setPassword , name , setName , image  , setImage }){

        const[loading , setLoading]=useState(false)
      
        const navigate= useNavigate()
 
        function singUp(){
       
                const body={
                    email,
                    name,
                    image,
                    password}
                    
                const promise= axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up' , body)
                setLoading(true)
                promise
                .then(res=>{
                    
                    console.log(res.data)     
                    navigate("/")
                })
              
                .catch(err=>{
                    setLoading(false)
                    alert("ERRO")
                   
                })
                   
                
            
        }
   
    return(
        <>
        <Container>
            <Poster src="./img/Poster.png"/>
            <InputEmail loading={loading} placeholder=" email" onChange={(e)=> setEmail(e.target.value)} value={email} required/>
            <InputPassword loading={loading} type="password" placeholder=" senha"onChange={(e)=> setPassword(e.target.value)} value={password} required/>
            <InputName loading={loading} placeholder=" nome"onChange={(e)=> setName(e.target.value)} value={name} required/>
            <InputImage loading={loading} placeholder=" foto"onChange={(e)=> setImage(e.target.value)} value={image} required/>
            
            <Register loading={loading} onClick={singUp}> {loading ? <ThreeDots color="white"/>  : "Cadastrar"}  </Register>
           
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
const InputName=styled.input`
opacity: ${props=> props.loading? "0.5" : "1"};
width: 303px;
height: 45px;
font-size: 20px;
margin-top: 6px;
border: solid #D4D4D4 1px;
`

const InputImage=styled.input`
opacity: ${props=> props.loading? "0.5" : "1"};
width: 303px;
height: 45px;
font-size: 20px;
margin-top: 6px;
border: solid #D4D4D4 1px;
`

const Register=styled.button`
opacity: ${props=> props.loading? "0.5" : "1"};
width: 303px;
height: 45px;
background-color: 
#52B6FF;
color: 
#FFFFFF;
font-size: 20px;
margin-top: 6px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`
const LogIn=styled.h3`
font-size: 17px;
color: 
#52B6FF;
margin-top: 25px;
text-decoration: underline;

`