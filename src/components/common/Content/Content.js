import { useLoaderData, Link, Outlet } from 'react-router-dom'
import Home from '../../views/Home.js'
import './style.css'

export default function Content({pathname}){

  return(
    <section>
      {pathname === '/' ? <Home /> : <Outlet />} 
    </section>
  )
}
