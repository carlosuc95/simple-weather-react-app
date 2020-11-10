import React from 'react'
import styled from 'styled-components';
import Image from "../image";
import { Title, Typography } from '../typography';
import { GiRaining } from "react-icons/gi";
import { AiFillCloud } from "react-icons/ai";

const ImgWrapper = styled.div`
    display: flex;
    justify-content:center;
    margin-top: 50px;
    width: 100%;
`;

const DataWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;    
    padding: ${ props => props.padding};
    border-bottom: ${ props => props.borderBottom};
`;

export const TodayWeather = () => {
    return (
        <>
            <ImgWrapper>
                <Image 
                    src='https://developer.accuweather.com/sites/default/files/01-s.png'
                    width="80%"
                    alt="forecast img"
                />                
            </ImgWrapper>
            <DataWrapper padding="10px">
                <Title 
                    fontSize="100px"
                    fontWeight={400}
                    color="#444"
                >
                    12°C
                </Title>    
            </DataWrapper>
            <DataWrapper padding='10px 20px' borderBottom="1px solid #eee">
                <Typography
                    fontSize="1.5rem"
                    margin="0px 15px 0px 0px"
                >Monday, 
                </Typography>
                
                <Typography
                    fontSize="1.5rem"
                    color="#a09595"
                >16:00
                </Typography>
            </DataWrapper>
            <DataWrapper padding="25px 20px">
                <AiFillCloud/>
                <Typography
                    fontSize="1rem"
                    color="#a09595"
                    margin="0 0 0 18px"
                >Cloudy
                </Typography>
            </DataWrapper>           
            <DataWrapper padding="20px 20px">
                <GiRaining/>
                <Typography
                    fontSize="1rem"
                    color="#a09595"
                    margin="0 0 0 18px"
                >Rainy
                </Typography>
            </DataWrapper>
            <ImgWrapper>
                <Image 
                    src='https://canalveo.com/wp-content/uploads/2020/09/Nueva-York.jpeg'
                    width="100%"
                    borderRadius="20%"
                    alt="country img"
                />                
            </ImgWrapper>           
            
        </>
    )
}
