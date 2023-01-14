import React, {useState, useRef, useEffect} from 'react'
import styled from "styled-components/macro"
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Box from '@mui/material/Box';
import { grey } from '@mui/material/colors';

const drawerBleeding = 56;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'white'
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

const Inner = styled.div`
  padding: 32px 24px;
`

const SwipeableEdgeDrawer = ({children, isOpen, onOpen, onClose, anchor}) => {
    return (
      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: true,
        }}
      >
          <Puller/>
          <Inner>
            {children}
          </Inner>
      </SwipeableDrawer>
    )
}

export default SwipeableEdgeDrawer