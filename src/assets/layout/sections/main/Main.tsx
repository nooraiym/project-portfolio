import React from 'react';
import { styled } from 'styled-components';
import photo from '../../../img/photo.jpg'
import { FlexWrapper } from '../../../../components/FlexWrapper';

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
            <div>
                <span>Hi There</span>
                <h2>I am Svetlana Dyablo</h2>
                <MainTitle>A Web Developer.</MainTitle>
            </div>

            <Photo src={photo} alt="" />
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #fff4f4;
`
const MainTitle = styled.h1`
    font-family: 'Courier New', Courier, monospace;
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`