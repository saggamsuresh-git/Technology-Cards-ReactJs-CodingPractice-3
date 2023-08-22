// Write your code here.
import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className} id="eachCard">
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="image-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Card
