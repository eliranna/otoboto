import React from 'react'
import styled from "styled-components/macro"

import { maxWidth, colors, spacing } from '../ob-style'
import { useViewport } from '../ViewportProvider'
import PhotoGallery from './PhotoGallery';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GradeIcon from '@mui/icons-material/Grade';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Badge from '@mui/material/Badge';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import CribIcon from '@mui/icons-material/Crib';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import ShieldIcon from '@mui/icons-material/Shield';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
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
    border-radius: 5.8px 5.8px 0 5.8px;
    text-align: center;
    display: flex;
    align-items: center;
    background-color: ${colors.accent};
    color: white;
    font-weight: 700;
    font-size: 16px;
    align-items: center;
    display: flex;
    height: 32px;
    justify-content: center;
    min-width: 32px;
    vertical-align: baseline;
    width: 32px;
`;

const Insight = styled.div`
    direction: rtl;
    //position: absolute;
    //left: 0px; 
    color: ${colors.accent};
    //background-color: white;
    //border: 1px solid ${colors.accent};
    border-radius: 5px;
    font-size: 15px;
    //top: 45px;
    white-space: nowrap;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-start;
`

const InsightInner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end; 
    align-items: center;
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
        color: ${colors.accent};
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

const BotIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 6px;
    margin-top: 1px;
    img {
        width: 15px;
        align-self: center;
    }
`

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

const CarCard = ({manifacturer, model, submodel, year, hand, mileage, location, images, indicators, isLiked, onLiked}) => {

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

    isLiked = false;

    const likedButtonStyle = {
        position: 'absolute',
        top: '5px', 
        right: '5px', 
        fontSize: '26px',
        color: isLiked ? colors.accent : 'rgba(0,0,0,0.3)'
    }

    return (
        <Wrapper>
            <LikeButton onClick={onLiked}>
                <LikeButtonInner>
                    <FavoriteIcon sx={likedButtonStyle}/>
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
                </Row>
               <Spacer height={spacing.spacing1}/>
               <Row>
                   <SubModel>
                        <span>{submodel}</span>
                   </SubModel>
                   <Spacer width={'12px'}/>                   
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
                            <KeyboardDoubleArrowDownIcon fontSize={'small'} sx={{color: colors.accent}}/>
                            <span>{indicators.find(indicator => indicator.code === 'DOWN_PRICE').percentage}</span>
                        </Downprice> 
                    )}
                </Row>
                <Rank>
                    <Score>
                        <span>4.8</span>                             
                    </Score>
                    <Spacer width={'8px'}/>
                    {true && indicators && indicators.find(indicator => indicator.code === 'AS_NEW') && (
                        <Insight>
                            <InsightInner>               
                                <div>כמו חדש</div>
                            </InsightInner>   
                        </Insight>   
                    )} 
                    {true && indicators && indicators.find(indicator => indicator.code === 'BEST_FOR_BABY') && (
                        <Insight>
                            <InsightInner>              
                                <div>מושלם לתינוק</div>
                            </InsightInner>   
                        </Insight>   
                    )}  
                    {true && indicators && indicators.find(indicator => indicator.code === 'SAFTEY') && (
                        <Insight>
                            <InsightInner>               
                                <div>בטיחותי</div>
                            </InsightInner>   
                        </Insight>   
                    )}  
                    {true && indicators && indicators.find(indicator => indicator.code === 'SPACE') && (
                        <Insight>
                            <InsightInner>               
                                <div>מרווח</div>
                            </InsightInner>   
                        </Insight>   
                    )} 
                    {true && indicators && indicators.find(indicator => indicator.code === 'FAMILY') && (
                        <Insight>
                            <InsightInner>              
                                <div>לילדים</div>
                            </InsightInner>   
                        </Insight>   
                    )}                                                                                                                                              
                </Rank>                               
           </InfoSection>
        </Wrapper>
    )
}

export default CarCard;