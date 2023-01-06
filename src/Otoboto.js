import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from "styled-components/macro"
import { useLocation } from 'react-router-dom'

import {useViewport, ViewportProvider} from './ViewportProvider'

import Topbar from './ob-components/Topbar';
import MobileFooter from './ob-components/MobileFooter';

import Explore from './ob-pages/Explore'
import Liked from './ob-pages/Liked';
import Profile from './ob-pages/Profile';

const Wrapper = styled.div``

function Otoboto() {

  const location = useLocation();
  const isInSearchMode = location.pathname === '/';

  const [user, setUser] = useState(null)
  const [searchParams, setSearchParams] = useState(null)

  const handleSearch = () => {
    console.log(searchParams)
  }

  return (
    <ViewportProvider>
      <Wrapper>
          <Topbar allowSearch={isInSearchMode} isVisibleOnMobile={isInSearchMode} searchParams={searchParams} onSearchParamsUpdate={searchParams => {console.log(searchParams); setSearchParams(searchParams)}} onSearch={handleSearch}/>
          <Routes>
              <Route path="/" element={<Explore />}/>
              <Route path="/liked" element={<Liked />}/>
              <Route path="/profile" element={<Profile user={user}/>}/>
          </Routes>
          <MobileFooter/>
      </Wrapper>
    </ViewportProvider>
  )
}

export default Otoboto;