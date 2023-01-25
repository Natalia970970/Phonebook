import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainTitle = styled.h2`
    margin-top: 50px;
    margin-left: 20px;
    animation:  reveal 3000ms ease-in-out forwards 200ms;
    @keyframes reveal {
        80%{
        letter-spacing: 8px;
        }
        100% {
        background-size: 300% 300%;
        }
    }
`;

export const HomeText = styled.p`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: medium;
    animation:  reveal 3000ms ease-in-out forwards 200ms,
                glow 2500ms linear infinite 2000ms;

    @keyframes reveal {
        80%{
        letter-spacing: 8px;
        }
        100% {
        background-size: 300% 300%;
        }
    }
    @keyframes glow {
        40% {
        text-shadow: 0 0 8px #fff;
        }
    }
`;

export const HomeLink = styled(NavLink)`
    color: inherit;
    display: flex;
    align-items: center;
    margin-right: 5px;
    margin-left: 5px;

    &:hover:not(.active),
    &:focus-visible:not(.active) {
        color: #88e3fa;
        transition: 500ms;
}`;

