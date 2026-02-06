import styles from './ProductCard.module.css'
import star from '../../assets/star.svg'
import emptyStar from '../../assets/emptyStar.svg'
import heart from '../../assets/heart.svg'

function ProductCard(props) {
  return (
    <div className={styles.productCard}>
      <div className="product-image">
        <img src={props.image} alt="" />
      </div>
      <div className={styles.productDetails}>
        <h3>{props.title}</h3>
        <div className={styles.author}>
          <small><span className={styles.authorName}>Author:</span> {props.author}</small>
        </div>
        <small className={styles.description}>{props.description}</small>
        <div className={styles.ratePrice}>
          <div className={styles.review}>
          <p>
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={emptyStar} alt="" />
            <img src="" alt="" />
            ({props.reviews} review)</p>
          <p>Rate: <span className={styles.rateNumber}>{props.rate}</span></p>
          </div>
          <div className={styles.price}>
            <p>${props.price}</p>
          </div>
        </div>
        <div className={styles.productBtns}>
          <button className={styles.productButton}>{props.isAddedToCart ? "Remove From Cart" : "Add To Cart"}</button>
          <button className={styles.favBtn}>
            <img src={heart} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
