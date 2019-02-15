import React from 'react'
//import { Router, Route, Link } from 'react-router-dom'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <div className="nav__items">
              <div className="nav__item">
                <img src={'./Assets/Logo/Logo-brainflix.png'} className="nav__logo" alt="" />
              </div>
              <div className="nav__item">
                <input
                  className="nav__search nav__spacing"
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search"
                />
                <button className="nav__button nav__spacing">+ UPLOAD</button>
                <img src={'./Assets/Images/Mohan-muruge.jpg'} className="nav__profilePic" alt="" />
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Nav
