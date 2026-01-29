// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
//hashrouter aka router is a big tag that we wrap the whole app in to create routing env
//routes is the argument/component where we specify the routes we want to have
//route is the individual route/route that we wrap within routes component
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/home'
import { About_Us } from './Pages/about_us'
import { Order } from './Pages/order'
import { Contact_Us } from './Pages/contact_us'
import { NavBar } from './Components/NavBar'

function App() {

  return (
    <Router>
      <div className="app-header">
        <img src="/src/assets/logo-placeholder.png" alt="RFCO logo" className="logo" />
        <div className="navbar-wrapper">
          <NavBar />
        </div>
      </div>
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About_Us />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact_us" element={<Contact_Us />} />
        </Routes>
      </div>
    </Router>
  )

}

export default App
