
import Navbar from './components/navbar'
import Home from './components/Home'



export default function App() {

  return (
    <>
      <div className="app">
        <Navbar />
        <div className="content">
          <Home />
        </div>
      </div>
    </>
  )
}
