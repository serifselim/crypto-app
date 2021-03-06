import styled, { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 10px;
    }

    body{
        background: ${({ theme }) => theme.firstBgColor};
        color: ${({ theme }) => theme.foregroundColor};
        font-family: 'Roboto', sans-serif;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    button{
        background: none;
        border: none;
        color: ${({ theme }) => theme.foregroundColor};
    }
`;

export const AppContainer = styled.div`
    @media(min-width: 768px) {
        max-width:40%;
        margin: 0 auto;
    }
`;

export default globalStyle;