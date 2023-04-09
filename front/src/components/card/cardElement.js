import styled from "styled-components";

let mainColor = "#2196f3"

export const CardContainer = styled.div`
    display: flex;
    position: relative;
    max-width: 250px;
    background: ${mainColor};
    border-radius: 5px;
    overflow: hidden;
    padding-bottom: 50px;
`;

export const CloseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border: solid 1px transparent;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border-radius: 4px;
    background: red;
    height: 25px;
    width: 25px;
    right: 10px;
    top: 10px;
`;

export const H2name = styled.h2`
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 20px;
    border: solid 1px white;
    border-radius: 4px;
    padding: 0 10px;
    color: white;
    background: #0000007a;
`;

export const H2gender = styled.h2`
    position: absolute;
    color: white;
    right: 10px;
    bottom: 10px;
`;

export const H2specie = styled.h2`
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: white;
`;


export const Img = styled.img`
    width: 100%;
`

export const Button = styled.button`
    font-size: 50px;
    font-family: monospace;
`;