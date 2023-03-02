import React, {useEffect} from 'react'
import NavBar from '../NavBar/NavBar.js'
import ArticleCard from '../ArticleCard/ArticleCard.js'
import "./ArticlesList.css"

const ArticlesList = ({articles, setArticles}) => {

  useEffect(() => {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=NSEAxjEQ9oAZ3Bvgkxsr6N68vVSDAkG9', {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => setArticles(data.results))
  }, [])

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