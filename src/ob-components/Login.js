import React from 'react'
import styled from "styled-components/macro"

import { maxWidth, padding, spacing } from '../ob-style'
import { useViewport } from '../ViewportProvider'
import Spacer from './Spacer';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const Wrapper = styled.div`
`;

const Welcome = styled.div`
    font-size: 22px !important;
    line-height: 26px !important;
    color: rgb(34, 34, 34) !important;
    font-weight: 600 !important;
    margin-bottom: 8px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 70px;
    }
`;

const WelcomeCaption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    direction: rtl;
`;

const WelcomeDesc = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    direction: rtl;
    font-weight: 600;
    color: #717171;
    font-size: 16px;
`;

const LoginButtons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const LoginButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 15px;
    border: 1px solid #dddddd;
    font-size: 16px;
    width: 100%;
    padding: 15px;
    cursor: pointer;
    transition: box-shadow 0.2s ease,transform 0.1s ease;
    direction: rtl;
    height: 52px;
    :hover {
        border-color: transparent;
        box-shadow: 0 0 0 2px black;
    }
`

const LoginWithFB = styled(LoginButton)`
    
`;

const LoginWithGoogle = styled(LoginButton)`

`;

const LoginCaption = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    line-height: 20px;
`;

const LoginIcon = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
        width: 14px;
    }
`;

const Login = () => {

    return (
        <Wrapper>
            <Welcome>
                <Logo>
    
                </Logo>
                <WelcomeCaption>
                    ?????? ?????????? ???????? ??????????????????
                </WelcomeCaption>
                <Spacer height={spacing.spacing2}/>
                <WelcomeDesc>
                    ???????????? ?????? ?????????? ?????? ???????????? ???????????? ????????...
                </WelcomeDesc>
                <Spacer height={spacing.spacing8}/>
                <LoginButtons>
                    <LoginWithFB>
                        <LoginIcon>
                            <FacebookIcon sx={{color: "#1978f2"}}/>
                        </LoginIcon>
                        <Spacer width={spacing.spacing2}/>
                        <LoginCaption>
                            ?????????????? ???? ??????????????
                        </LoginCaption>
                    </LoginWithFB>
                    <Spacer height={spacing.spacing4}/>
                    <LoginWithGoogle>
                        <LoginIcon>
                            <GoogleIcon sx={{color: '#ea4435'}}/>
                        </LoginIcon>
                        <Spacer width={spacing.spacing2}/>
                        <LoginCaption>
                            ?????????????? ???? ????????
                        </LoginCaption>
                    </LoginWithGoogle>
                </LoginButtons>
    
            </Welcome>
        </Wrapper>
    )
}

export default Login;