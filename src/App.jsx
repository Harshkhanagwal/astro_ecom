import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

//components
import Home from './pages/Home'
import Productpage from './pages/Productpage'
import { Header } from './Components/header/Header'
import Navbar from './Components/nav/Navbar'

//stylesheets
import './style.css'

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product' element={<Productpage />} />
                    <Route path='*' element={<h1> Error 404 : page not found </h1>} />
                </Routes>
            </Router>
        </>
    )
}

export default App