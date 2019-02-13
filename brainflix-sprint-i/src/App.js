import './Styles/styles.css'
import React, { Component } from 'react'
import Nav from './Components/Nav'
import TopButton from './Components/TopButton'
import Main from './Components/Main'
import MainContent from './Components/MainContent'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
        <TopButton />
        <MainContent />
      </div>
    )
  }
}

export default App
