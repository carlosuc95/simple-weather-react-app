import React from 'react'
import styled from 'styled-components'
import { Title } from '../typography'

const Wrapper = styled.div`
    display: flex;
    justify-content: ${ props => props.justifyContent};
    align-items: center;
    margin: ${ props => props.margin};

`;

export const BasicHighlight = ({value, status}) => {
    return (
        <>
            <Wrapper margin="30px 30px 30px 0" justifyContent="space-between">
                <Title fontSize="4rem" >{value}</Title>
            </Wrapper>
            <Wrapper>
                <Title fontSize="1rem">{status}</Title>
                &nbsp; &nbsp;               
            </Wrapper>
        </>
    )
}
