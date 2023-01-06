import React, {useState, useEffect} from 'react'
import styled from "styled-components/macro"
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import {fontSize, spacing} from '../ob-style'

import Spacer from './Spacer'

const Wrapper = styled.div`
    text-align: right;
`

const PlaceIcon = styled.div`
    -webkit-box-pack: center !important;
    -webkit-box-align: center !important;
    font-size: 17px !important;
    background-color: rgb(235, 235, 235) !important;
    border-radius: 12px !important;
    min-width: 48px !important;
    height: 48px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
`

const Location = styled.div`
    height: 64px;
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0px 8px 32px;
    cursor: pointer;
    :hover {
        background-color: rgb(247,247,247);
        border-color: rgb(247,247,247);
    }
`

const LocationSelectionPanel = ({suggestions, onSelect}) => {

    return (
        <Wrapper>
            {suggestions.map((item, index) => {
                return (
                    <Location key={index} onClick={() => onSelect(item)}>
                        <PlaceIcon><PlaceOutlinedIcon/></PlaceIcon> <Spacer width={spacing.spacing4}/> <span>{item}</span>
                    </Location>
                )
            })}
        </Wrapper>
    )
}

export default LocationSelectionPanel;