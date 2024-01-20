import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/Routes'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
      <NextUIProvider>
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        </NextUIProvider> 
        
    </>
  )
}

export default App
