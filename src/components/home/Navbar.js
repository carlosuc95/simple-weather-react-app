import React from 'react'
import styled from 'styled-components'
import { Title, Typography } from '../typography';

const NavbarComponent = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const NavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
   
`; 

const Item = styled.li`
    margin-right: 20px;
`;



export const Navbar = () => {
    return (
         <NavbarComponent>
             <NavMenu>
                <Item>
                     <a href='#'><Title fontSize="2rem">Week</Title></a>
                </Item>
                <Item>
                     <a href='#'><Title fontSize="2rem">Today</Title></a>
                </Item>
             </NavMenu>
             <NavMenu>
                <Item>
                     <a href='#'><Typography fontSize="2rem">C°</Typography></a>
                </Item>
                <Item>
                     <a href='#'><Typography fontSize="2rem">F°</Typography></a>
                </Item>
             </NavMenu>
         </NavbarComponent>
    )
}
