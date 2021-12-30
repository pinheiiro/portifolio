import styled from 'styled-components';

export const Rodape = styled.footer`

    grid-area: f;
    margin: 0 auto;

    a {
        margin: 0 30px;
        text-align: center;
    }

    // Resposividade ⬇

    @media (max-width: 815px) {
        margin-top: 3.125rem;
    }

    @media (max-width: 499px) {
        margin-top: 3.5rem;
    }

`