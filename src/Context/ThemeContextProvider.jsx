import React, {useState} from 'react'
import ThemeContext from './theme';

function ThemeContextProvider({children}) {


    let [theme, setTheme] = useState();

  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>

    {children}
    </ThemeContext.Provider>
    </>
  )
}

export default ThemeContextProvider;