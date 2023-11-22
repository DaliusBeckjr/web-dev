
import Navbar from './components/navbar'
import Home from './components/Home'
import Create from './components/Create'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



export default function App() {

  return (
    <>
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    </>
  )
}
