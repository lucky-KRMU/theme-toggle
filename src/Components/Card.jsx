import React, { useContext, useState, useEffect } from 'react'
import ThemeContextProvider from '../Context/ThemeContextProvider'
import ThemeContext from '../Context/theme';

function Card() {

    // let themeContext = useContext(ThemeContextProvider);
    let themeContext = useContext(ThemeContext);

    let [theme, setTheme] = useState(themeContext.theme);
    // let [themeState, setThemeState] = useState(themeContext.theme)

    const handleToggle = () => {
        if (theme === "light") {
            themeContext.theme = "dark"
            setTheme(themeContext.theme);
        }
        else {
            themeContext.theme = "light"
            setTheme(themeContext.theme);
        }
        console.log(theme);
        console.log(themeContext);
    }

    useEffect(()=>{
        let html = document.querySelector('html')
        if(theme === "light"){
            html.className = 'dark';
        } else{
            html.className = 'light';
        }
    }, [theme])

    return (
        <>
            <div className='h-[50vh] w-[50vw] md:w-[20vw] border-double border-white border-4 rounded-2xl text-center flex items-center justify-center flex-col gap-4 p-3 dark:border-dashed duration-300'>
                <h3 className='text-white font-semibold text-2xl dark:text-orange-500 duration-300'>Toggle to change Theme</h3>



                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value={theme} className="sr-only peer" onChange={() => handleToggle()} onToggle={handleToggle} />
                    <div className="relative w-9 h-5 bg-neutral-quaternary outline-4 outline-black peer-focus:outline-2 peer-focus:ring-4 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:inset-s-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-orange-500 peer-checked:outline-white"></div>
                    {/* <span class="select-none ms-3 text-sm font-medium text-heading">Toggle me</span> */}
                </label>


            </div>
        </>
    )
}

export default Card