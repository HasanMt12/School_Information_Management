import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/Routes'
import { NextUIProvider } from '@nextui-org/react'

function App() {
  return (
    <>
      <NextUIProvider>
        <RouterProvider router={router}></RouterProvider>
        </NextUIProvider> 

    </>
  )
}

export default App
