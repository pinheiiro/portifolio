import styled from "styled-components";

export const H1 = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 4.5rem;

    color: #EB5757;
    margin-left: 120px;
    line-height: 0;
`

export const Div = styled.div`
    width: 100%;
    margin-top: 15%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 20px;

    div {
        margin: 0 auto;
        text-align: center;
        padding: 0 10px;
        font-family: 'IBM Plex Sans', sans-serif;
    }

    h2 {
        color: #EB5757;
        font-size: 1.3rem;
    }

    p {
        font-size: 1rem;
        font-weight: 500;
    }

`

/*

    width: 100%;
    display: flex;

    font-family: 'IBM Plex Sans', sans-serif;

    div {
        width: 33%;
        margin: 0 auto;
        text-align: center;
    }

*/