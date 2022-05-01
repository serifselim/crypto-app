import React, { useState } from 'react';
import { Favorites, List } from './pages';
import { Header, Nav } from './components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import { lightTheme, darkTheme } from './constants/themes';
import { Route, Routes } from 'react-router-dom';
import { useStateValue } from './context/Provider';


const App = () => {

  //Theme Settings
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const changeTheme = () => {
    if (currentTheme === darkTheme) setCurrentTheme(lightTheme);
    else setCurrentTheme(darkTheme);
  };

  const { state, dispatch } = useStateValue();
  const { say } = state;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Header
        theme={currentTheme}
        changeTheme={changeTheme}
      />
      {say}
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Nav />
    </ThemeProvider>
  );
};

export default App;