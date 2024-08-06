import react from 'react'
import { BrowserRouter , Route,Routes} from "react-router-dom";
import ArticlesPage from './Components/ArticlesPage'
import ArticleDetailPage from './Components/ArticleDetailPage.jsx';
import React from 'react';
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';



function App() {
  
  return (
  <>
    
    <BrowserRouter>
      <Header />
      <div className="main-content">
       <Routes>
        <Route path="/" element={<ArticlesPage/>} />
        <Route path="/articles" element={<ArticlesPage/>} />
        <Route path="/article/:article_id" element={<ArticleDetailPage/>} />
       </Routes>
      </div>
     <Footer/>
    
    </BrowserRouter>
    
  
  </>
  )
}
export default App
