import React from 'react'
import {Link} from 'react-router-dom'
import "./ArticleCard.css"

const ArticleCard = ({id, image, title, author}) => {
  return (
    <Link
    to={`/details/${id}`}
    className="article-details"
    >
      <div className='article-card' key={id}>
        <div className='article-img'>
          <img  src={image} alt={title}></img>
        </div>
        <div className="card-info">
          <p>{title}</p>
          <p>{author}</p>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard