import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './css/master.css'
import App from './components/views/App.js'
import PokeInfo from './components/views/PokeInfo.js'
import About from './components/views/About.js'
import { getPkmninfo } from './services/api.services.js'

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
        loader: getPkmninfo,
      },
      {
        path: "About",
        element: <About />,
        loader: getPkmninfo,
      },
    ],
  },
]);

root.render(
  <RouterProvider router={router} />
);
