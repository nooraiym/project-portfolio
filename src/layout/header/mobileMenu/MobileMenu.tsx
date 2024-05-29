import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';
import { css } from 'styled-components';


export const MobileMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMobileMenu>
            <BurgerButton isopen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isopen={false}>
                <ul>
                    {props.menuItems.map((item, index)=>{
                        return <ListItem key={index}>
                                <Link href="">
                                    {item}
                                    <Mask><span>{item}</span></Mask>
                                    <Mask><span>{item}</span></Mask>
                                </Link>
                            </ListItem>
                    })}
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};


const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`

const BurgerButton = styled.button<{isopen: boolean}>`
    width: 200px;
    height: 200px;
    
    position: fixed;
    top: -100px;
    right: -100px;
    z-index: 99999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};

        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isopen && css<{isopen: boolean}>`
            background-color: #1F1F20E5;
        `}

        &::before{
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};

            position: absolute;
            transform: translateY(-10px);

            ${props => props.isopen && css<{isopen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};

            position: absolute;
            transform: translateY(10px);

            ${props => props.isopen && css<{isopen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

const MobileMenuPopup = styled.div<{isopen: boolean}>`
    background-color: #1F1F20E5;

    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    ${props => props.isopen && css<{isopen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

const Link = styled.a`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    color: transparent;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.accent};

    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;
    transition: .2s;

    &::before {
        content: '';
        display: inline-block;
        height: 3px;
        background-color: ${theme.colors.accent};
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }

    &:hover {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.font};

            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }

`