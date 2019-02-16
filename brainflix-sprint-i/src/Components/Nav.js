import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav__items">
            <BrowserRouter>
              <div className="nav__item">
                <Link to="/">
                  <img src={'./Assets/Logo/Logo-brainflix.png'} className="nav__logo" alt="" />
                </Link>
              </div>
            </BrowserRouter>
            <BrowserRouter>
              <div className="nav__item">
                <input
                  className="nav__search nav__spacing"
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search"
                />
                <Link to="/upload">
                  <button className="nav__button nav__spacing">+ UPLOAD</button>
                </Link>
                <img src={'./Assets/Images/Mohan-muruge.jpg'} className="nav__profilePic" alt="" />
              </div>
            </BrowserRouter>
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav
