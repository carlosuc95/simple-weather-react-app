import React from 'react'
import styled from 'styled-components';
import { Highlight } from './Highlight';

const HighlightsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 60px 0px;
`;


export const Highlights = ({currentConditions}) => {

    const {data} = currentConditions;

    const {uvIndex,uvIndexText, windStatus, pressure, humidity, visibility} = data;
    return (
        <HighlightsContainer>
            <Highlight title="UV Index" value={uvIndex} status={uvIndexText}/>
            <Highlight title="Wind Status" value={windStatus} />
            <Highlight title="Pressure" value={pressure} />
            <Highlight title="Humidity" value={humidity} />
            <Highlight title="Visibility" value={visibility} />
            <Highlight title="Air Quality" value={'nn'} />
        </HighlightsContainer>
    )
}
