import React from 'react'
import styled from "styled-components/macro"

import Page from '../ob-components/Page'
import CarCard from '../ob-components/CarCard'
import Grid from '../ob-components/Grid'

import { useStore, StoreProvider } from '../Store'

const EmptyBlockWrapper = styled.div`
    width: 100%;
    height: 100%;
`

const EmptyBlock = () => {
    return (
        <EmptyBlockWrapper>
        </EmptyBlockWrapper>
    )
}

const Explore = ({cars, onLiked}) => {

    const { openLoginModal } = useStore()

    const handleLiked = () => {
        openLoginModal(true)
    }

    let arr = cars;
    if (cars.length < 10) {
        arr = cars.concat(Array(10 - cars.length).fill(null))
    }

    return (
        <Page>
            <Grid>
                {arr.map(carInfo => carInfo != null ? <CarCard {...carInfo} onLiked={handleLiked}/> : <EmptyBlock/> )}
            </Grid>
        </Page>
    )
}

export default Explore;