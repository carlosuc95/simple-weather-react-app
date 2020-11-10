import React from 'react'
import styled from 'styled-components'
// import  Srch from "@styled-icons/boxicons-regular/Search";
import { BiSearch } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";


const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
    width:100%;
    
`;

const Input = styled.input`
    width: 70%;
    padding: 10px;
    font-size: 20px;
    font-weight: 500;
    text-align: center; 
    border-radius: 90px;
    outline: none;
    border: 0px;
    text-align: left;
`;

const Icon = styled(BiSearch)`
    
    padding: 10px;
    font-size: 30px;

`;

const RemoveButton = styled.button`
     padding: 10px;
     background-color: transparent;
     border: none;
`

// const Search = styled(Srch)`
//     color: blue;
// `


export const SearchBar = () => {
    return (
        <Container>
            <Icon />
            <Input placeholder="Search for places..."/>
            <RemoveButton>
                <GiCancel size="1.5rem" />
            </RemoveButton>
        </Container>
    )
}
