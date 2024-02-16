import React from 'react';
import { styled } from 'styled-components';
import photo from '../../../assets/img/photo.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
                    <TextWrapper>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Svetlana Dyablo</span></Name>
                        <MainTitle>A Web Developer.</MainTitle>
                    </TextWrapper>

                    <PhotoWrapper>
                        <Photo src={photo} alt="" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #fff4f4;
    display: flex;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

const SmallText = styled.span`
    font-size: 14px;
    font-weight: 400;
`

const Name = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;

    span {
        position: relative;
        z-index: 0;

        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};

            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }

`

const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;

    &::before {
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
    }
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

