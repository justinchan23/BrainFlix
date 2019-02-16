import React from 'react'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Upload from './Components/Upload'
import './Styles/styles.css'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={withRouter(Main)} />
            <Route exact path="/upload" component={withRouter(Upload)} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
