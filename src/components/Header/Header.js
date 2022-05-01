import React from 'react';
import { Container, Content, Logo, ThemeIcon } from './Header.styled';
import { MdLightMode } from 'react-icons/md';

const Header = ({ changeTheme, theme }) => {
    return (
        <Container>
            <Content>
                <Logo src={theme.logo} />
                <ThemeIcon
                    onClick={changeTheme}
                >
                    {theme.themeMode}
                </ThemeIcon>
            </Content>
        </Container>
    );
};

export default Header;