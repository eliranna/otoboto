import React from 'react'
import styled from "styled-components/macro"

import Spacer from './Spacer'

const Wrapper = styled.div`
    display: flex;
    align-self: flex-start;
    align-items: center;
    flex-direction: row;
    color: ${props => props.color};
    font-weight: 700;
    height: 18px;
    img {
        width: 16px;
    }
    svg {
        width: 16px;
    }
    span {
        font-size: 14px;
    }
`;

const Indicator = ({children, color, icon, label}) => {
    return (
        <Wrapper color={color}>
            {icon}
            <Spacer width={'2px'}/>
            <span>{label}</span>
        </Wrapper>
    )
}

export default Indicator;