import styled from 'styled-components';

export const H1 = styled.h1`
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 4.5rem;

    color: #EB5757;
    margin-left: 120px;

    // Resposividade ⬇

    @media (max-width: 768px) {
        text-align: center;
        margin-left: 0;
    }
    
    @media (max-width: 600px) {
        font-size: 3.5rem;
        padding: 5% 0;
    }

    @media (max-width: 400px) {
        font-size: 3rem;
    }
`

export const Div = styled.div`

    width: 80%;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr;
    grid-template-areas: "img" "txt";
    row-gap: 8px;

    margin: 0 auto;

    .imagem {
        grid-area: img;
        display: flex;
        align-items: start;
        justify-content: center;
        margin-top: 0.2rem;
    }

    .card {
        text-align: center;
        //border: 2px solid white;
        //box-shadow: 1px 1px 30px grey;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: flex-start;
    }

    .img {
        width: 20%;
        border-radius: 50%;
        border: 2px solid white;
        margin: 2% 0;
    }

    .card h3 {
        font-size: 2rem;
        margin-left: 3rem;
        text-align: start;
    }

    strong {
        font-size: 1.5rem;
    }

    .icons {
        margin-left: 3rem;
    }

    .icons > * {
        margin-right: 0.5rem;
        font-size: 1.5rem;
    }

    .ft {
        width: 50%;
        height: 60%;
        background-image: url("agenda.png");
        background-size: cover;
        background-position: center;
        border: 1px solid red;
    }

    .desc {
        grid-area: txt;
        margin-bottom: 20px;
    }

    p {
        text-align: justify;
        font-size: 1.3rem;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: bold;
        margin: 0;
    }

    // Resposividade ⬇

    @media (max-width: 880px) {
        grid-template-rows: 200px 1fr;
        .icons > * {
            font-size: 1.3rem;
        }
        .img {
            width: 25%;
        }
    }

    @media (max-width: 600px) {
        /*
        .imagem {
            display: none;
        }
        */
        .img {
            width: 30%;
        }
        grid-template-columns: 1fr;
        grid-template-rows: 180px 1fr;
        justify-content: center;
        .icons > * {
            font-size: 1.3rem;
        }
        .card h3 {
            font-size: 1.8rem;
        }
        .card strong {
            font-size: 1.3rem;
        }
    }

    @media (max-width: 530px) {
        p { 
            text-align: initial;
        }
    }

    @media (max-width: 505px) {
        grid-template-rows: 130px 1fr;
        .img {
            width: 25%;
        }
        .icons > * {
            font-size: 1.0rem;
        }
        .card h3 {
            font-size: 1.5rem;
        }
        .card strong {
            font-size: 1.2rem;
        }
        .card > div {
            margin-left: -0.8rem;
        }
    }

    @media (max-width: 400px) {
        .img {
            width: 27%;
        }
    }

    @media (max-width: 385px) {
        .icons > * {
            font-size: 0.8rem;
        }
        .card h3 {
            font-size: 1.2rem;
        }
        .card strong {
            font-size: 1rem;
        }
    }

    @media (max-width: 370px) {
        grid-template-rows: 110px 1fr;
        .img {
            width: 25%;
        }
    }

    @media (max-width: 335px) {
        grid-template-rows: 100px 1fr;
        .card > div {
            margin-left: -1rem;
        }
    }

    @media (max-width: 324px) {
        display: block;
        .imagem {
            display: none;
        }
    }
`