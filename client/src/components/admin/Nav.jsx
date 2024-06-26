import "../../../styles/admin/adminNav.scss"
import { NavLink, Link, useLocation } from "react-router-dom"
import useAuth from "../../hooks/useAuth"



const Nav = () => {
  const location =  useLocation();
  const { auth } = useAuth()
  let userId = auth?.userId
  let username = auth?.username


  return (
    <nav>
        <div className='logo left-nav'>
            <Link to="/admin"><h1>KM Admin Dashboard</h1></Link>
            <ul>
            <li><NavLink end to="/admin/dashboard" className={location.pathname === '/admin/dashboard' ? 'active' : ''}>Blogposts</NavLink></li>
            <li><NavLink to="/admin/dashboard/users" className={location.pathname === '/admin/dashboard/users' ? 'active' : ''}>Users</NavLink></li>
            <li><NavLink to="/admin/dashboard/newpost" className={location.pathname === '/admin/dashboard/newpost' ? 'active' : ''}>New Post</NavLink></li>
            </ul>
        </div>
        <div className="right-nav">
            <ul>
                {userId &&  (
                  <>
                  <li>{username}</li>
                  <li className="log-btn"><Link to={`/admin/logout`}>Logout</Link></li>
                  </>
                ) }            
            </ul>
        </div>
    </nav>
  )
}

export default Nav
