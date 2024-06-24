import {Outlet} from 'react-router-dom'
import Nav from './Nav'
import "../../styles/rootlayout.scss"
import PersistLogin from './PersistLoginForHome'


const Layout = () => {
  return (
    <div className='layout'>
    <header>
      <Nav />  
    </header>
    <main className='App'>
      <PersistLogin />
      <Outlet />
    </main>
    <footer>
      <p>Another page by km</p>
    </footer>
    </div>
  )
}

export default Layout