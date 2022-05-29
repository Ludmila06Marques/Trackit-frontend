import styled from "styled-components"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Displaying from "./Displaying"
import CreateHabit from "./CreateHabit"
import {useState , useEffect} from "react"
import NewHabit from "./NewHabit"
import axios from "axios"


export default function HabitsScreen({token , hid , setHid , setNothing,nothing , hidHabit , setHidHabit , setNewHabit , newHabit , setSelectedDay , selectedDay  , stockHabit , setStockHabit , image}){
   
    
    
    function addHabit(){
        setHid("nothing")
    
    }

        useEffect(()=>{
            const config={
                headers:{
                Authorization:`Bearer ${token}`
                }
            }

            const promise= axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits" , config)
    
            promise
            .then(res=>{
                setStockHabit([...res.data])
            
            })
            .catch(err=>{
                console.log(err)
            })
        
            
        },[stockHabit])




    return(
        <>
         <Navbar image={image}/>
         {stockHabit.length ==0

         ?
         <Displaying>

                <ContentUp>
                <PersonalHabits>Meus habitos</PersonalHabits>
                <Icon onClick={addHabit} ><ion-icon  name="add-outline"></ion-icon></Icon>
                </ContentUp>

                <CreateHabitWrapper className={hid}>
                    <CreateHabit  setHid={setHid} hid={hid} setNothing={setNothing} setHidHabit={setHidHabit} setNewHabit={setNewHabit} newHabit={newHabit} setSelectedDay={setSelectedDay} selectedDay={selectedDay} token={token} stockHabit={stockHabit} setStockHabit={setStockHabit} />
                </CreateHabitWrapper>

                <NoHabits >
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoHabits>

                 {  stockHabit.map((item , index)=> <NewHabit key={index} name={item.name} id={item.id}  hidHabit={item.hidHabit} newHabit={item.newHabit} setNewHabit={item.setNewHabit} selectedDay={item.selectedDay} token={token} setHidHabit={item.setHidHabit} setStockHabit={item.setStockHabit} stockHabit={item.stockHabit}  />)}
  
         </Displaying>
            :
         <Displaying>

                <ContentUp>
                <PersonalHabits>Meus habitos</PersonalHabits>
                <Icon onClick={addHabit} ><ion-icon  name="add-outline"></ion-icon></Icon>
                </ContentUp>

                 <CreateHabitWrapper className={hid}>
                        <CreateHabit setHid={setHid} hid={hid} setNothing={setNothing} setHidHabit={setHidHabit} setNewHabit={setNewHabit} newHabit={newHabit} setSelectedDay={setSelectedDay} selectedDay={selectedDay} token={token} stockHabit={stockHabit} setStockHabit={setStockHabit} />
                 </CreateHabitWrapper>

                  {  stockHabit.map((item , index)=> <NewHabit key={index} name={item.name} id={item.id}  hidHabit={item.hidHabit} newHabit={item.newHabit} setNewHabit={item.setNewHabit} selectedDay={item.selectedDay} token={token} setHidHabit={item.setHidHabit} setStockHabit={item.setStockHabit} stockHabit={item.stockHabit}  />)}
                 
         </Displaying>
        }
        
         <Footer/>  
      
        </>
    )
}
const CreateHabitWrapper= styled.div`

`

const ContentUp = styled.div`
width: 100%;
height: 70px;
margin-top: 70px;
display:  flex;
justify-content: space-between;
align-items: center;
padding: 20px;

`
const PersonalHabits = styled.h1`
font-size:23px;
color: #126BA5;

`
const Icon = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 40px;
height: 35px;
background-color: 
#52B6FF;
border-radius: 5px;
color: #FFFFFF;
`
const NoHabits=styled.h3`
font-size: 20px;
color: #666666;


`