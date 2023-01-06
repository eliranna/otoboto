import React, {useState, useEffect} from 'react'
import styled from "styled-components/macro"
import { NavLink } from "react-router-dom";

import {useViewport, ViewportProvider} from '../ViewportProvider'

import {fontSize, spacing} from '../ob-style'

import Spacer from './Spacer'

import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Wrapper = styled.div`
    -webkit-box-align: center !important;
    -ms-flex-align: center !important;
    display: -webkit-box !important;
    display: -moz-box !important;
    display: -ms-flexbox !important;
    display: -webkit-flex !important;
    display: flex !important;
    -webkit-align-items: center !important;
    align-items: center !important;
    border-top: 1px solid #EBEBEB !important;
    position: fixed !important;
    bottom: -60px !important;
    height: 125px !important;
    left: 0px !important;
    right: 0px !important;
    padding-bottom: 60px !important;
    contain: paint !important;
    background: #ffffff !important;
    -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955), visibility 0.2s !important;
    -moz-transition: transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955), visibility 0.2s !important;
    transition: -ms-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),-webkit-transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955),transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955), visibility 0.2s !important;
    z-index: 1 !important;
    height: 125px;
    justify-content: center;
    align-items: center;
`

const NavItem = styled.div`
    width: 75px;
    height: 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    -webkit-tap-highlight-color: transparent !important;
    outline: none !important;
    a {
        text-decoration: none;
    }
`
const NavItemIcon = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    img {
        width: 25px;
    }
`
const NavItemTitle = styled.div`
    font-size: 11px;
    font-weight: 600;
    color: #222222;
    text-align: center;
`

const MobileFooter = ({}) => {

    const { isMobile } = useViewport();
    const iconStyle = (isActive) => { return isActive ? {color: 'rgb(255, 56, 92)'} : {color: 'rgb(176, 176, 176)'} }

    return isMobile() ? (
        <Wrapper>
            <NavItem>
                <NavLink to={'/'}>
                    {({ isActive }) => (
                    <>
                        <NavItemIcon>
                            <SearchIcon sx={iconStyle(isActive)}/>
                        </NavItemIcon>
                        <NavItemTitle>
                            חיפוש
                        </NavItemTitle>
                    </>
                    )}                    
                </NavLink>
            </NavItem>   
            <NavItem>
                <NavLink to={'/liked'}>
                    {({ isActive }) => (
                    <>
                        <NavItemIcon>
                            <FavoriteBorderIcon sx={iconStyle(isActive)}/>
                        </NavItemIcon>
                        <NavItemTitle>
                            מועדפים
                        </NavItemTitle>
                    </>
                    )}                    
                </NavLink>
            </NavItem> 
            <NavItem>
                <NavLink to={'/profile'}>
                    {({ isActive }) => (
                    <>
                        <NavItemIcon>
                            <AccountCircleOutlinedIcon sx={iconStyle(isActive)}/>
                        </NavItemIcon>
                        <NavItemTitle>
                            פרופיל
                        </NavItemTitle>
                    </>
                    )}                    
                </NavLink>
            </NavItem> 
        </Wrapper>
    ) : null;
}

export default MobileFooter;