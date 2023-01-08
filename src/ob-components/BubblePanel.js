import React, {useState, useRef, useEffect} from 'react'
import styled from "styled-components/macro"

const Wrapper = styled.div`
    background: gray;
    position: absolute;
    cursor: default!important;
    width: ${props => props.width ? props.width : '100%'};
    right: ${props => props.left ? null : (props.xloc ? props.xloc[0] : null)};
    left: ${props => props.left ? props.xloc[0] : null};
    border-radius:10px;
    top: 80px;
    background: white;
    border-radius: 32px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 4%), 0 8px 16px rgb(0 0 0 / 15%);
    margin-top: 12px;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    z-index: 99999;
    @keyframes inAnimation {
      0% {
        opacity: 0;
        visibility: hidden;
      }
      100% {
        opacity: 1;
        visibility: visible;
      }
    }
    
    @keyframes outAnimation {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
        visibility: hidden;
      }
    }

    :before {
        content: "";
        position: absolute;
        bottom: calc(100% - 9px);
        right: ${props => props.left ? null : (props.xloc ? props.xloc[1] : '80px')};
        left: ${props => props.left ? props.xloc[1] : null};
        height: 20px;
        width: 20px;
        background: white;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        border: 1px solid rgb(0 0 0 / 7%);
        border-bottom: 0px;
        border-right: 0px;
    }
`

const mountedStyle = { 
  animation: "inAnimation 150ms ease-in" 
};

const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards"
};

const BubblePanel = ({children, onClickOutside, show, width, xloc, left}) => {

    const ref = useRef(null);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside && onClickOutside();
        }
      };
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }, [ onClickOutside ]);
  
    if(!show)
      return null;

    return (
        <Wrapper ref={ref} width={width} xloc={xloc} left={left} style={show ? mountedStyle : unmountedStyle}>
            {children}
        </Wrapper>
    )

}

export default BubblePanel; 