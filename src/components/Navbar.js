import { useEffect } from 'react';
import {Link,useLocation} from 'react-router-dom'
export const Navbar = () => {
    let location = useLocation()

    useEffect( () => {},[location]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/bank' ? 'active' : ''}`} aria-current="page" to="/bank">
                  Banking
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/postoffice' ? 'active' : ''}`} to="/postoffice">
                  Post Office
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/sharemarket' ? 'active' : ''}`} to="sharemarket">
                  Share Market
                </Link>
              </li>
            </ul>
            
              <form className="d-flex">
                <Link
                  className="btn btn-primary mx-2"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
                <Link
                  className="btn btn-primary mx-2"
                  to="/signup"
                  role="button"
                >
                  SignUp
                </Link>
              </form>
            
           
          </div>
        </div>
      </nav>
    </>
  );
};
