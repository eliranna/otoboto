import React from 'react'
import styled from "styled-components/macro"

import { maxWidth, padding } from '../ob-style'
import { useViewport } from '../ViewportProvider'

const Wrapper = styled.div`
    max-width: ${maxWidth.page};
    margin-left: auto;
    margin-right: auto;
    padding: 32px ${props => props.isTablet ? padding.pageTablet : (props.isMobile ? padding.pageMobile : padding.pageDesktop)};
`;

const Page = ({children}) => {

    const { isTablet, isMobile } = useViewport();

    return (
        <Wrapper isTablet={isTablet()} isMobile={isMobile()}>
            {children}
        </Wrapper>
    )
}

export default Page;