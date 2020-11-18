import React from 'react'
import styled from 'styled-components';
import { Title } from '../typography';
import { BasicHighlight } from './BasicHighlight';

const HighlightContainer = styled.div`

    display: flex;
    flex-direction: column;
    flex-basis: 250px;
    background-color: white;
    flex-grow: 1;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 20px 30px;
    border-radius: 20px; 
`;


export const Highlight = ({title, value, status}) => {
    return (
        <HighlightContainer>
            <Title fontSize="1.2rem" color="#A09595">{ title }</Title>
            <BasicHighlight value={value} status={status} />            
        </HighlightContainer>
    )
}
