import React from 'react'
import { navbarData } from '../utils/navbar'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import RpiCapital from '../view/RpiCapital.'
import PrMedia from '../view/PrMedia'
import PrMedia2 from '../view/PrMedia2'
import PrMedia3 from '../view/PrMedia3'
import PrMedia4 from '../view/PrMedia4'
import Navbar from '../components/Navbar'

const Root = () => {
  return (
    <div className="root">
      <Router>
        <Switch>
          <Navbar />
        </Switch>
        <Switch>
          {navbarData.map(({ path, id, component }) => (
            <Route key={id} path={path} component={component} />
          ))}
          <Route path='/capital' component={RpiCapital}/>
          <Route path='/prmedia' component={PrMedia}/>
          <Route path="/">
            <Redirect to="/домa" />
          </Route>

          <Route path="*">
            <Redirect to="/error" />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Root
