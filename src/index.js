import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './css/master.css'
import App from './components/views/App.js'
import PokeInfo from './components/views/PokeInfo'
import About from './components/views/About.js'

const container = document.getElementById('root')
const root = createRoot(container)
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "PokeInfo",
        element: <PokeInfo />,
      },
      {
        path: "About",
        element: <About />,
      },
    ],
  },
]);

root.render(
  <RouterProvider router={router} />
);
