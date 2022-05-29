import styled from "styled-components"
import Days from "./Days"
import axios from "axios"
import { useEffect } from "react"
/* ERROS PARA RESOLVER :
  -Nao estou conseguindo capturar os dias e usalos depois 

*/

export default function NewHabit({hidHabit , newHabit , setNewHabit , name , id , token  , setStockHabit ,  stockHabit ,selectedDay}){

    function confirmAsk(){
    const question= window.confirm("vc tem certeza que quer deletar ?")
      if(question=== true){
        deletar()
      }
    }
 
    function deletar(){


        const config={
            headers:{
              Authorization:`Bearer ${token}`
            }
          }
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}` , config) 

              promise
              .then(res=>{
                console.log("deletando")
              })
              .catch(err=>{
                  console.log(err)
              })
    }

    function chargeColor(){
      console.log(stockHabit)
    }




    return(
        <>
        <Wrapper className={hidHabit}>
          <Content>
            <Icon onClick={confirmAsk} ><ion-icon name="trash-outline"></ion-icon></Icon>
            <HabitName>{name}</HabitName>
            <Days selectedDay={selectedDay}/> 
          </Content>
        </Wrapper>
        </>
    )
}

const Wrapper=styled.div`
z-index: 0;

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
margin-top: 10px;

`
const HabitName=styled.h1`
color:
#666666;
font-size: 20px;
margin-left: 7px;


`
