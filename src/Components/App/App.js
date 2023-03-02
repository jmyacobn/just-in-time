import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../NavBar/NavBar.js'
import ArticlesList from '../ArticlesList/ArticlesList.js'
import ArticleDetails from '../ArticleDetails/ArticleDetails.js'
import "./App.css"
import { getArticles } from '../../APIcalls.js'

const App = () => {

  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState("home")
  const [error, setError] = useState("")

  useEffect(() => {
    getArticles(category)
    .then(data => setArticles(data.results))
    .catch((error) => {
      setError('Oops, something went wrong. Please try again later.')
    })
  })

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
