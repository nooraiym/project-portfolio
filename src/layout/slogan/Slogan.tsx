import React from 'react';
import { styled } from 'styled-components';
import { SectionTitle } from '../../components/SectionTitle';
import { StyledButton } from '../../components/Button';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>I Am Available For Freelance</SectionTitle>
                    <StyledButton>Hire me</StyledButton>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section``