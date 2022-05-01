import React, { useState } from 'react';
import { Favorites, List } from './pages';
import { Header, Nav } from './components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import { lightTheme, darkTheme } from './constants/themes';
import { Route, Routes } from 'react-router-dom';

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
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Nav />
    </ThemeProvider>
  );
};

export default App;