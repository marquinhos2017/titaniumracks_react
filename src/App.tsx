import React from 'react'
import logo from './logo.svg'
import './App.css'
import Products from './components/Products/Products'
import capa from './assets/images/IMG_4233 1 (1).png'

import Banner from './components/Banner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './pages/Index'
import RacksPiano from './pages/RacksTeclados'
import GlobalStyle from './styles'
import Footer from './components/Footer'
import { RacksTecladoItem } from './pages/RacksTecladoItem'
import Header from './components/Header'
import Rotas from './routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
