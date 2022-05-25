import styled from "styled-components"

export default function Displaying(props){
    return(
        <>
    <DisplayingWrapper>
        {props.children}
    </DisplayingWrapper>
        </>
    )
}
const DisplayingWrapper= styled.div`
padding:10px;

`
