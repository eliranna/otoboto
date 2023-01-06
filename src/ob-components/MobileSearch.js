import React, {useState, useRef} from 'react'
import styled from "styled-components/macro"
import {CATEGORIES} from '../categories'

import SearchModal from './SearchModal'

import { maxWidth, fontSize, spacing } from '../ob-style';
import {useViewport} from '../ViewportProvider';

import SearchIcon from '@mui/icons-material/Search';

const SEARCH_INPUT_MAIN_CAPTION = 'חפשו רכבים'
const SEARCH_INPUT_DESC_CAPTION = 'בחרו קטגוריה, תקציב ואזור מכירה'

const Wrapper = styled.div`
    width: 100%;
    padding: 14px 24px 0 24px;
`

const SearchBox = styled.div`
    background: #ffffff;
    border: 0.5px solid rgba(0,0,0,0.08);
    box-shadow: 0 3px 10px rgb(0 0 0 / 10%);
    transform: translate3d(0,0,0);
    border-radius: 1000px;
    align-items: stretch;
    color: #222222;
    display: flex;
    justify-content: space-between;
    min-height: 56px;
    min-width: 285px;
`

const FiltersCell = styled.div`
    width: 56px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const FiltersButton = styled.div`
    border: 1px solid #dddddd;
    border-radius: 25px;
    margin: 0 10px;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 36px;
    justify-content: center;
    width: 36px;
    img {
        display: block;
        height: 16px;
        width: 16px;
        fill: #222222;
    }
`

const SearchBoxInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;  
`

const SearchIconBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60px;
    align-items: center;
    img {
        display: block;
        height: 16px;
        width: 16px;
        fill: currentcolor;
    }
`

const SearchBoxInputMainCaption = styled.div`
    font-size: 14px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 180px; 

`

const SearchBoxInputDescCaption = styled.div`
    font-size: 14px;
    color: #717171;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 180px; 
`


const MobileSearch = ({searchParams, onSearchParamsUpdate, onSearch}) => {

    const [isSearchModalOpen, openSearchModal] = useState(false)

    const handleSearch = searchParams => {
        openSearchModal(false)
        onSearch(searchParams)
    }

    const composeSearchCategoriesCaption = categories => {
        if (categories.length === 0) {
            return 'כל סוגי הרכבים';
        } 
        const categoriesTitles = categories.map(categoryId => CATEGORIES.find(item => item.id === categoryId).title)
        if (categoriesTitles.length > 2) {
            return `${categoriesTitles[0]} ועוד ${categories.length-1} קטגוריות`;
        } else {
            return categoriesTitles.join(', ');
        }
    }

    const composeSearchBudgetAndLocationCaption = (budget, location) => {
        let around; 
        let price;
        if (!location) {around = 'בכל הארץ'} else {around = `סביב ${location}`}
        if (!budget) {price = 'בכל תקציב'} else {price = `כ- ${budget} אלף שקלים`}
        return `${price}, ${around}`;
    }

    return (
        <Wrapper>
            <SearchBox onClick={() => openSearchModal(true)}>
                <SearchIconBox>
                    <SearchIcon fontSize="small"/>
                </SearchIconBox>
                <SearchBoxInput>
                    <SearchBoxInputMainCaption>
                        {searchParams ? composeSearchCategoriesCaption(searchParams.categories) : SEARCH_INPUT_MAIN_CAPTION}
                    </SearchBoxInputMainCaption>
                    <SearchBoxInputDescCaption>
                        {searchParams ? composeSearchBudgetAndLocationCaption(searchParams.budget, searchParams.location) : SEARCH_INPUT_DESC_CAPTION}
                    </SearchBoxInputDescCaption>
                </SearchBoxInput>
                <FiltersCell>
                    <FiltersButton>
                        <img src="/assets/otoboto/filters.svg"/>
                    </FiltersButton>
                </FiltersCell>
            </SearchBox>
            <SearchModal isOpen={isSearchModalOpen} searchParams={searchParams} onSearchParamsUpdate={onSearchParamsUpdate} onClose={() => openSearchModal(false)} onSearch={handleSearch}/>
        </Wrapper>
    )

}

export default MobileSearch;