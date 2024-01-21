import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/Routes'
import { NextUIProvider, Spinner } from '@nextui-org/react'
import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Clear the timeout to prevent it from running after the component unmounts
    return () => clearTimeout(loaderTimeout);
  }, []);
  return (
    <>
      <NextUIProvider>
      {isLoading ? (
        // Random loader content, replace with your own loader component or HTML
        <div className='flex justify-center items-center h-screen'> <Spinner size="lg" /></div>
      ) : (
        <RouterProvider router={router}></RouterProvider>
      )}
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        </NextUIProvider> 
        
    </>
  )
}

export default App
