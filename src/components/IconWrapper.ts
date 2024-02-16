import { styled } from "styled-components";

export const IconWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: #FFFFFF1A;
        transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`