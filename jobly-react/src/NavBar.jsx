import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

/** NavBar component
 *
 * Props:
 * - none
 *
 * State:
 * -none
 *
 * App -> NavBar
 */
function NavBar({ userData, logOut }) {
  console.log("NAVBAR User", userData);
  return (
    <nav className="NavBar navbar navbar-expand-sm">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink
            className=" navbar-brand"
            to="/"
          >
            Jobly
          </NavLink>
        </div>
        <ul className="nav navbar-nav mx-2">
          {userData.user !== null ? (
            <>
              <li>
                <NavLink
                  className="mx-2"
                  to="/profile"
                >
                  Profile
                </NavLink>
              </li>
              <li className="active">
                <NavLink
                  className="mx-2"
                  to="/companies"
                >
                  Companies
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mx-2"
                  to="/jobs"
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <button
                  onClick={logOut}
                  className="btn btn-link"
                >
                  Log out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className="mx-2"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="mx-2"
                  to="/signup"
                >
                  Sign up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
