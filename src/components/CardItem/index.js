// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardItem} = props
  const {title, description, imgUrl, className} = cardItem
  return (
    <li className={className}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>

      <img src={imgUrl} alt="{title}" />
    </li>
  )
}
export default CardItem
