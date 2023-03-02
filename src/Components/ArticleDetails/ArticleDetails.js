import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import NYTlogo from '../../Assets/NYTlogo.jpeg'
import "./ArticleDetails.css"

const ArticleDetails = ({articles}) => {
  const {id} = useParams()
  const [singleArticle, setSingleArticle] = useState({})

  useEffect(() => {
    setSingleArticle(articles.find(article => (id === article.created_date)))
  }, [])

  console.log(singleArticle)
  
  const image = singleArticle.multimedia ? singleArticle.multimedia[1].url : NYTlogo
  return (
    <div>
      <div className='details-container'>
        <h2>{singleArticle.title}</h2>
        <h3>{singleArticle.byline}</h3>
        <h4><a href={singleArticle.url}>Read This Article</a></h4>
        <img className="detail-image" src={image} alt="singleArticle.title"></img>
        <h4>Last updated: {singleArticle.updated_date}</h4>
        <h4>{singleArticle.abstract}</h4>
      </div>
    </div>
  )
}

export default ArticleDetails