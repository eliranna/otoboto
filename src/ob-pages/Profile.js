import React from 'react'
import styled from "styled-components/macro"

import Page from '../ob-components/Page'

import Login from '../ob-components/Login'

const LoginContainer = styled.div`
    padding-top: 35px;
`

const Profile = ({user}) => {
    return (
        <Page>
            {!user && (
                <LoginContainer>
                    <Login/>
                </LoginContainer>
            )}
        </Page>
    )
}

export default Profile;