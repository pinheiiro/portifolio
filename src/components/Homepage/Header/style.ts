import styled from 'styled-components';

export const Body = styled.div`

    grid-area: h;

    display: grid;
    grid-template-columns: 2fr 0.5fr;
    grid-template-rows: 1fr;
    grid-template-areas: "txt btn";

    .botoes {
        text-align: end;
        grid-area: btn;
    }

    .titulo {
        grid-area: txt;
    }

    button {
        background: none;
        border: none;
        margin-top: 15px;
        margin-left: 10px;
    }

    h1 {
        color: #EB5757;
        font-size: 4.5rem;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: bold;

        margin-left: 3.125rem;
    }

    strong {
        color: white;
        font-size: 4rem;
    }

    // Resposividade ⬇

    @media (max-width: 625px) {
        display: block;

        .botoes {
            text-align: center;
        }
    }

    @media (max-width: 499px) {
        .titulo {
            display: flex;
            justify-content: center;
        }
        .titulo h1 {
            font-size: 4rem;
            margin-left: 0;
        }
        .titulo h1 strong {
            font-size: 3.5rem;
        }
    }
`