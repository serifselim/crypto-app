import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100&display=swap');

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
    }
`;

export default globalStyle;