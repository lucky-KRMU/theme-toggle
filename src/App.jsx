import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {

  return (
    <>
    <div className='h-screen w-full flex items-center justify-center flex-col bg-sky-700 font-[Pliant]'>

    <h1>Theme Toggle</h1>
    <Card />
    </div>
    </>
  )
}

export default App
