import React from 'react';
import { styled } from 'styled-components';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Menu } from '../../../../components/menu/Menu';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../img/social.png'
import timerImg from '../../../img/timer.png'

const worksItems = ["All", "Landing Page", "React", "Spa"]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work title={'Social Network'} 
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                        src={socialImg}></Work>
                <Work title={'Timer'} 
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                        src={timerImg}></Work>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #f0ffe6;
`