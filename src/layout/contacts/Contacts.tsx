import React from 'react';
import { styled } from 'styled-components';
import { SectionTitle } from '../../components/SectionTitle';
import { StyledButton } from '../../components/Button';
import { Container } from '../../components/Container';
import { theme } from '../../styles/Theme';

export const Contact = () => {
    return (
        <StyledContacts id='contacts'>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Field placeholder={'name'} />
                    <Field placeholder={'subject'} />
                    <Field placeholder={'message'} as={'textarea'}/>
                    <StyledButton type={'submit'}>Send message</StyledButton>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    gap: 16px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    textarea {
        resize: none;
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    padding: 7px 15px;
    background-color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.borderColor};

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};

    &::placeholder {
        color: ${theme.colors.placeholderColor};
        text-transform: capitalize;
    }

    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`