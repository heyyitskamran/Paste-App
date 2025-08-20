import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import NavBar from './components/NavBar';
import ViewPast from './components/ViewPast';
import Paste from './components/Paste'; 

const router = createBrowserRouter([
  {
    path: '/',
    element:
    <div className='w-full h-full flex flex-col'>
      <NavBar />
      <Home />
    </div>
  },
  {
    path: 'pastes',
    element: 
    <div className='w-full h-full flex flex-col'>
      <NavBar />
      <Paste /> 
    </div>     
  },
  {
    path: 'pastes/:id',
    element:
    <div className='w-full h-full flex flex-col'>
      <NavBar />
      <ViewPast />
    </div>
  }
]);      
const App = () => {   
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
                                  