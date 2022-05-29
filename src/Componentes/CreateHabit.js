import styled from "styled-components"
import Days from "./Days"
import { useState } from "react"
import NewHabit from "./NewHabit"
import axios from "axios"
import {ThreeDots} from "react-loader-spinner"
 /* ERROS PARA RESOLVER :
  -Nao estou conseguindo limpar o campo dos dias ao mandar o habito

*/

export default function CreateHabit({setHid, hid , setNothing , setHidHabit ,setNewHabit , newHabit ,setSelectedDay , selectedDay , token , stockHabit , setStockHabit
}){

 
    const [loading , setLoading]=useState(false)
   
    function clean(){
       
        setLoading(false)
        setNewHabit("")       
        setSelectedDay([])       
    
    }
   

    function createHabitSave(){
     

        const config={
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
        console.log(config)
        
        const body={
            
            name: newHabit,
            days :selectedDay
        }
        console.log(body)
        const promise= axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits" , body  , config)
         setLoading(true)
         promise
        .then(res=>{
              
                setHid("hid")
                setNothing("hid")
                setHidHabit("nothing")
                setStockHabit([...stockHabit , body])
                clean() 
                
          
        })
       
        .catch(err=>{
            console.log(err)
            setLoading(false)
        })
      

    }      
    return (
        <>
        <Content>

                <Info>
                    <Name placeholder="Nome do habito"onChange={(e)=> setNewHabit(e.target.value)} value={newHabit} required/>
                    <Days selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
                </Info>

                <Buttons>
                    <Cancel  onClick={()=>setHid("hid")
                    } ><h1>Cancelar</h1></Cancel>
                    <Save onClick={createHabitSave } ><h1>{loading ? <ThreeDots color="#52B6FF"/>  : "Salvar"}</h1></Save>
                </Buttons>

        </Content>

        </>
    )
}
const Content = styled.div`
width: 340px;
height: 180px;
background-color: #FFFFFF;
border-radius: 5px;
margin-bottom: 10px;

`

const Name= styled.input`
width: 303px;
height: 45px;
border-radius: 5px;
border: 
#D4D4D4 1px solid;
color: 
#D4D4D4;
margin-top: 18px;
font-size: 20px;
`
const Info = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
margin-left: 19px;
`

const Buttons = styled.div`
display: flex;
margin-top: 29px;
justify-content: flex-end;

`

const Cancel= styled.div`
width: 84px;
height: 35px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
h1{
    color: #52B6FF;
    font-size: 16px;
}
`

const Save= styled.div`

width: 84px;
height: 35px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 16px;
h1{

    font-size: 16px;
}
`