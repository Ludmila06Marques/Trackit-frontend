import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeScreen from "./Componentes/HomeScreen"
import RegisterScreen from "./Componentes/RegisterScreen"
import PersonalPage from "./Componentes/PersonalPage"
import History from "./Componentes/History"
import { useState } from "react"



export default function App(){
const [email , setEmail]= useState("")
const [password , setPassword]= useState("")
const [name , setName]= useState("")
const [picture , setPicture]= useState("")


    return(
        <>
              <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen email={email} setEmail={setEmail} password={password} setPassword={setPassword} />}></Route> 
                <Route path="/cadastro" element={<RegisterScreen email={email} setEmail={setEmail} password={password} setPassword={setPassword} name={name} setName={setName} picture={picture} setPicture={setPicture} />}></Route> 
                <Route path="/habitos" element={<PersonalPage/>}></Route>
                <Route path="/historico" element={<History/>}></Route>
              
            </Routes>
        </BrowserRouter>
        </>
    )
}