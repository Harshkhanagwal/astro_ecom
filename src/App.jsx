import React from 'react'
import { Route, Routes } from 'react-router-dom'

//components
import Home from './pages/Home'
import Productpage from './pages/Productpage'
import {Header} from './Components/header/header'

//stylesheets
import './style.css'


const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<Productpage />} />
                <Route path='*' element={<h1> Error 404 : page not found </h1>} />
            </Routes>
        </>
    )
}

export default App