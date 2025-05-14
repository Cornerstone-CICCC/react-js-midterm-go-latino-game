import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
        </Routes>
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
