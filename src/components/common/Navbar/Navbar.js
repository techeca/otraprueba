import { useLoaderData, Link, Outlet } from 'react-router-dom'

export default function Navbar(){

  return(
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/PokeInfo'>PokeInfo</Link></li>
        <li><Link to='/About'>About</Link></li>
      </ul>
    </nav>
  )
}
