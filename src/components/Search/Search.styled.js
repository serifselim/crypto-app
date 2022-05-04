import styled from 'styled-components';

export const SearchContainer = styled.div`
    flex: 1;
    margin: 0 1rem;
`;

export const SearchInput = styled.input`
    padding: 1rem 2rem;
    font-size: 1.4rem;
    cursor: pointer;
    background: transparent;
    border-radius: rem;
    outline: none;
    border: none;
    color: ${({ theme }) => theme.foregroundColor};
    width: 100%;
    text-align: right;

    &::placeholder{
        color: ${({ theme }) => theme.foregroundColor};
    }
`;