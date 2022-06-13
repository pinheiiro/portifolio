import styled from 'styled-components';

/**
 * Esse é um arquivo de estilo alternativo aos arquivo style.ts do
 * bodyProjetos.tsx e style.ts do sites.tsx
 */

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

export const Div = styled.div`
    width: 80%;
    margin: 0 auto;
    border: 2px solid #EB5757;
    margin-top: 5%;

    @media (max-width: 500px) {
        margin-top: 10%;
    }

    .card {
        display: grid !important;
        grid-template-columns: 2fr 0.5fr;
        grid-template-rows: 0.5fr 1fr 1fr;
        grid-template-areas: "titulo img" "desc img" "desc btn";

        font-family: 'IBM Plex Sans', sans-serif;

        h2 {
            grid-area: titulo;
            margin-left: 5%;
            color: #56CCF2;
            margin-top: 1%;
            font-size: 2rem;
        }

        .img {
            grid-area: img;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        p {
            grid-area: desc;
            margin-left: 5%;
            font-weight: bold;
            font-size: 1rem;
        }

        .btn {
            grid-area: btn;
            display: flex;
            justify-content: center;
            align-items: end;
        }

        a {
            width: 95%;
        }

        button {
            width: 95%;
            height: 50%;
            padding: 10px;
            border: none;
            background-color: #EB5757;
            color: white;

            margin-bottom: 3%;

            font-family: 'IBM Plex Sans', sans-serif;
            font-weight: bold;
            font-size: 1rem;

            transition: filter 0.2s;

            &:hover {
                filter: brightness(.8);
            }

            @media (max-width: 540px) {
                font-size: 0.8rem;
                margin-bottom: 1%;
            }
        }

        @media (max-width: 500px) {

            .img {
                display: none;
            }

            grid-template-columns: 1fr;
            grid-template-rows: 35px 60px 30px;
            grid-template-areas: "titulo" "desc" "btn";
                
            h2 {
                grid-area: titulo;
                font-size: 1.5rem;
            }

            p {
                grid-area: desc;
                overflow: auto;
                font-size: 0.8rem;
            }

            .btn {
                grid-area: btn;
                width: 50%;
                height: 40px;
                margin: 0 auto;
                align-items: center;
            }

            button {
                padding: 5px;
                margin-bottom: 10px;
            }
        }
    }
`