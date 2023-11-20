import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import './App.css'

// pages
import Home from './pages/Home'
import About from './pages/About'

// layouts
import RootLayout from './layouts/rootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='about'  element={<About />} />
    </Route>
  )
)

export default function App() {

  return (
    <>
        <main>
          <RouterProvider router={router} />
        </main>
    </>
  )
}

