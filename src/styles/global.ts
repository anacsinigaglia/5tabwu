import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: linear-gradient(#1b1727,#0b071a);
        --light-background: #312f46;
        --grey: #737380;
        --white: #fff;
        --primary: #7000ff;
        --light-primary: #C1CCF4;
        --secondary: #97C43A;
    };

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--background);
        height: 100vh;
        color: var(--white);
        -webkit-font-smoothing: antialiased;
    }

    body,input,textarea,button,select {
        font: 400 1rem 'Signika Negative', sans-serif;
    }

    h1,h2,h3,h4,h5,h6,strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
        height: 3rem;
        padding: 0 2rem;
        border-radius: 0.25rem;
        border: 1px solid var(--light-background);

        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.9);
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }
`;
