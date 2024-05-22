import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './component/Footer';
import AboutUs from './pages/AboutUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<AboutUs/>} />
        </Routes>
        <Footer />


      </Router>


    </>
  )
}

export default App
