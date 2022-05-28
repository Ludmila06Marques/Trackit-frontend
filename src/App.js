import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./Componentes/HomeScreen"
import RegisterScreen from "./Componentes/RegisterScreen"
import HabitsScreen from "./Componentes/HabitsScreen"
import HistoryScreen from "./Componentes/HistoryScreen"
import { useState } from "react"
import CurrentScreen from "./Componentes/CurrentScreen"





export default function App(){
  
const [email , setEmail]= useState("")
const [password , setPassword]= useState("")
const [name , setName]= useState("")
const [image , setImage]= useState("")
const [token , setToken]=useState("")
const [hid , setHid]= useState("hid")
const [nothing , setNothing]= useState("nothing")
const [hidHabit , setHidHabit]=useState("hid")
const [newHabit , setNewHabit]=useState("") 
const [selectedDay , setSelectedDay]=useState([])
const [stockHabit , setStockHabit]= useState([])
const [currentHabit , setCurrentHabit]=useState([])
const [doneHabit , setDoneHabit]=useState([])



    return(
        <>
              <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen email={email} setEmail={setEmail} password={password} setPassword={setPassword} setToken={setToken} setImage={setImage} />}></Route> 
                <Route path="/cadastro" element={<RegisterScreen email={email} setEmail={setEmail} password={password} setPassword={setPassword} name={name} setName={setName} image={image} setImage={setImage} />}></Route> 
                <Route path="/habitos" element={<HabitsScreen token={token} hid={hid} setHid={setHid} setNothing={setNothing} nothing={nothing} setHidHabit={setHidHabit} hidHabit={hidHabit} newHabit={newHabit} setNewHabit={setNewHabit} selectedDay={selectedDay} setSelectedDay={setSelectedDay} setStockHabit={setStockHabit} stockHabit={stockHabit} image={image} />} ></Route>
                <Route path="/historico" element={<HistoryScreen image={image}/>  }></Route>
                <Route path="/hoje" element={<CurrentScreen currentHabit={currentHabit} setCurrentHabit={setCurrentHabit} image={image} token={token} doneHabit={doneHabit} setDoneHabit={setDoneHabit} stockHabit={stockHabit} />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}