import Navbar from "./Navbar"
import Footer from "./Footer"
import Displaying from "./Displaying"
import axios from "axios"
import { useEffect , useState} from "react"
import styled from "styled-components"
import * as dayjs from 'dayjs'
 /* ERROS PARA RESOLVER :
  -Descompletar e ja deixar pintado quando o   done==true

*/


 function Molde({name , done  , id, setDoneHabit , doneHabit , token  ,currentSequence ,highestSequence}){

      const [selected , setSelected]=useState(false)

     function complete(){

        const config={
            headers:{
              Authorization:`Bearer ${token}`
            }
          }

        const promise= axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null ,config)
              promise
              .then(res=>{    
                if(done==false){
                  setDoneHabit([...doneHabit , id])
                  setSelected(true)
                 
                  alert("completou")
                }
              })
              .catch(err=>{               
                alert("voce ja fez")
                descomplete()
                  console.log(err)
                  console.log(config)
              })
    }
    function descomplete(){
        const config={
            headers:{
              Authorization:`Bearer ${token}`
            }
          }

        const promise= axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null ,config)
        promise
        .then(res=>{         
        setSelected(false)
        alert("descompletou")
        
        
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
            <TextsSubTitle>Sequencia atual:{currentSequence}</TextsSubTitle>
            <TextsSubTitle>Seu record:{highestSequence} </TextsSubTitle>

        </Texts>
        <Status background="EBEBEB" selected={selected} onClick={complete} ><ion-icon name="checkmark-outline"></ion-icon></Status>

    </Wrapper>
    )
}

export default function CurrentScreen({image , token , setCurrentHabit , currentHabit  , doneHabit , setDoneHabit , stockHabit , selectedDay , setSelectedDay}){
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
   


    return(
        <>
         <Footer/>
        <Displaying>
         <ContentUp>
             <ContentTextI>
              { now.$D}/{now.$M+1}</ContentTextI>
             {doneHabit.length==0
             ? 
              <ContentText color="#BABABA" >Nenhum hábito concluído ainda</ContentText>
            :
            <ContentText color="#8FC549">{(doneHabit.length /currentHabit.length)*100}% Concluidos</ContentText>
            }
            
        </ContentUp>   
      {currentHabit.map((item,index)=><Molde token={token} setCurrentHabit={setCurrentHabit} currentHabit={currentHabit} doneHabit={doneHabit} setDoneHabit={setDoneHabit} done={item.done} id={item.id} name={item.name} key={index} index={index} currentSequence={item.currentSequence } highestSequence={item.highestSequence} />)}
     
        
        </Displaying>
        <Navbar image={image}/>
        </>
    )
}
const Status= styled.div`
width: 69px;
height: 69px;
border-radius: 5px;
background-color:${props=> props.selected? "#8FC549" : "#EBEBEB"};
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
color:${props=>props.color}
;
font-weight: bold;
`