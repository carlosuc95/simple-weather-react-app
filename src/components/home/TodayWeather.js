import React from 'react'
import styled from 'styled-components';
import Image from "../image";
import { Title, Typography } from '../typography';
import { GiRaining } from "react-icons/gi";
import { AiFillCloud } from "react-icons/ai";
import { getDayName } from '../helpers/getDayName';
import { getHour } from '../helpers/getHour';

const ImgWrapper = styled.div`
    position: ${ props => props.position};
    display: flex;
    justify-content:center;
    margin-top: 50px;
    width: 100%;
`;

const DataWrapper = styled.div`
    position: ${ props => props.position};
    display: flex;
    flex-direction: ${ props => props.flexDirection};
    align-items: center;
    width: 100%;    
    padding: ${ props => props.padding};
    margin: ${ props => props.margin};
    border-bottom: ${ props => props.borderBottom};
`;

export const TodayWeather = ({state, selectedCity}) => {

    const {currentConditions} = state;

    const {data} = currentConditions;

    return (
        <>
            <ImgWrapper>
                <Image 
                    src={`https://developer.accuweather.com/sites/default/files/${data.icon >= 10 ? data.icon : "0" + data.icon}-s.png`}
                    width="80%"
                    alt="weather-icon"
                />                
            </ImgWrapper>
            <DataWrapper padding="10px">
                <Title 
                    fontSize="100px"
                    fontWeight={400}
                    color="#444"
                >
                    {data.temperature}
                </Title>    
            </DataWrapper>
            <DataWrapper padding='10px 20px' borderBottom="1px solid #eee">
                <Typography
                    fontSize="1.5rem"
                    margin="0px 15px 0px 0px"
                >{getDayName(data.time)}
                </Typography>
                
                <Typography
                    fontSize="1.5rem"
                    color="#a09595"
                    >{getHour(data.time)}
                </Typography>
            </DataWrapper>
            <DataWrapper padding="25px 20px">
                <AiFillCloud/>
                <Typography
                    fontSize="1rem"
                    color="#a09595"
                    margin="0 0 0 18px"
                >{data.weatherText}
                </Typography>
            </DataWrapper>           
            <DataWrapper padding="20px 20px">
                <GiRaining/>
                <Typography
                    fontSize="1rem"
                    color="#a09595"
                    margin="0 0 0 18px"
                >{data.precipitation === null ? 'No precipitation' : data.precipitation}
                </Typography>
            </DataWrapper>

            <DataWrapper flexDirection="column" margin="80px 0 0 0">     
                <Title fontSize="3rem" textAlign="center">{(selectedCity) ||  "Santiago" }</Title>
            </DataWrapper>
            
        </>
    )
}
