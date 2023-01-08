import React from 'react'
import styled from "styled-components/macro"

import { maxWidth, padding, spacing } from '../ob-style'
import { useViewport } from '../ViewportProvider'
import PhotoGallery from './PhotoGallery';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Badge from '@mui/material/Badge';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import Spacer from './Spacer'
import Indicator from './Indicator';

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
    z-index: 99;
    cursor: pointer;
    opacity: 1;
    //transition: opacity 0.3s ease;
`;

const Wrapper = styled.div`
    position: relative; 
    cursor: pointer;
    user-select: none;
    //&:hover ${LikeButton} {
    //    opacity: 1;
    //    transition: opacity 0.3s ease;
    //}
`;

const PhotoGallerySection = styled.div`

`;

const InfoSection = styled.div`
    position: relative; 
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

const Cell = styled.div`
    direction: rtl; 
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start; 
    direction: rtl; 
`

const CarModel = styled.div`
    font-size: 15px;
    line-height: 19px;
    color: #222222;
    font-weight: 700;
    direction: rtl; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start; 
`;

const Rank = styled.div`
    position: absolute; 
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`;

const Score = styled.div`
    font-size: 15px;
    line-height: 19px;
    color: white;
    font-weight: 600;
    background-color: #FF385C;
    border-radius: 5px;
    padding: 0px 5px;
`;

const Insight = styled.div`
    direction: rtl;
`

const SubModel = styled.div`
    font-size: 15px;
    line-height: 19px;
    color: #717171;
    font-weight: 500;
`;

const Price = styled.div`
    font-size: 15px;
    line-height: 19px;
    color: #222222;
    font-weight: 700;
    direction: rtl; 
`;

const Downprice = styled.div`
    direction: rtl; 
    display: flex;
    flex-direction: row; 
    span {
        font-size: 15px;
        line-height: 19px;
        color: #2bc48a;
        font-weight: 700;
        direction: rtl;         
    }
`;

const Usage = styled.div`
    direction: rtl; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start; 
    color: #717171;
    align-items: center;
`;

const Hand = styled.div`
    direction: rtl; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Millage = styled.div`
    direction: rtl; 
    display: flex;
    flex-direction: row;
    justify-content: flex-start; 
`;

const Location = styled.div`
    display: flex;
    flex-direction: row;
    direction: rtl;
    font-size: 15px;
    color: #717171;
`;

/*
const Indicator = styled.div`
    align-self: flex-start;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #2bc48a;
    font-size: 12px;
    font-weight: 700;
    img {
        width: 16px;
    }
`;
*/

const IndicatorBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HAND_CAPTION = [
    'ראשונה',
    'שנייה',
    'שלישית',
    'רביעית',
    'חמישית',
    'שישית',
    'שביעית',
    'שמינית',
    'תשיעית',
    'עשירית ומעלה'
]

const CarCard = ({manifacturer, model, submodel, year, hand, mileage, location, images, indicators}) => {

    const computeMileageCaption = (mileage) => {
        return mileage >= 1000 ? (
            <>
                <span>{mileage.slice(0, -3)}</span>
                <Spacer width={'5px'}/>
                <span>אלף ק״מ</span>
            </>
        ) : (
            <>
                <span>{mileage}</span>
                <Spacer width={'5px'}/>
                <span>ק״מ</span>
            </>
        )
    }

    const computeHandCaption = (hand) => {
        return HAND_CAPTION[hand]
    }

    return (
        <Wrapper>
            <LikeButton>
                <LikeButtonInner>
                    <img src="/assets/otoboto/like.svg"/>
                    <FavoriteBorderIcon sx={{color: 'white', position: 'absolute', top: '5px', right: '5px', fontSize: '26px'}}/>
                </LikeButtonInner>
            </LikeButton>
            <PhotoGallerySection>
                <PhotoGallery photos={images}/>
            </PhotoGallerySection>
            <Spacer height={spacing.spacing3}/>
           <InfoSection>
               <Row>
                    <CarModel>
                        <span>{manifacturer}</span>
                        <Spacer width={"5px"}/>
                        <span>{model}</span>
                        <Spacer width={"5px"}/>
                        <span>{year}</span>
                    </CarModel>
                    <Spacer width={'12px'}/> 
                    <IndicatorBox>
                        {true && indicators && indicators.find(indicator => indicator.code === 'SAFTEY') && 
                            (<Indicator icon={<VerifiedUserOutlinedIcon/>} label={"בטיחותי"} color={"#79589F"}/>)}
                    </IndicatorBox>
                </Row>
               <Spacer height={spacing.spacing1}/>
               <Row>
                   <SubModel>
                        <span>{submodel}</span>
                   </SubModel>
                   <Spacer width={'12px'}/> 
                    <IndicatorBox>
                       {false && indicators && indicators.find(indicator => indicator.code === 'POWERFULL') && 
                            (<Indicator icon={<SettingsSuggestOutlinedIcon/>} label={"עוצמתי"} color={"#042759"}/>)}
                    </IndicatorBox>                   
               </Row>
               <Usage>
                   <Hand>
                       <span>יד</span>
                       <Spacer width={'5px'}/>
                       <span>{computeHandCaption(hand)}</span>
                   </Hand>, 
                   <Spacer width={'3px'}/>
                   <Millage>{computeMileageCaption(mileage)}</Millage>
                   <Spacer width={'10px'}/>
                   <IndicatorBox>
                       {false && indicators && indicators.find(indicator => indicator.code === 'AS_NEW') && 
                            (<Indicator icon={<img src={"/assets/otoboto/sparkling.png"}/>} label={"כמו חדש"} color={"#2bc48a"}/>)}
                    </IndicatorBox>
               </Usage>
               
               <Location>
                   <span>{location}</span>
                </Location>
                <Spacer height={spacing.spacing2}/>
               <Row>
                    <Price>
                        165,000 ₪ 
                    </Price>
                    <Spacer width={'10px'}/> 
                    {true && indicators && indicators.find(indicator => indicator.code === 'DOWN_PRICE') && (
                        <Downprice>
                            <KeyboardDoubleArrowDownIcon fontSize={'small'} sx={{color: '#2bc48a'}}/>
                            <span>14%</span>
                        </Downprice> 
                    )}
                </Row>
                <Rank>
                    <Score>
                        4.8
                    </Score>
                    <Spacer width={'10px'}/>
                    <Insight>
                        {indicators && indicators.find(indicator => indicator.code === 'AS_NEW') && 
                                (<Indicator icon={<img src={"/assets/otoboto/sparkling.png"}/>} label={"כמו חדש"} color={"#2bc48a"}/>)}
                    </Insight>                         
                </Rank>                               
           </InfoSection>
        </Wrapper>
    )
}

export default CarCard;