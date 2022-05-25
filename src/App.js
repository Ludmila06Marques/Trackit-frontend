import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./Componentes/HomeScreen"
import RegisterScreen from "./Componentes/RegisterScreen"
import Habits from "./Componentes/Habits"
import History from "./Componentes/History"
import { useState } from "react"



export default function App(){
const [email , setEmail]= useState("")
const [password , setPassword]= useState("")
const [name , setName]= useState("")
const [image , setImage]= useState("")
const [token , setToken]=useState("")

    return(
        <>
              <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen email={email} setEmail={setEmail} password={password} setPassword={setPassword} setToken={setToken} />}></Route> 
                <Route path="/cadastro" element={<RegisterScreen email={email} setEmail={setEmail} password={password} setPassword={setPassword} name={name} setName={setName} image={image} setImage={setImage} />}></Route> 
                <Route path="/habitos" element={<Habits/>} token={token}></Route>
                <Route path="/historico" element={<History/>}></Route>
              
            </Routes>
        </BrowserRouter>
        </>
    )
}