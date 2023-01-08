import React, {useState, useEffect} from 'react'
import styled from "styled-components/macro"
import {fontSize, spacing} from '../ob-style'
import Spacer from './Spacer'
import {CATEGORIES} from '../categories'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right; 
    direction: rtl;
`

const CategoriesTabel = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Category = styled.div`
    margin-bottom: 30px;
    margin-left: 15px;
    width: 60px;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent !important;
    :focus {
        outline: 0;
    }
`

const CategoryImage = styled.div`
    display: flex;
    justify-content: center;
`

const CategoryTitle = styled.div`
    text-align: center;
`

const CategoriesSelectionPanel = ({initialSelectedCategories, onCategoriesChange}) => {

    const [selectedCategories, setSelectedCategories] = useState(initialSelectedCategories || [])

    useEffect(() => {
        const selectedCategoriesList = CATEGORIES.filter(category => selectedCategories.indexOf(category.id) !== -1)
        onCategoriesChange(selectedCategoriesList.map(item => item.id))
    }, [selectedCategories])

    const toggleCategory = (id) => {
        if (isCategorySelected(id)) {
            setSelectedCategories(selectedCategories.filter(categoryId => categoryId !== id));
        } else {
            setSelectedCategories(oldArray => [...oldArray, id])
        }
    }

    const isCategorySelected = (id) => {
        return selectedCategories.indexOf(id) != -1
    }

    return (
        <Wrapper>
            <CategoriesTabel>            
                {CATEGORIES.sort((a,b) => a.order - b.order).map((category, index) => {
                    return (
                        <Category key={category.id} onClick={() => toggleCategory(category.id)}>
                            <CategoryImage>
                                <img src={isCategorySelected(category.id) ? category.iconChecked : category.icon}/>
                            </CategoryImage>
                            <CategoryTitle>
                                <span>{category.title}</span>
                            </CategoryTitle>
                        </Category>
                    )
                })} 
            </CategoriesTabel>           
        </Wrapper>
    )
}

export default CategoriesSelectionPanel; 