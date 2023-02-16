import { useState, useEffect } from 'react'
import styles from './Card.module.scss'


export default function Card({ sku, title, imgUrl, imgAlt, price, onFavorite, onCartAdd, onCartDel, cartItems }) {

  const [inCart, setInCart] = useState(false);


  // const [isFavorite, setIsFavorite] = useState(false);


  useEffect( () => {
    let nowInCart;
    nowInCart = cartItems.find(item => item.sku === sku);
    nowInCart
      ? setInCart(true)
      : setInCart(false)
    }
  , [cartItems, sku] );


  const onCartAddClicked = () => {
    setInCart("waiting");
    let nowInCart = cartItems.find(item => item.sku === sku);
    if (inCart) {
      onCartDel(nowInCart.id)
    } else {
      onCartAdd({ sku, title, imgUrl, imgAlt, price });
    }
  };

    // const onAddFavoritesClicked = () => {
    // setIsFavorite(!isFavorite);
    // isCartAdded
    // onFavorite({ id, title, imgUrl, imgAlt, price });
    // setIsFavoritesAdded(!isFavoritesAdded);
  // };


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

        {inCart==="waiting"
          ? <img width={32} height={32} src="/img/icons/waiting.svg" alt="Wait"/>
          : <img
            className={styles.plusButton}
            onClick={onCartAddClicked}
            src={inCart===true ? "/img/icons/added.svg" : "/img/icons/plus.svg"}
            alt="Plus"
          />
        }
        
      </div>

    </div>
  )
}
