import React from 'react'
import styled from 'styled-components'
import { SearchBar } from './SearchBar';
import { TodayWeather } from './TodayWeather';


const SidebarContainer = styled.div`

    display: flex;
    padding: 30px;
    flex-direction: column;
    flex-basis: 25%;
    max-width: 20%;
`;

export const Sidebar = () => {
    return (
        <>
            <SidebarContainer>
                <SearchBar />
                <TodayWeather/>
            </SidebarContainer>
        </>  
    )
}
