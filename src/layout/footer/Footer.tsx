import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={"column"} align={"center"}>
        <Name>Svetlana</Name>
        <SocialIconsList>
          <SocialItem>
            <SocialIconLink>
              <Icon
                width={"21px"}
                height={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"instagramSvg"}
              ></Icon>
            </SocialIconLink>
          </SocialItem>

          <SocialItem>
            <SocialIconLink>
              <Icon
                width={"21px"}
                height={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"telegramSvg"}
              ></Icon>
            </SocialIconLink>
          </SocialItem>

          <SocialItem>
            <SocialIconLink>
              <Icon
                width={"21px"}
                height={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"vkSvg"}
              ></Icon>
            </SocialIconLink>
          </SocialItem>

          <SocialItem>
            <SocialIconLink>
              <Icon
                width={"21px"}
                height={"21px"}
                viewBox={"0 0 21px 21px"}
                iconId={"linkedinSvg"}
              ></Icon>
            </SocialIconLink>
          </SocialItem>
        </SocialIconsList>
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${theme.colors.primaryBg};
  padding: 40px 0;
`;

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 3px;
`;

const SocialIconsList = styled.ul`
  margin: 30px 0;
  display: flex;
  gap: 20px;
`;

const SocialItem = styled.li`

`;

const SocialIconLink = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  background-color: #FFFFFF1A;
  color: ${theme.colors.accent};

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: ${theme.colors.primaryBg};
    background-color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  font-size: 12px;
  font-weight: 400;
  opacity: .5;
`;
