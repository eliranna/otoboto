import React, {useState, useRef, useEffect} from 'react'
import styled from "styled-components/macro"

import { maxWidth, fontSize, spacing } from '../ob-style';
import {useViewport} from '../ViewportProvider';

import BubblePanel from './BubblePanel';
import Spacer from './Spacer'

import CategoriesSelectionPanel from './CategoriesSelectionPanel'
import BudgetSelectionPanel from './BudgetSelectionPanel';
import LocationSelectionPanel from './LocationSelectionPanel'
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined'

import { LOCATIONS } from '../locations';
import { CATEGORIES } from '../categories';

import SearchIcon from '@mui/icons-material/Search';

const CAPTION_ALL_CATEGORIES = "בחר קטגוריות";
const CAPTION_ALL_PRICES = "הכנס תקציב";
const CAPTION_ALL_LOCATIONS = "חפש יישובים";


const Wrapper = styled.div`
    direction: rtl;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 40px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%);
    transition: box-shadow 0.2s ease;
    height: 66px;
    display: flex;
    justify-content: space-between; 
    :hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    }
`;

const Cell = styled.div`
    background: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
    text-align: inherit;
    border: 1px solid transparent;
    border-radius: 4px;
    margin: -1px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 170px;
`

const CellWide = styled(Cell)`
    min-width: 200px;
`

const SearchCell = styled(Cell)`
    align-items: flex-end;
    width: 35px;
    flex-grow: 0;
    min-width: 35px;
`

const Seperator = styled.div`
    background-color: #dddddd;
    height: 100%;
    width: 1px;
`

const SearchButton = styled.div`
    background-color: #FF385C;
    margin: 7px 0 7px 7px;
    border-radius: 50%;
    padding: 16px;
    height: 48px;
    width: 48px;
    color: white;
    transition: all 0.2s cubic-bezier(0.35,0,0.65,1);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    :hover {
        background-color: #E00B41;
    }
    img {
        display: block;
        fill: none;
        width: 25px;
        stroke: currentcolor;
        stroke-width: 4;
        overflow: visible;
        filter: invert(1);
        line-height: 16px;
    }
`

const ClearInputButton = styled.div`
    border-radius: 50%;
    width: 24px;
    height: 24px;
    transition: transform 0.25s ease;
    border-radius: 50%;
    border: 0;
    background-color: #EBEBEB;
    cursor: pointer;
    position: absolute;
    left: 29px;
    top: 20px;
    text-align: center;
    line-height: 27px;
    display: none;
`

const CellContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    padding-right: 36px;
    position: relative;
    &:hover ${ClearInputButton} {
        display: block;
    }
`

const CellTitle = styled.div`
    font-size: ${fontSize.fontSize0};
    font-weight: 700; 
`

const CellValue = styled.div`
    font-size: ${fontSize.fontSize1};
    font-weight: 500;
    color: ${props => props.empty ? 'gray' : null}
`

const InvisibleInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: ${fontSize.fontSize1};
    font-weight: 500;
    padding: 0px;
`

const BubblePanelInnerPane = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right; 
`

const BubblePanelTitle = styled.div`
    font-size: ${fontSize.fontSize1};
    font-weight: 600;
    text-align: right;
`

const BubblePanelDescription = styled.div`
    font-size: ${fontSize.fontSiz1};
    font-weight: 400;
    color: #717171;
    text-align: right;
`

const BudgetSelectionPanelPane = styled.div`
    padding-right: 48px;
    padding-left: 48px;
    display: flex;
    justify-content: center;
