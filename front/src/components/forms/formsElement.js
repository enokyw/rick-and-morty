import styled from "styled-components";



export const ContainerDiv = styled.div`

`;

export const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;

export const ContainerImageDiv = styled.div`

`;

export const ImageDiv = styled.div`
    max-width: 130px;
    margin: auto;
`;

export const Img =styled.img`
    width: 100%;
`;

export const H1 = styled.h1`
    text-align: center;
`;

export const Span = styled.span`
    text-align: center;
`;

/****** form inputs ******/
export const ContainerInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin: auto;
`;

export const GridContainerDiv = styled.div` // if you need contaner more input columns

`;

export const InputDiv = styled.div`
    position: relative;
    min-width: 280px;
`;

export const Label = styled.label`
    position: absolute;
    padding: 5px;
    bottom: 0px;
    left: 0;
    font-family: "Holy Stain Demo";
    font-size: 16px;
    color: #9bff00;
`;

export const SpanError = styled.span`
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: -22px;
    line-height: 1;
    font-family: "sans-serif";
    font-size: 12px;
    text-align: center;
    font-weight: 600;
    color: #ff9611;
`;

export const Input = styled.input`
    width: 100%;
    padding: 20px 5px 5px;
    border: solid 1px transparent;
    background: #a9a9a924;
    border-radius: 5px;
    outline: none;
`;

/**** button subumit ****/
export const Button = styled.button`
    font-family: 'Holy Stain Demo';
    font-size: 20px;
    padding: 5px 30px;
    color: inherit;
    background: #14141469;
    border: none;
    box-shadow: #01b701 0px 0px 15px;
    border-radius: 25px;
    margin: auto;
`;