import react from 'react'
import { BrowserRouter , Route,Routes} from "react-router-dom";
import ArticlesPage from './Components/ArticlesPage'

import React from 'react';
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/articles" element={<ArticlesPage/>} />

      </Routes>
      <Footer/>
    
    </BrowserRouter>
  )
}

export default App
