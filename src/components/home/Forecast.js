import React from 'react'
import styled from 'styled-components';
import { Navbar } from './Navbar';

const ForecastContainer = styled.div`

    background-color: #eee;
    display: flex;
    flex-direction: column;
    flex-basis: 75%;
    border-radius: 0 50px 50px 0;
    padding: 30px;
`;


export const Forecast = () => {
    return (
        <>
            <ForecastContainer>
                <Navbar/>
            </ForecastContainer>
        </>
    )
}
