// import './App.css'

// importo elementi react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importa pagine
import Header from './components/Header'
import Footer from './components/Footer'


//importa componenti


function App() {


  return (
    <>
      <Router>
        <Header></Header>
        <Footer></Footer>
      </Router>

    </>
  )
}

export default App
