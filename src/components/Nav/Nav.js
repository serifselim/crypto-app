import React from 'react';
import { NavContainer, NavContent, NavItem } from './Nav.styled';
import { BsBookmarkCheck } from 'react-icons/bs';
import { VscListSelection } from 'react-icons/vsc';
import { useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ icon, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <NavItem
            style={{ textDecoration: match ? "underline" : "none" }}
            to={to}
            active={match}
            {...props}
        >
            {icon}
        </NavItem>
    );
};

const Nav = () => {
    return (
        <NavContainer>
            <NavContent>
                <CustomLink
                    to="/"
                    icon={<VscListSelection size={25} />}
                />
                <CustomLink
                    to="/favorites"
                    icon={<BsBookmarkCheck size={25} />}
                />
            </NavContent>
        </NavContainer>
    );
};

export default Nav;