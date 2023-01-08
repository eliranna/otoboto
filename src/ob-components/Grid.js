import React from 'react'
import styled from "styled-components/macro"

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    padding: 10px;
    gap: 40px 24px;
    @media (min-width: 550px) {
        grid-template-columns: auto auto; 
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }  
    @media (min-width: 950px) {
        grid-template-columns: auto auto auto; 
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }  
    @media (min-width: 1128px) {
        grid-template-columns: auto auto auto auto; 
        grid-template-columns: repeat(4, minmax(0, 1fr));
    } 
    @media (min-width: 1640px) {
        grid-template-columns: auto auto auto auto auto; 
        grid-template-columns: repeat(5, minmax(0, 1fr));
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