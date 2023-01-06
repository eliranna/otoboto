import React from 'react'
import styled from "styled-components/macro"

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Arrow = styled.div`
    border-radius: 50%;
    border: 0;
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
    padding: 0;
    margin: 0;
    background-clip: padding-box;
    background-color: rgba(255,255,255,0.9);
    border-color: rgba(0,0,0,0.08);
    box-shadow: 0 0 0 1px transparent,0 0 0 4px transparent,var(--e-swdx-p);
    transition: transform 0.25s ease;
    position: absolute;
    z-index: 999;
    margin-top: auto;
    margin-bottom: auto;
    top: 0;
    bottom: 0;
    height: 32px;
    width: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
`

const ArrowRight = styled(Arrow)`
    right: 12px;
`

const ArrowLeft = styled(Arrow)`
    left: 12px;
`

const Wrapper = styled.div`
    .carousel .control-dots {
        bottom: 2px;
    }
    .carousel .control-dots .dot {
        box-shadow: unset;
        width: 6px;
        height: 6px;
        margin: 0 4px;
    }

    &:hover ${Arrow} {
        opacity: 1;
        transition: opacity 0.3s ease;
    }
`;

const Photo = styled.div`
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    aspect-ratio: 20 / 19;
    border-radius: 15px;
`

const renderArrowPrev = (clickHandler, hasPrev, label) => {
    return hasPrev ? <ArrowRight onClick={clickHandler}><KeyboardArrowRightIcon/></ArrowRight> : null;
}
const renderArrowNext = (clickHandler, hasNext, label) => {
    return hasNext ? <ArrowLeft onClick={clickHandler}><KeyboardArrowLeftIcon/></ArrowLeft> : null;
}


const PhotoGallery = ({photos}) => {

    return (
        <Wrapper>
            <Carousel
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                selectedItem={photos?.length - 1}
                renderArrowPrev={renderArrowNext}
                renderArrowNext={renderArrowPrev}
                >
                {photos.map(photo => <Photo src={photo}/>)}
            </Carousel>
        </Wrapper>
    )
}

export default PhotoGallery;