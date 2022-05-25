import styled from "styled-components"
import Days from "./Days"
import { useState } from "react"


export default function NewHabit(){

    const [selectedCancel , setSelectedCancel]= useState(false)
    const [selectedSave , setSelectedSave]= useState(false)

    return (
        <>
        <Content>
                <Info>
                    <Name placeholder="Nome do habito"/>
                    <Days/>
                </Info>
            <Buttons>
                <Cancel  onClick={()=>setSelectedCancel(true) } selectedCancel={selectedCancel}><h1>Cancelar</h1></Cancel>
                <Save  onClick={()=>setSelectedSave(true) } selectedSave={selectedSave}><h1>Salvar</h1></Save>
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
background-color:  ${props => props.selectedCancel ? "#52B6FF" : "#FFFFFF"};
width: 84px;
height: 35px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
h1{
    color: ${props => props.selectedCancel ? "#FFFFFF" : "#52B6FF"};
    font-size: 16px;
}
`
const Save= styled.div`
background-color:  ${props => props.selectedSave ? "#52B6FF" : "#FFFFFF"};
width: 84px;
height: 35px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 16px;
h1{
    color: ${props => props.selectedSave ? "#FFFFFF" : "#52B6FF"};
    font-size: 16px;
}
`