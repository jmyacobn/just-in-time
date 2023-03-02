import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import NYTlogo from '../../Assets/NYTlogo.jpeg'
import "./ArticleDetails.css"

const ArticleDetails = ({articles}) => {
  const [singleArticle, setSingleArticle] = useState({})
  const {id} = useParams()
 
  useEffect(() => {
    setSingleArticle(articles.find(article => (id === article.created_date)))
  }, [])

  const image = singleArticle.multimedia ? singleArticle.multimedia[1].url : NYTlogo
  return (
    <div>
      <NavBar />
      <div className='details-container'>
        <h2>{singleArticle.title}</h2>
        <h3>{singleArticle.byline}</h3>
        <h4><a href={singleArticle.url} target="_blank" rel="noopener noreferrer">Read This Article</a></h4>
        <img className="detail-image" src={image} alt="singleArticle.title"></img>
        <h4>Last updated: {singleArticle.updated_date}</h4>
        <h4>{singleArticle.abstract}</h4>
      </div>
    </div>
  )
}

export default ArticleDetails