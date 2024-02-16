import React from "react";
import { styled } from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { IconWrapper } from "../../../../components/IconWrapper";

type SkillPropsType = {
    iconId: string;
    title: string;
    desc: string;
};

export const Skill = (props: SkillPropsType) => {
    return (
    <StyledSkill>
        <FlexWrapper direction={'column'} align={'center'}>
            <IconWrapper>
                <Icon iconId={props.iconId} />
            </IconWrapper>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.desc}</SkillText>
        </FlexWrapper>
    </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
`


const SkillTitle = styled.h3`
    text-transform: uppercase;
`

const SkillText = styled.p``
