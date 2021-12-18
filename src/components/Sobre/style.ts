import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 4.5rem;

    color: #EB5757;
    margin-left: 120px;
`

export const Div = styled.div`

    width: 80%;

    display: grid;
    grid-template-columns: 0.6fr 2fr;
    grid-template-rows: 1fr;
    grid-template-areas: "img txt";
    column-gap: 8px;

    margin: 0 auto;

    .imagem {
        grid-area: img;
    }

    .desc {
        grid-area: txt;
    }

    p {
        text-align: justify;
        font-size: 1.3rem;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: bold;
    }

`