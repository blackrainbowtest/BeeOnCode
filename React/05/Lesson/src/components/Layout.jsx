import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  );
};

export default Layout;
