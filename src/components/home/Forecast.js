import React from 'react'
import styled from 'styled-components';
import { Title } from '../typography';
import { Highlights } from './Highlights';
import { Navbar } from './Navbar';
import { WeekForecast } from './WeekForecast';

const ForecastContainer = styled.div`

    background-color: #eee;
    display: flex;
    flex-direction: column;
    flex-basis: 75%;
    border-radius: 0 50px 50px 0;
    padding: 30px;
`;


export const Forecast = ({state}) => {
    
    
    const {currentConditions, forecast} = state;

    return (
        <ForecastContainer>
            <Navbar/>
            <WeekForecast forecast={forecast}/>
            <Title fontSize="2rem">Today's Highlights</Title>
            <Highlights currentConditions={currentConditions}/>

        </ForecastContainer>
    
    )
}
