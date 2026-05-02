import React from 'react'

import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import GlobalStyle from './styles'
import Footer from './components/Footer'

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
