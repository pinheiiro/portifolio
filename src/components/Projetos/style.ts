import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 4.5rem;

    color: #EB5757;
    margin-left: 12%;
    line-height: 1;
`

export const Ul = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: 100px 100px 120px;
    margin-left: 8%;
    margin-top: 6%;
    gap: 3%;
`

export const Button = styled.button`
    
    color: ${props => props.color};
    background: none;
    border: none;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 1.4rem;

    &:hover {
        color: #56CCF2;
    }
`