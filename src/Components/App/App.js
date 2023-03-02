import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import ArticlesList from '../ArticlesList/ArticlesList.js'
import ArticleDetails from '../ArticleDetails/ArticleDetails.js'
import "./App.css"
import { getArticles } from '../../APIcalls.js'

const App = () => {

  const [articles, setArticles] = useState([])
  const [category, setCategory] = useState("home")
  const [singleArticle, setSingleArticle] = useState({})
  const [error, setError] = useState("")

  useEffect(() => {
    getArticles(category)
    .then(data => setArticles(data.results))
    .catch((error) => {
      setError('Oops, something went wrong. Please try again later.')
    })
  }, [])

  const viewArticleDetails = (id) => {
    return setSingleArticle(articles.find(article => (id === article.uri)))
  }
  
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ArticlesList articles={articles} setArticles={setArticles} viewArticleDetails={viewArticleDetails}/>} />
        <Route exact path="/details/:id" element={<ArticleDetails singleArticle={singleArticle}/>} />
      </Routes>
    </div>
  )
}

export default App
