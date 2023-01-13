import React, {useEffect, useState} from 'react'
import styled from "styled-components/macro"

import { maxWidth, breakpoints } from '../ob-style';
import BubblePanel from './BubblePanel';
import Login from './Login';
import { useUserMenu } from '../hooks/userMenu';
import { useStore, StoreProvider } from '../Store'

const Wrapper = styled.div`
    background: transparent;
    margin: 0;
    text-align: inherit;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 21px;
    transition: box-shadow 0.2s ease;
    padding: 5px 12px 5px 5px;
    width: 77px;
    height: 42px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    :hover {
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    }
`

const UserAvaterPanel = styled.div`
    img {
        width: 30px;
        height: 30px;
        filter: opacity(0.5);
    }
`

const UserMenuPanel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 16px;
        height: 16px;
        stroke-width: 3;
        filter: opacity(0.8);
    }
`

const UserMenuButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
`


const UserMenu = ({show}) => {

    //const [isUserMenuOpen, openUserMenu] = useState(false)
    const { userMenuOpened, openUserMenu } = useStore()

    return (
        <Wrapper>
            <UserMenuButton onClick={() => openUserMenu(true)}>
                <UserMenuPanel>
                    <img src="/assets/otoboto/menu.svg"/>
                </UserMenuPanel>
                <UserAvaterPanel>
                    <img src="/assets/otoboto/user.svg"/>
                </UserAvaterPanel>
            </UserMenuButton>
            <BubblePanel show={userMenuOpened} width={"300px"} xloc={['38px','68px']} left={true} onClickOutside={() => openUserMenu(false)}>
                <Login/>
            </BubblePanel>
        </Wrapper>
    )
}

export default UserMenu;