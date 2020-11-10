import React from 'react'
import styled from 'styled-components'
import { Forecast } from './Forecast';
import { Sidebar } from './Sidebar'

const HomeContainer = styled.div`

    display: flex;
    justify-content: space-between;
    
`;

export const HomeScreen = () => {
    return (
        <HomeContainer>
            <Sidebar/>
            <Forecast/>
        </HomeContainer>
    )
}
