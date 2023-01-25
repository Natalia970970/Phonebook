import styled from "styled-components";

export const LayoutStyled = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: linear-gradient(300deg,deepskyblue,darkviolet,blue);
    background-size: 180% 180%;
    animation: gradient-animation 18s ease infinite;

    @keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
`;
