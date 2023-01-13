import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components/macro"
import { useLocation } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colors } from './ob-style';
import { useUserMenu } from './hooks/userMenu';

import { useViewport, ViewportProvider } from './ViewportProvider'
import { StoreProvider } from './Store'

import Topbar from './ob-components/Topbar';
import MobileFooter from './ob-components/MobileFooter';
import MobileLogin from './ob-components/MobileLogin';

import Explore from './ob-pages/Explore'
import Liked from './ob-pages/Liked';
import Profile from './ob-pages/Profile';

import MOCK_DATA from './mockData'


const Wrapper = styled.div``

function Otoboto() {

  const location = useLocation();
  const isInSearchMode = location.pathname === '/';

  const [user, setUser] = useState(null)
  const [searchParams, setSearchParams] = useState(null)
  const { isTablet } = useViewport()

  const handleSearch = () => {
    console.log(searchParams)
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#222222',
      },
      secondary: {
        main: '#717171',
      },
      accent: {
        main: colors.accent
      },
      success: {
        main: '#2bc48a'
      }
    }
  });

  return (
    <StoreProvider>
      <ViewportProvider>
        <ThemeProvider theme={theme}>
          <Wrapper>
              <Topbar allowSearch={isInSearchMode} isVisibleOnMobile={isInSearchMode} searchParams={searchParams} onSearchParamsUpdate={searchParams => {setSearchParams(searchParams)}} onSearch={handleSearch}/>
              <Routes>
                  <Route path="/" element={<Explore cars={MOCK_DATA}/>}/>
                  <Route path="/liked" element={<Liked />}/>
                  <Route path="/profile" element={<Profile user={user}/>}/>
              </Routes>
              <MobileFooter/>
              <MobileLogin/>
          </Wrapper>
        </ThemeProvider>
      </ViewportProvider>
    </StoreProvider>
  )
}

export default Otoboto;