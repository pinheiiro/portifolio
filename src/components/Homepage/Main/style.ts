import styled from 'styled-components';

export const Body = styled.main`

    grid-area: m;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 1.8rem;

    .card {
        width: 220px;

        padding-top: 10px;

        display: flex;
        flex-flow: column wrap;

        border: 2px solid #EB5757;
        cursor: pointer;
    }

    .titulo {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: space-around;
    }
    
`;