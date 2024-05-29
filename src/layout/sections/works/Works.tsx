import React from 'react';
import { styled } from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from '../../../assets/img/social.png'
import timerImg from '../../../assets/img/timer.png'
import { Container } from '../../../components/Container';
import { TabMenu } from './tabMenu/TabMenu';

const worksItems = ["All", "Landing Page", "React", "Spa"]

export const Works = () => {
    return (
        <StyledWorks id='works'>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={'space-around'} align={'flex-start'} wrap={'wrap'}>
                    <Work title={'Social Network'} 
                            text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                            src={socialImg}></Work>
                    <Work title={'Timer'} 
                            text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                            src={timerImg}></Work>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`