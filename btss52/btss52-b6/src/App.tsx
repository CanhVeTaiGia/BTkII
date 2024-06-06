import React from 'react'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

export default function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='' element={<Home></Home>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}
