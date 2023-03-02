import React from 'react'
import NavBar from '../NavBar/NavBar.js'
import ArticleCard from '../ArticleCard/ArticleCard.js'
import "./ArticlesList.css"
import NYTlogo from '../../Assets/NYTlogo.jpeg'

const ArticlesList = ({articles, viewArticleDetails}) => {
  const eachArticle = articles.map(article => {
    const image = article.multimedia ? article.multimedia[2].url : NYTlogo
    return (
      <ArticleCard
        id={article.created_date}
        image={image}
        title={article.title}
        author={article.byline}
        viewArticleDetails={viewArticleDetails}
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