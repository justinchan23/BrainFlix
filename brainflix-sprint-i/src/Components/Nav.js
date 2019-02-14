import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <div className="nav__items">
              <div className="nav__item">
                <a href="index.html">
                  <img
                    src={require('../Assets/Logo/Logo-brainflix.png')}
                    className="nav__logo"
                    alt=""
                  />
                </a>
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
                <img
                  src={require('../Assets/Images/Mohan-muruge.jpg')}
                  className="nav__profilePic"
                  alt=""
                />
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Nav
