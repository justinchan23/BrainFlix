import React from 'react'
import Nav from './Components/Nav'
import Main from './Components/Main'
import Upload from './Components/Upload'
import './Styles/styles.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/upload" component={Upload} />
          <Route path="/videos/:id" component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
)

export default App
