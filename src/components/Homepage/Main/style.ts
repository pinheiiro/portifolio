import styled from 'styled-components';

export const Body = styled.main`

    grid-area: m;

    display: grid;
    grid-template-columns: repeat(4, 13.75rem);
    grid-auto-rows: 154px;
    gap: 3.125rem;
    justify-content: center;
    align-items: center;
    margin: 0 20px;

/*
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
*/
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: bold;
    font-size: 1.8rem;


    .card {
        //width: 13.5rem;

        padding-top: 0.625rem;

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

    @media (max-width: 950px) {
        gap: 1.5rem;
    }

    @media (max-width: 815px) {
        grid-template-columns: repeat(2, 13.75rem);
        gap: 3.125rem;
    }
    
`;