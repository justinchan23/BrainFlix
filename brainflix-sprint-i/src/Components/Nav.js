import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <div class="nav__items">
              <div class="nav__item">
                <a href="index.html">
                  <img
                    src={require('../Assets/Logo/Logo-brainflix.png')}
                    class="nav__logo"
                    alt=""
                  />
                </a>
              </div>
              <div class="nav__item">
                <input
                  class="nav__search nav__spacing"
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Search"
                />
                <button class="nav__button nav__spacing">+ UPLOAD</button>
                <img
                  src={require('../Assets/Images/Mohan-muruge.jpg')}
                  class="nav__profilePic"
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
