import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../NavBar/NavBar.js'
import ArticlesList from '../ArticlesList/ArticlesList.js'
import ArticleDetails from '../ArticleDetails/ArticleDetails.js'
import "./App.css"

const App = () => {

  const [articles, setArticles] = useState([])

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ArticlesList articles={articles} setArticles={setArticles}/>} />
        <Route />
      </Routes>
    </div>
  )
}

export default App
