import React from 'react'
import styled from "styled-components/macro"

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    padding: 10px;
    gap: 40px 24px;
    @media (min-width: 550px) {
        grid-template-columns: auto auto; 
    }  
    @media (min-width: 950px) {
        grid-template-columns: auto auto auto; 
    }  
    @media (min-width: 1128px) {
        grid-template-columns: auto auto auto auto; 
    } 
    @media (min-width: 1640px) {
        grid-template-columns: auto auto auto auto auto; 
    }    
`;

const Grid = ({children}) => {

    return (
        <Wrapper>
           {children}
        </Wrapper>
    )
}

export default Grid;