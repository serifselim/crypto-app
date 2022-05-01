import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    height: 100%;
`;

export const NavItem = styled(Link)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ active, theme }) => active && theme.secondBgColor};
    color: ${({ theme }) => theme.foregroundColor};
    cursor: pointer;
`;
