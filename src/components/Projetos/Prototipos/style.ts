import styled from "styled-components";

export const Div = styled.div`
    width: 80%;
    margin: 0 auto;
    border: 2px solid #EB5757;
    margin-top: 5%;

    .card {
        display: grid !important;
        grid-template-columns: 2fr 0.5fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: "titulo img" "desc btn";
    }

    h2 {
        grid-area: titulo;
        margin-left: 5%;
        color: #56CCF2;
    }

    h5 {
        grid-area: img;
        margin: 0 auto;
    }

    p {
        grid-area: desc;
        margin-left: 5%;
    }

    .btn {
        grid-area: btn;
        display: flex;
        justify-content: center;
        align-items: end;
    }

    .card button {
        width: 95%;
        height: 50%;
        border: none;
        background-color: #EB5757;
        color: white;

        margin-bottom: 3%;

        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: bold;
        font-size: 1rem;
    }
`