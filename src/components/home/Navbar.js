import React from 'react'
import styled from 'styled-components'
import { Title, Typography } from '../typography';

const NavbarComponent = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const NavMenu = styled.ul`

    list-style: none;
    padding: 0 15px;
   
`; 

const Item = styled.li`
    
    background-color: #444;
    padding: 2px 8px;
    border-radius: 70%;
`;



export const Navbar = () => {
    return (

        <NavbarComponent>
            <Title textDecoration="underline" fontSize="2rem">Week</Title>           
            <NavMenu>
                <Item>
                     <Typography color="white" fontSize="2rem">C°</Typography>
                </Item>
            </NavMenu>
         </NavbarComponent>
    )
}
