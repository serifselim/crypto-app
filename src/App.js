import React, { useState } from 'react';
import { List } from './pages';
import { Header, Nav } from './components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import { lightTheme, darkTheme } from './constants/themes';

const App = () => {

  //Theme Settings
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const changeTheme = () => {
    if (currentTheme === darkTheme) setCurrentTheme(lightTheme);
    else setCurrentTheme(darkTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header
        theme={currentTheme}
        changeTheme={changeTheme}
      />
      <List />
      <Nav />
    </ThemeProvider>
  );
};

export default App;