import styled from "styled-components";

export const H2 = styled.h2`
    text-align: center;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 2.5rem;

    // Resposividade ⬇

    @media (max-width: 479px) {
        br {
            display: none;
        }
    }

    @media (max-width: 330px) {
        margin-bottom: 1rem;
    }
`

export const Button = styled.button`
    position: absolute;
    background: transparent;
    border: none;
    top: 25px;
    left: 30px;

    // Resposividade ⬇

    @media (max-width: 600px) {
        left: 15px;
    }

    @media (max-width: 550px) {
        left: 5px;
    }

    @media (max-width: 479px) {
        position: relative;
        top: -10px;
        left: -15px;
    }

    @media (max-width: 330px) {
        top: -5px;
        margin-bottom: 0.3rem;
    }
`

export const Form = styled.form`
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 100%;
        padding: 0.80rem 1rem;
        border: none;
        color: #1A2732;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: bold;
        font-size: 1.2rem;

        &::placeholder {
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 1.2rem;
        }

        & + input {
            margin-top: 1rem;
        }
    }

    textarea {
        width: 100%;
        height: 12.5rem;
        resize: none;
        border: none;
        padding: 0.80rem 1rem;
        margin-top: 1rem;
        color: #1A2732;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: bold;
        font-size: 1.2rem;

        &::placeholder {
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 1.2rem;
        }

        /* Estilização do Scroll do TextArea */
        &::-webkit-scrollbar-track {
            background-color: #F4F4F4;
        }
        &::-webkit-scrollbar {
            width: 6px;
            background: #F4F4F4;
        }
        &::-webkit-scrollbar-thumb {
            background: #dad7d7;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 10px 0;
        border: none;
        font-family: 'IBM Plex Sans', sans-serif;
        font-weight: bold;
        font-size: 1.2rem;
        color: white;
        background: #1A2732;
        margin-top: 1rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(1.2);
        }
    }
`