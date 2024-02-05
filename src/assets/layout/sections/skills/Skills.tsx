import React from 'react';
import { styled } from 'styled-components';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { SectionTitle } from '../../../../components/SectionTitle';
import { Skill } from './skill/Skill';

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'codeSvg'} 
                        title={'html5'} 
                        desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                <Skill iconId={'cssSvg'} 
                        title={'csss3'} 
                        desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                <Skill iconId={'reactSvg'} 
                        title={'react'} 
                        desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                <Skill iconId={'typescriptSvg'} 
                        title={'typescript'} 
                        desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                <Skill iconId={'styledComponentsSvg'} 
                        title={'styled components'} 
                        desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
                <Skill iconId={'figmaSvg'} 
                        title={'WEB DESIgN'} 
                        desc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'} />
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    background-color: #fffef0;
    min-height: 100vh;
    
`
