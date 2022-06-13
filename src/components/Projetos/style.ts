import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 4.5rem;

    color: #EB5757;
    margin-left: 12%;
    line-height: 1;

    @media (max-width: 800px) {
        margin-left: 0;
        text-align: center;
    }
`

export const Ul = styled.ul`

    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-left: 8%;

    li + li {
        margin-left: 50px;
    }

    @media (max-width: 800px) {
        margin-left: 0;
        padding: 0;
        justify-content: center;
    }

    @media (max-width: 400px) {
        li + li {
            margin-left: 30px;
        }
    }
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