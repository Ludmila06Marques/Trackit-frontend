import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./Componentes/HomeScreen"
import RegisterScreen from "./Componentes/RegisterScreen"
import Habits from "./Componentes/Habits"
import History from "./Componentes/History"
import { useState } from "react"
import Current from "./Componentes/Current"




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


    return(
        <>
              <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen email={email} setEmail={setEmail} password={password} setPassword={setPassword} setToken={setToken} />}></Route> 
                <Route path="/cadastro" element={<RegisterScreen email={email} setEmail={setEmail} password={password} setPassword={setPassword} name={name} setName={setName} image={image} setImage={setImage} />}></Route> 
                <Route path="/habitos" element={<Habits token={token} hid={hid} setHid={setHid} setNothing={setNothing} nothing={nothing} setHidHabit={setHidHabit} hidHabit={hidHabit} newHabit={newHabit} setNewHabit={setNewHabit} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />} ></Route>
                <Route path="/historico" element={<History/> }></Route>
                <Route path="/hoje" element={<Current/> }></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}