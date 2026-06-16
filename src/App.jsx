import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import BlogDetails from './pages/BlogDetails.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/team" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog-details" element={<BlogDetails />} />
    </Routes>
  )
}

export default App
