import React from 'react'
import styled from "styled-components/macro"

import Page from '../ob-components/Page'
import CarCard from '../ob-components/CarCard'
import Grid from '../ob-components/Grid'

const Explore = () => {
    return (
        <Page>
            <Grid>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
                <CarCard/>
            </Grid>
        </Page>
    )
}

export default Explore;