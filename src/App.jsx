// import './App.css'

// importo elementi react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // importa componenti
// import Header from './components/Header'
// import Footer from './components/Footer'

// importa layout
import MainLayout from './layouts/MainLayout'


// importa pagine
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PostsPage from './pages/PostsPage'


//importa componenti


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<MainLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
