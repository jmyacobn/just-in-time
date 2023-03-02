import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import NavBar from '../NavBar/NavBar.js'
import ArticlesList from '../ArticlesList/ArticlesList.js'
import ArticleDetails from '../ArticleDetails/ArticleDetails.js'
import "./App.css"

const App = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=NSEAxjEQ9oAZ3Bvgkxsr6N68vVSDAkG9', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => setArticles(data.results))
  }, [])

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
