import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import  Srch from "@styled-icons/boxicons-regular/Search";
import { BiSearch } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import { getCitiesNCodes } from '../services/accuweather';
import Select from 'react-select'



const Container = styled.div`
    display: flex;
    margin-bottom: 20px;
    width:100%;
    
`;

const WrapperInput = styled.div`
    width: 70%;
    padding: 10px;
    font-size: 15px;
    font-weight: 500;
    text-align: center; 
    border-radius: 90px;
    outline: none;
    border: 0px;
    text-align: left;
`;

const Icon = styled(BiSearch)`
    
    padding: 15px 10px;
    font-size: 30px;

`;

const RemoveButton = styled.button`
     padding: 10px;
     background-color: transparent;
     border: none;
`;

export const SearchBar = ({state, setSelectedCity}) => {



    const [options, setOptions] = useState([])
    
    const {reset} = state;

    const handleChange = (options) => {
        reset();
        setSelectedCity(options);
    };
    
    useEffect(() => {

        getCitiesNCodes()
        .then(options => {
            
            setOptions(options);
        });
      
    }, [])
    

    return (
        <Container>
            <Icon />
            <WrapperInput >
                <Select
                    options={options} 
                    placeholder="Search for places..."
                    onChange={ handleChange }
                    />
            </WrapperInput>
            <RemoveButton>
                <GiCancel size="1.5rem" />
            </RemoveButton>
        </Container>
    )
}
