import { useLoaderData, Link, Outlet, useLocation } from 'react-router-dom'
import Navbar from '../common/Navbar'
import Content from '../common/Content'
//import MainContent from '../common/MainContent'
import Footer from '../common/Footer'
import '../../css/master.css'

export default function App() {
  const { pathname } = useLocation()
  console.log(pathname)

  return(
      <main>
        <Navbar />
        <Content pathname={pathname} />
        <Footer />
      </main>
  )
}
