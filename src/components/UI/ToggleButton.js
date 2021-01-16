import React, { useState } from 'react';
import {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from '../UI/theme';
import {GlobalStyles} from '../UI/global'

import '../UI/ToggleButton.css'


const ToggleButton = () => {

    const [theme, setTheme] = useState('light');

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
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <GlobalStyles></GlobalStyles>
                <label className="switch" >
                <input type="checkbox" onClick={toggleTheme}/>
                <span className="slider round"></span>
            </label>
            </ThemeProvider>
    )
}


export default ToggleButton