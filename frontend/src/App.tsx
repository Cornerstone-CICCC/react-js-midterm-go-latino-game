import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import './App.css'

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App