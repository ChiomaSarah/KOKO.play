import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div>
          <Link to="/" className="nav-link">
            <img src="https://i.ibb.co/tHPtTKm/iconmonstr-sound-wave-1-240.png" alt="Logo" className="navbar-logo  mt-2 pb-1"
            /><h6 className=" text-light ml-2"><b>KOKO.play</b></h6>
          </Link>
        </div>
        <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
        <label htmlFor="nav__checkbox" className="nav__toggle">
          {/* menu bars */}
          <svg xmlns="http://www.w3.org/2000/svg" className="menu" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" title="bars"/></svg>
            {/* close button */}
          <svg xmlns="http://www.w3.org/2000/svg" className="close" width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" title="times"/>
          </svg>
        </label>

        <ul className="nav__menu">
          <li className="nav-items">
            <Link to="/" className=" navbar-links">
              Home
            </Link>
          </li>

          <li className="nav-items">
            <Link to="/albums" className="navbar-links">
              Top Albums
            </Link>
          </li>
          
          <li className="nav-items">
            <Link to="/songs" className="navbar-links">
              Top Songs
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
