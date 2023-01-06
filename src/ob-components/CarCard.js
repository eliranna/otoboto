import React from 'react'
import styled from "styled-components/macro"

import { maxWidth, padding, spacing } from '../ob-style'
import { useViewport } from '../ViewportProvider'
import PhotoGallery from './PhotoGallery';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Spacer from './Spacer'

const PHOTOS = [
    "https://img.yad2.co.il/Pic/202301/03/1_3/o/y2_8_02084_20230103204938.jpeg",
    "https://img.yad2.co.il/Pic/202301/03/1_3/o/y2_9_08133_20230103204951.jpeg",
    "https://img.yad2.co.il/Pic/202301/03/1_3/o/y2_10_03125_20230103194603.jpeg",
    "https://img.yad2.co.il/Pic/202301/03/1_3/o/y2_4_05655_20230103204921.jpeg",
]

const LikeButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 9999;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s ease;
`;

const Wrapper = styled.div`
    position: relative; 
    cursor: pointer;
    &:hover ${LikeButton} {
        opacity: 1;
        transition: opacity 0.3s ease;
    }
`;

const PhotoGallerySection = styled.div`

`;

const InfoSection = styled.div`

`;

const LikeButtonInner = styled.div`
    position: relative;
    img {
        position: absolute;
        top: 5px;
        right: 5px;  
        width: 26px;      
    }
`;

const Title = styled.div`
    font-size: 15px;
    line-height: 19px;
    color: #222222;
    font-weight: 700;
`;

const SubTitle = styled.div`
    font-size: 15px;
    line-height: 19px;
    color: #717171;
    font-weight: 500;
`;

const CarCard = () => {

    return (
        <Wrapper>
            <LikeButton>
                <LikeButtonInner>
                    <img src="/assets/otoboto/like.svg"/>
                    <FavoriteBorderIcon sx={{color: 'white', position: 'absolute', top: '5px', right: '5px', fontSize: '26px'}}/>
                </LikeButtonInner>
            </LikeButton>
            <PhotoGallerySection>
                <PhotoGallery photos={PHOTOS}/>
            </PhotoGallerySection>
            <Spacer height={spacing.spacing3}/>
           <InfoSection>
               <Title>
                2018 ניסאן קשקאי
               </Title>
               <Spacer height={spacing.spacing1}/>
               <SubTitle>
                   Acenta אוט' 1.2 (115 כ''ס)
               </SubTitle>
               <SubTitle>
                   רמת גן
               </SubTitle>
               <Spacer height={spacing.spacing2}/>
               <Title>
                    ₪ 165,000 
               </Title>
           </InfoSection>
        </Wrapper>
    )
}

export default CarCard;