import * as React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
    title: string,
    action: () => void
}

const ButtonCss = styled.button`
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.5em 1em;
    outline: none;
    border: none;
    background-color: hsl(236, 32%, 26%);
    overflow: hidden;
    transition: color 0.4s ease-in-out;

    &:before {
        content: '';
        z-index: -1;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background-color: #FC2F70;
        transform-origin: center;
        transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
        transition: transform 0.45s ease-in-out;
    }

    &:hover {
        cursor: pointer;
    }

    &:hover::before {
        transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
    }
`;

export const Button: React.FC<ButtonProps> = (props) => {
    return <ButtonCss onClick={props.action}>{props.title}</ButtonCss>
}