import React from 'react'
import { Route, Routes } from 'react-router-dom'

//components
import Home from './pages/Home'
import Productpage from './pages/Productpage'

//stylesheets
import './index.css'


const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Productpage/>} />
            <Route path='*' element={<h1> Error 404 : page not found </h1>} />
        </Routes>
    )
}

export default App