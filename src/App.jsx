import './App.css'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
