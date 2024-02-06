import React from 'react';
import { styled } from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Svetlana</Name>
                <SocialIconsList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagramSvg'}></Icon>
                        </SocialIconLink>
                    </SocialItem>
                    
                    <SocialItem>
                        <SocialIconLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegramSvg'}></Icon>
                        </SocialIconLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialIconLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'vkSvg'}></Icon>
                        </SocialIconLink>
                    </SocialItem>

                    <SocialItem>
                        <SocialIconLink>
                            <Icon width={'21px'} height={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedinSvg'}></Icon>
                        </SocialIconLink>
                    </SocialItem>
                </SocialIconsList>
                <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;
    background-color: #fffaf2;
`

const Name = styled.span`

`

const SocialIconsList = styled.ul`
    display: flex;
    gap: 30px;
`

const SocialItem = styled.li`

`

const SocialIconLink = styled.a`

`

const Copyright = styled.small`

`
