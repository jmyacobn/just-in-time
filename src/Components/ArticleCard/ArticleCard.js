import React from 'react'
import "./ArticleCard.css"

const ArticleCard = ({id, image, title, author, viewArticleDetails}) => {
  return (
    <div className='article-card' key={id} onClick={()=> viewArticleDetails(id)}>
      <div className='article-img'>
        <img  src={image} alt={title}></img>
      </div>
      <div className="card-info">
        <p>{title}</p>
        <p>{author}</p>
      </div>
    </div>
  )
}

export default ArticleCard