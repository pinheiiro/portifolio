import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: "h" "m" "f";
    grid-gap: 30px;
`

export const H1 = styled.h1`
    margin-left: 120px;

    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 4.5rem;
    
    line-height: 0;
    color: #EB5757;

    grid-area: h;
`

export const Div = styled.div`
    grid-area: m;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;

    div {
        text-align: center;
    }

    h2 {
        color: #EB5757;
    }

    h4 {
        line-height: 0;
    }
`

export const Button = styled.button`
    grid-area: f;
    margin: 0 auto;
    margin-top: 80px;

    width: 35%;
    height: 25%;
    border: none;
    background-color: #EB5757;
    color: white;
    padding: 5px 30px;

    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 1.6rem;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(.8);
    }

    @media (max-width: 785px) {
        
    }

`