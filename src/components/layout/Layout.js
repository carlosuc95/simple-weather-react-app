import React from 'react'
import styled from 'styled-components';

const Container = styled.div`

    width: 90%;
    height: auto;
    min-height: 200px;
    border: 1px solid #eee;
    margin: 40px auto;
    box-shadow: 0px 0px 10px #eee;
    border-radius: 50px;
    
`;

export const Layout = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}
