import React, {useState } from 'react'
import styled from 'styled-components'
import { useFetch } from '../hooks/useFetch';
import { Forecast } from './Forecast';
import { Sidebar } from './Sidebar'


const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    
`;


export const HomeScreen = ({state, setSelectedCity, selectedCity}) => {
    
    return (
        <HomeContainer>
                <Sidebar state={state} setSelectedCity={setSelectedCity} selectedCity={selectedCity}/>
                <Forecast state={state} />
        </HomeContainer>
    )
}
