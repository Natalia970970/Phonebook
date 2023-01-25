import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 300px;
    margin-left: 15px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-weight: 700;
    font-size: 16px;
    color: #fff;
    transition: .5s;
`;
export const Input = styled.input`
    width: 100%;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
`;

export const Button = styled.button`
    border: 5em;
    cursor: pointer;
    outline: none;
    font-size: 16px;
    -webkit-transform: translate(0);
    transform: translate(0);
    background-image: linear-gradient(45deg, #4568dc, #b06ab3);
    padding: 0.7em 2em;
    border-radius: 65px;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.438);
    -webkit-transition: box-shadow 0.25s;
    transition: box-shadow 0.25s;
    color: white;

    &:hover {
        background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
        box-shadow: 0 12px 24px rgba(128, 128, 128, 0.1);
    }
`;

export const ButtonText = styled.span`
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: white;
    background-image: linear-gradient(45deg, #4568dc, #b06ab3);

    &:hover {background-image: linear-gradient(-45deg, #4568dc, #b06ab3)};
`;