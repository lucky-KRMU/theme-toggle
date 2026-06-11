import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import ThemeContextProvider from './Context/ThemeContextProvider'

function App() {

  return (
    <>
      <ThemeContextProvider>
        <div className='h-screen w-full flex items-center justify-center flex-col gap-5 bg-sky-700 font-[Pliant] dark:bg-black duration-300'>

          <h1 className='text-5xl font-semibold text-white'>Theme Toggle</h1>
          <Card />
        </div>
      </ThemeContextProvider>
    </>
  )
}

export default App
