import React, {useState, useEffect} from 'react'
import styled from "styled-components/macro"

import {fontSize, spacing} from '../ob-style'

import RangeSlider from './RangeSlider'
import Spacer from './Spacer'

const Wrapper = styled.div`
    text-align: right;
    width: 100%;
`

const RangeSliderPanel = styled.div`

`

const ValueDisplay = styled.div`
    font-size: ${fontSize.fontSize1};
    text-align: center;
    font-weight: 600;
    user-select: none;
`

const Title = styled.div`
    font-size: ${fontSize.fontSize1};
    font-weight: 600;
`

const Description = styled.div`
    font-size: ${fontSize.fontSiz1};
    font-weight: 400;
    color: #717171;
`

const ClearButton = styled.div`
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    text-decoration: underline;
`

const Comment = styled.div`
    color: #717171;
`

const BudgetSelectionPanel = ({budget, minPrice, maxPrice, onChange}) => {

    const [clickedOnClear, setClickedOnClear] = useState(false)

    const valueLabelFormat = value => {
        if (value < 250) {
            return `${value} אלף שקלים`
        }
        return `${value}+ אלף שקלים`
    }

    const computeBudgetCaption = value => {
        if (value === 250) {
            return `250 אלף ש״ח ומעלה`
        } else {
            return `כ- ${value} אלף שקלים`
        }
    }

    const handleClear = () => {
        setClickedOnClear(true)
        onChange(null)
    }

    return (
        <Wrapper>
            <RangeSliderPanel>
                <RangeSlider min={minPrice || 5} max={maxPrice || 250} value={budget || 5} valueLabelFormat={valueLabelFormat} onValueChange={e => onChange(e.target.value)}/>
            </RangeSliderPanel>
            <Spacer height={spacing.spacing4}/>
            <ValueDisplay>
                <Spacer height={spacing.spacing3}/>
                {budget ? computeBudgetCaption(budget) : (clickedOnClear ? <Comment>נציג בפניכם רכבים מכל המחירים</Comment> : null)}
                <Spacer height={spacing.spacing2}/>
                <ClearButton visible={budget && 'visible'} onClick={handleClear}>נקה</ClearButton>
            </ValueDisplay>
        </Wrapper>
    )
}

export default BudgetSelectionPanel;