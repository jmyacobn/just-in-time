import React from 'react'
import NavBar from '../NavBar/NavBar.js'
import ArticleCard from '../ArticleCard/ArticleCard.js'
import "./ArticlesList.css"

const ArticlesList = ({articles}) => {

  const eachArticle = articles.map(article => {
    return (
      <ArticleCard
        id={article.uri}
        image={article.multimedia[2].url}
        title={article.title}
        author={article.byline}
      />
    )
  })

  return (
    <div>
      <NavBar />
      <div className="article-container">
        {eachArticle}
      </div>
    </div>
    
  )
}

export default ArticlesList