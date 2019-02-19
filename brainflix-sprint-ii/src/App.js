import React from 'react'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Upload from './Components/Upload'
import './Styles/styles.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/upload" component={Upload} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
