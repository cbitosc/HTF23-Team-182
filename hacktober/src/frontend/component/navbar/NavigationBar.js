import { NavLink } from "react-router-dom";
import Ank from "./Ank.jpg";
function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand d-flex" href="#">
          <img
            src={Ank}
            width="40px"
            className="rounded-circle"
            alt=""
          />
          <h3 className="ms-4 mt-1">ANK HOSPITALS</h3>
        </a>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/register"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>

            </ul>
        </div>
        </div>
    </nav>
  );
}

export default NavigationBar;