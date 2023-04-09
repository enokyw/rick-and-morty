import styled from "styled-components";

export const SearchDiv = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 360px;
    height: 35px;
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 25;
    padding: 0px 80px 0px 15px;
    border: solid 1px #00c4ff;
    outline: none;
    border-radius: 25px;
`;

export const SearchButton = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 0 15px;
    border-radius: 0px 25px 25px 0px;
    border: solid 1px #2196f3;
    background: #2196f3;
    color: white;
`;