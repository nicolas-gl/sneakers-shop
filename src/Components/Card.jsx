import { useState } from 'react'
import styles from './Card.module.scss'


export default function Card({ now, id, title, imgUrl, imgAlt, price, onFavorite, onCartAdd, onCartDel }) {

  const [inCart, setInCart] = useState(false);
  // const [isFavorite, setIsFavorite] = useState(false);


  const onAddCartClicked = () => {
    inCart 
    ? onCartDel(id)
    : onCartAdd({ id, title, imgUrl, imgAlt, price });
    setInCart(!inCart);
  };



  const onAddFavoritesClicked = () => {
    // setIsFavorite(!isFavorite);
    // isCartAdded
    // onFavorite({ id, title, imgUrl, imgAlt, price });
    // setIsFavoritesAdded(!isFavoritesAdded);
  };



  return (
    <div className={styles.card}>
      <img
        className={styles.favorite}
        // onClick={onAddFavoritesClicked}
        // src={isFavorite ? "/img/icons/heart-liked.svg" : "/img/icons/heart-unliked.svg"}
        alt="unliked"
      />

      <img width={133} height={112} src={imgUrl} alt={imgAlt} />
      <h5>{title}</h5>

      <div className={styles.cardButtom}>
        <div className={styles.cardButtomPrice}>
          <p>Цена</p>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plusButton}
          onClick={onAddCartClicked}
          src={inCart ? "/img/icons/added.svg" : "/img/icons/plus.svg"}
          alt="Plus"
        />
      </div>

    </div>
  )
}
