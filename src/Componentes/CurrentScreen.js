import Navbar from "./Navbar"
import Footer from "./Footer"
import Displaying from "./Displaying"
import axios from "axios"
import { useEffect , useState} from "react"
import styled from "styled-components"
import * as dayjs from 'dayjs'
//Nao estou conseguindo fazer o post no habito


 function Molde({name , done  , id, setDoneHabit , doneHabit , token }){

    function complete(){

        const config={
            headers:{
              Authorization:`Bearer ${token}`
            }
          }

        const promise= axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null ,config)
        promise
        .then(res=>{
        setDoneHabit([...doneHabit , id])
        alert("completou")
    
        
        })
        .catch(err=>{
            console.log(err)
            console.log(config)
        })
    }
    console.log(doneHabit)
   
    return(
        <Wrapper>
        <Texts>
            <TextsTitle>{name}</TextsTitle>
            <TextsSubTitle>Sequencia atual:</TextsSubTitle>
            <TextsSubTitle>Seu record:</TextsSubTitle>

        </Texts>
        <Status onClick={complete} ><ion-icon name="checkmark-outline"></ion-icon></Status>

    </Wrapper>
    )
}

export default function CurrentScreen({image , token , setCurrentHabit , currentHabit  , doneHabit , setDoneHabit , stockHabit }){
    var now = dayjs()
    console.log(now)

  

    useEffect(()=>{
        const config={
            headers:{
              Authorization:`Bearer ${token}`
            }
          }

          const promise= axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today" , config)
  
          promise
          .then(res=>{
             setCurrentHabit([...res.data])
             console.log(res.data)
         
          
          })
          .catch(err=>{
              console.log(err)
          })
      
        
    },[stockHabit])
    console.log(currentHabit)
    const day=""


    return(
        <>
         <Footer/>
        <Displaying>
         <ContentUp>
             <ContentTextI>
                 {now.$D}/{now.$M+1}</ContentTextI>
             {doneHabit.length==0
             ? 
              <ContentText>Nenhum hábito concluído ainda</ContentText>
            :
            <ContentText>{doneHabit.length}/{currentHabit.length} Concluidos</ContentText>
            }
            
        </ContentUp>   
      {currentHabit.map((item,index)=><Molde token={token} setCurrentHabit={setCurrentHabit} currentHabit={currentHabit} doneHabit={doneHabit} setDoneHabit={setDoneHabit} done={item.done} id={item.id} name={item.name} key={index} index={index} />)}
     
        
        </Displaying>
        <Navbar image={image}/>
        </>
    )
}
const Status= styled.div`
width: 69px;
height: 69px;
border-radius: 5px;
background-color: #EBEBEB;
display: flex;
align-items: center;
justify-content: center;
font-size: 50px;
color: #FFFFFF;
`

const TextsSubTitle= styled.h3`
font-size: 13px;
color: 
#666666;
`
 const TextsTitle= styled.h1`
 font-size: 20px;
 color:
#666666;
 `

const Texts=styled.div`
`

const Wrapper=styled.div`
padding: 15px;
width: 340px;
height: 94px;
background-color: #FFFFFF;
border-radius: 5px;
display: flex;
justify-content: space-between;
margin-bottom: 10px;
`
const ContentUp=styled.div`
margin-top: 90px;
margin-bottom: 28px;
`

const ContentTextI=styled.h1`
font-size: 23px;
color: #126BA5;
`
const ContentText=styled.h3`
margin-top: 5px;
font-size: 18px;
color: 
#BABABA
;
font-weight: bold;
`