import React from 'react'
import {useStore, StoreProvider} from '../Store'
import styled from "styled-components/macro"
import Login from './Login';
import SwipeableEdgeDrawer from './SwipeableEdgeDrawer';
import { useViewport, ViewportProvider } from '../ViewportProvider'

const MobileLogin = () => {
    
    const { openUserMenu, userMenuOpened } = useStore()
    const { isMobile } = useViewport();

    return isMobile() && (
        <SwipeableEdgeDrawer isOpen={userMenuOpened} onClose={() => openUserMenu(false)}>
            <Login/>
        </SwipeableEdgeDrawer>
    )
}

export default MobileLogin;