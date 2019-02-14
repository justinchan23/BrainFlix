import './Styles/styles.css'
import React, { Component } from 'react'
import Nav from './Components/Nav'
import Main from './Components/Main'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
      </div>
    )
  }
}

export default App
