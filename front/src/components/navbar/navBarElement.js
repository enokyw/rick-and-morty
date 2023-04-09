import styled from "styled-components";


export const NavDiv = styled.div`  // contenedor de nav ==> Nav container
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background: #00000017;
    z-index: +1;
`

export const Nav = styled.nav` // Nav naviggation content
    display: flex;
`;


export const Ul = styled.ul`
    display: flex;
    gap: 10px;
`;


export const Li = styled.li`

`
export const LinkButton = styled.button`
    font-family: 'Holy Stain Demo';
    font-size: 20px;
    padding: 5px 30px;
    color: #b3ff00;
    background: #14141469;
    border: none;
    box-shadow: #01b701 0px 0px 15px;
    border-radius: 25px;
    margin: auto;
`