import styled from 'styled-components';

export const NavContainer = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7rem;
    border-top: 0.1px solid ${({ theme }) => theme.borderColor};
`;

export const NavContent = styled.div`
    display: flex;
`;

export const NavItem = styled.button`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.firstBgColor};
    color: ${({ theme }) => theme.foregroundColor};

`;
