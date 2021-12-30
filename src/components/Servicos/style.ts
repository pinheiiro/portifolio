import styled from "styled-components";

export const H1 = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 4.5rem;

    color: #EB5757;
    margin-left: 120px;
    line-height: 0;

    // Resposividade ⬇

    @media (max-width: 585px) {
        margin-left: 0;
        text-align: center;
    }
`

export const Div = styled.div`
    width: 100%;
    margin-top: 15%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6.25rem, 21.875rem));
    grid-auto-rows: 1fr;
    justify-content: center;
    gap: 1.25rem;

    div {
        text-align: center;
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

    // Resposividade ⬇
    
    @media (max-width: 960px) {
        gap: 0;
        margin-left: 0;
        margin-right: 0;
    }

    @media (max-width: 585px) {
        gap: 1.25rem;
        margin-top: 20%;
    }
`