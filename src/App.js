import React, { useState, useEffect } from 'react';
import { Favorites, List } from './pages';
import { Header, Nav } from './components';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import { lightTheme, darkTheme } from './constants/themes';
import { Route, Routes } from 'react-router-dom';
import { useStateValue } from './context/Provider';
import { fetchData } from './utils';
import { actionTypes } from './context/reducer';


const App = () => {

  // Env
  const { REACT_APP_API } = process.env;

  //Theme Settings
  const [currentTheme, setCurrentTheme] = useState(darkTheme);

  const changeTheme = () => {
    if (currentTheme === darkTheme) setCurrentTheme(lightTheme);
    else setCurrentTheme(darkTheme);
  };

  // Context
  const { state, dispatch } = useStateValue();

  useEffect(() => {
    fetchData(REACT_APP_API).then(data => {
      const payload = data.map(item => {
        item.is_active = false;
        return item;
      });
      dispatch({ type: actionTypes.GET_DATA, payload });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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