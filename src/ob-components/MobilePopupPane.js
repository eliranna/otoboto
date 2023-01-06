import React, {useState, useRef, useEffect} from 'react'
import styled from "styled-components/macro"
import Drawer from '@mui/material/Drawer'

const MobilePopupPane = ({children, isOpen}) => {
    return (
          <Drawer
            anchor={'bottom'}
            open={isOpen}
            PaperProps={{
              sx: {
                height: "100%"
              }
            }}
          >
            {children}
          </Drawer>
    )
}

export default MobilePopupPane