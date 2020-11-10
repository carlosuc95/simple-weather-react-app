import React from 'react'
import styled from 'styled-components'
import { Sidebar } from './Sidebar'

const HomeContainer = styled.div`

    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const HomeScreen = () => {
    return (
        <HomeContainer>
            <Sidebar/>
        </HomeContainer>
    )
}
