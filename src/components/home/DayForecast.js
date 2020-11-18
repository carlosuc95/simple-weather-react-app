import React from 'react'
import styled from 'styled-components';
import { getDayName } from '../helpers/getDayName';
import Image from '../image';
import { Title } from '../typography';

const DayForecastContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    flex-basis: 20px;
    background-color: white;
    margin-right: 10px;
    border-radius: 20px;

`;
const Wrapper = styled.div`
    display: ${props => props.display};
    margin: 10px 0px;
`;


export const DayForecast = ({tmin, tmax, date, icon}) => {

   
    return (
        <DayForecastContainer>
            <Wrapper>
                <Title>{getDayName(date)}</Title>
            </Wrapper>
            <Wrapper>
                <Image
                    src={`https://developer.accuweather.com/sites/default/files/${icon >= 10 ? icon : "0" + icon}-s.png`}
                    alt="weather-icon"
                />
            </Wrapper>
            <Wrapper display='flex'>
                <Title>{tmax}</Title>
                &nbsp;
                &nbsp;
                <Title color="#A09595">{tmin}</Title>
            </Wrapper>
        </DayForecastContainer>
    )
}
