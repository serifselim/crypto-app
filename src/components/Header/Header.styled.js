import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 7rem;
    border-bottom: 0.1px solid ${({ theme }) => theme.borderColor};
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 2rem;
`;

export const Logo = styled.img`

`;

export const ThemeIcon = styled.button`
    color: ${({ theme }) => theme.foregroundColor};

    &:hover{
        opacity: .9;
    }
`;