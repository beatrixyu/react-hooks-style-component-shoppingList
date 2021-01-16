import React, {useState, useContext} from 'react';
import Auth from './components/Auth'
import {AuthContext} from './context/auth-context'


import ShoppingNote from './components/ShoppingList/ShoppingNote';
// import Switch from './SwitchButton'
// import ToggleButton from './components/UI/ToggleButton'

// import {ThemeProvider} from 'styled-components'
// import {lightTheme, darkTheme} from './components/UI/theme';
// import {GlobalStyles} from './components/UI/global'
// import MainButton from './components/UI/MainButton';

const App = (props) => {
  const authContext = useContext(AuthContext)
  let content = <Auth />
  if (authContext.isAuth) {
    content = <ShoppingNote/>
  }

//here is the part for light and dark model change
  const [theme, setTheme] = useState('light');
// The function that toggles between themes
const toggleTheme = () => {
  // if the theme is not light, then set it to dark
  if (theme === 'light') {
    setTheme('dunkle');
  // otherwise, it should be light
  } else {
    setTheme('light');
  }
}
  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    // <GlobalStyles></GlobalStyles>
    // <Switch onClick={toggleTheme}></Switch>
    // <MainButton onClick={toggleTheme}>Switch Theme Mode</MainButton>
    // <ToggleButton ></ToggleButton>
    content
    // <ShoppingNote></ShoppingNote>
    // </ThemeProvider>
  )
}

export default App;