`

const DesktopSearch = ({searchParams, onSearchParamsUpdate, onSearch}) => {

    const locationInputRef = useRef(null);
    const { isTablet } = useViewport();

    const [isCategoriesDialogOpen, openCategoriesDialog] = useState(false)
    const [isPriceDialogOpen, openPriceDialog] = useState(false)
    const [locationSuggestions, setLocationSuggestions] = useState([])
    const [locationInputValue, setLocationInputValue] = useState(searchParams?.location || "")

    useEffect(() => {
        setLocationInputValue(searchParams?.location || "")
    }, [searchParams])

    const showCategoriesDialog = () => {
        openCategoriesDialog(true)
    }

    const closeCategoriesDialog = () => {
        openCategoriesDialog(false)
    }

    const showPriceDialog = () => {
        openPriceDialog(true)
    }

    const closePriceDialog = () => {
        openPriceDialog(false)
    }

    const closeLocationDialog = () => {
        setLocationSuggestions([])
    } 

    const handleClear = () => {
        onSearchParamsUpdate({...searchParams, location: ""})
        setLocationInputValue("")
    }

    const computeCategoriesString = (categories) => {
        const categoriesTitles = CATEGORIES.filter(category => categories.indexOf(category.id) != -1).map(category => category.title);
        if (categoriesTitles.length === 0) {
            return CAPTION_ALL_CATEGORIES
        } else if (categoriesTitles.length === 1) {
            return categoriesTitles[0]
        } else {
            return `${categoriesTitles.length} קטגוריות`
        }
    }

    const computeBudgetCaption = (price) => {
        if (!price) {
            return 'הכנס תקציב'
        }
        if (price === 250) {
            return `${price} אלף שקלים ומעלה`
        }
        return `כ- ${price} אלף שקלים`
    }

    const updateCategoriesSelection = (categories) => {
        onSearchParamsUpdate({...searchParams, categories})
    }

    const updateBudgetSelection = (budget) => {
        onSearchParamsUpdate({...searchParams, budget})
    }

    const handleLocationSelection = (location) => {
        closeLocationDialog()
        onSearchParamsUpdate({...searchParams, location})
        setLocationInputValue(location)
    }

    const getLocationSuggestions = (term) => {
        const suggestions = LOCATIONS.filter(location => location.startsWith(term)).slice(0, 5);
        setLocationSuggestions(suggestions)
    }

    const handleLocationClick = () => {
        locationInputRef.current.focus()
        setLocationSuggestions(LOCATIONS.slice(0, 5))
    }

    return (
        <Wrapper>
            <Cell>
                <CellContent onClick={showCategoriesDialog}>
                    <CellTitle>
                        סוג הרכב
                    </CellTitle>
                    <CellValue empty={!searchParams?.categories || searchParams?.categories.length === 0}>
                        {computeCategoriesString(searchParams?.categories || [])}
                    </CellValue>
                </CellContent>
                <BubblePanel show={isCategoriesDialogOpen} onClickOutside={closeCategoriesDialog} width={"431px"}>
                    <BubblePanelInnerPane>
                        <BubblePanelTitle>
                            בחר את קטגוריית הרכב
                        </BubblePanelTitle>
                        <Spacer height={spacing.spacing1}/>
                        <BubblePanelDescription>
                            ניתן לבחור מספר קטגוריות
                        </BubblePanelDescription>
                        <Spacer height={spacing.spacing4}/>
                        <CategoriesSelectionPanel initialSelectedCategories={searchParams?.categories} onCategoriesChange={updateCategoriesSelection}/>
                    </BubblePanelInnerPane>
                </BubblePanel>
            </Cell>
            <Seperator/>
            <CellWide>
                <CellContent onClick={showPriceDialog}>
                    <CellTitle>
                        מחיר משוער
                    </CellTitle>
                    <CellValue empty={!searchParams?.budget}>
                        {computeBudgetCaption(searchParams?.budget)}
                    </CellValue>                    
                </CellContent>
                <BubblePanel show={isPriceDialogOpen} onClickOutside={closePriceDialog} width={"431px"}>
                    <BubblePanelTitle>
                        מהו התקציב המשוער?
                    </BubblePanelTitle>
                    <Spacer height={spacing.spacing1}/>
                    <BubblePanelDescription>
                        נציג בפניכם רק רכבים שמחירם קרוב לתקציבכם
                    </BubblePanelDescription> 
                    <Spacer height={spacing.spacing8}/>
                    <BudgetSelectionPanelPane>
                        <BudgetSelectionPanel budget={searchParams?.budget} onChange={updateBudgetSelection}/>
                    </BudgetSelectionPanelPane>                   
                </BubblePanel>
            </CellWide>
            <Seperator/>
            <Cell>
                <CellContent onClick={handleLocationClick}>
                    <CellTitle>
                        אזור מכירה
                    </CellTitle>
                    <CellValue>
                        <InvisibleInput ref={locationInputRef} type="text" value={locationInputValue} placeholder={CAPTION_ALL_LOCATIONS} onChange={e => {setLocationInputValue(e.target.value); getLocationSuggestions(e.target.value)}}/>
                    </CellValue>  
                    {locationInputValue && (<ClearInputButton onClick={handleClear}><ClearOutlinedIcon sx={{ fontSize: 16 }}/></ClearInputButton>)}
                </CellContent> 
                <BubblePanel show={locationSuggestions.length > 0} onClickOutside={closeLocationDialog} width={"350px"} xloc={isTablet() ? ['-149px', '237px'] : null}>
                    <LocationSelectionPanel suggestions={locationSuggestions} onSelect={handleLocationSelection}/>
                </BubblePanel>
            </Cell>
            <SearchCell>
                <SearchButton onClick={onSearch}>
                    <SearchIcon/>
                </SearchButton>
            </SearchCell>
        </Wrapper>
    )
}

export default DesktopSearch;