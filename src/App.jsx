import {useState} from 'react'
import { BrowserRouter , Route,Routes} from "react-router-dom";
import ArticlesPage from './Components/ArticlesPage'
import ArticleDetailPage from './Components/ArticleDetailPage.jsx';
import React from 'react';
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import UserList from './Components/UserList'
import {UserProvider} from './Components/UserContext'


function App() {
    
  return (
  
 <UserProvider>
     <BrowserRouter>
      <Header />
       <div className="main-content">
        <Routes>
         <Route path="/" element={<ArticlesPage/>} />
         <Route path="/articles" element={<ArticlesPage/>} />
         <Route path="/articles/:article_id" element={<ArticleDetailPage/>} />
         <Route path="/users" element={<UserList/>} />
        </Routes>
       </div>
      <Footer/>
    
     </BrowserRouter>
  </UserProvider> 

  )
}
  
export default App
