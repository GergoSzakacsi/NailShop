import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './header.css';

function Header() {
  const isAuthenticated = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div className="header-container">
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid p-0">
          <a className="navbar-brand pl-4" href="/">
            Nail Shop
          </a>
          <button
            className="navbar-toggler ppr/4 bg-light mr-4 mt-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse pr-5 mb-2" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Főoldal
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  Rólunk
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricelist">
                  Árlista
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Kapcsolat
                </a>
              </li>
              {isAuthenticated ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faUser} /> Profil
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li>
                      <a className="dropdown-item" href="/profile">
                        My Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={handleLogout} href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/signin">
                    Bejelentkezés
                  </a>
                </li>
              )}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Szolgáltatásaink
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="/nails">
                      Műköröm
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action/3.2">
                      Saját köröm megerősítése
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#action/3.3">
                      Gellac
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
