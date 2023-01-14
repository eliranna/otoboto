import React from 'react'
import {useStore, StoreProvider} from '../Store'
import styled from "styled-components/macro"
import Login from './Login';
import SwipeableEdgeDrawer from './SwipeableEdgeDrawer';
import { useViewport, ViewportProvider } from '../ViewportProvider'

const MobileLogin = () => {
    
    const { isLoginModalOpen, openLoginModal } = useStore()
    const { isMobile } = useViewport();

    return (
        <SwipeableEdgeDrawer isOpen={isLoginModalOpen} onClose={() => openLoginModal(false)} anchor={isMobile() ? 'bottom' : 'right'}>
            <Login/>
        </SwipeableEdgeDrawer>
    )
}

export default MobileLogin;