import React from 'react'
import styled from 'styled-components';
import { DayForecast } from './DayForecast';

const WeekForecastContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 60px 0px;
`;

export const WeekForecast = ({forecast}) => {
    
    const {data} = forecast;

    return (
        <WeekForecastContainer>

            {   data.map( f =>
                    <DayForecast key={f.date} tmin={f.tempetureMin} tmax={f.tempetureMax} date={f.date} icon={f.icon} />  
                )
            }
        </WeekForecastContainer>
    )
}
