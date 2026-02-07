import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";
import { MenuIcon } from "./MenuIcon";

function Navbar() {
  const { pathname } = useLocation();
  const showHomeLink = pathname === "/albums" || pathname === "/songs";

  const navCheckboxRef = useRef(null);

  const closeMenu = () => {
    if (navCheckboxRef.current) {
      navCheckboxRef.current.checked = false;
    }
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="nav">
      <div>
        <Link to="/" className="nav-link" onClick={closeMenu}>
          <img
            src="https://i.ibb.co/tHPtTKm/iconmonstr-sound-wave-1-240.png"
            alt="Logo"
            className="navbar-logo mt-2 pb-1"
          />
          <h6 className="text-light ml-2">
            <b>KOKO.play</b>
          </h6>
        </Link>
      </div>

      <input
        type="checkbox"
        id="nav__checkbox"
        className="nav__checkbox"
        ref={navCheckboxRef}
      />
      <label htmlFor="nav__checkbox" className="nav__toggle">
        <MenuIcon />
      </label>

      <ul className="nav__menu">
        {showHomeLink && (
          <li className="nav-items">
            <Link
              to="/"
              className={`navbar-links ${isActive("/") ? "active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
        )}
        <li className="nav-items">
          <Link
            to="/albums"
            className={`navbar-links ${isActive("/albums") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Top Albums
          </Link>
        </li>
        <li className="nav-items">
          <Link
            to="/songs"
            className={`navbar-links ${isActive("/songs") ? "active" : ""}`}
            onClick={closeMenu}
          >
            Top Songs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
