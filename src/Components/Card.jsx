import { useState, useEffect, useContext } from 'react'
import styles from './Card.module.scss'
import ContentLoader from 'react-content-loader'
import AppContext from '..'


export default function Card({ sku, title, imgUrl, imgAlt, price }) {

  const { itemsLoading, cartItems, addToCart, delFromCart, favorites, delFromFavorites, addToFavorites } = useContext(AppContext);
  const [inCart, setInCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState();

  useEffect(() => {
    cartItems.find(item => item.sku === sku)    // check is item in Cart
      ? setInCart(true)
      : setInCart(false);
  }, [cartItems, sku]);

  useEffect(() => {
    favorites.find(item => item.sku === sku)   // check is item in Favorites
      ? setIsFavorite(true)
      : setIsFavorite(false);
  }, [favorites, sku]);


  const onCartAddClicked = () => {
    setInCart("waiting");
    let nowInCart = cartItems.find(item => item.sku === sku);
    if (inCart) {
      delFromCart(nowInCart)
    } else {
      addToCart({ sku, title, imgUrl, imgAlt, price });
    }
  };

  const onAddFavoritesClicked = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      delFromFavorites(sku)
    } else {
      addToFavorites({ sku, title, imgUrl, imgAlt, price });
    }
  };


  return (
    <div className={styles.card}>

      {itemsLoading
        ? <ContentLoader
          speed={2}
          width={150}
          height={230}
          viewBox="0 0 150 230"
          backgroundColor="#f3f3f3"
          foregroundColor="#ececec"
        >
          <circle cx="573" cy="232" r="20" />
          <rect x="69" y="44" rx="0" ry="0" width="0" height="2" />
          <rect x="180" y="155" rx="0" ry="0" width="0" height="1" />
          <rect x="34" y="27" rx="0" ry="0" width="2" height="5" />
          <rect x="97" y="79" rx="0" ry="0" width="0" height="2" />
          <rect x="97" y="79" rx="0" ry="0" width="0" height="1" />
          <rect x="57" y="90" rx="0" ry="0" width="0" height="1" />
          <rect x="15" y="2" rx="0" ry="0" width="1" height="0" />
          <rect x="0" y="0" rx="10" ry="10" width="150" height="126" />
          <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
          <rect x="137" y="231" rx="0" ry="0" width="0" height="1" />
          <rect x="56" y="154" rx="0" ry="0" width="0" height="1" />
          <rect x="0" y="142" rx="8" ry="8" width="150" height="40" />
          <rect x="0" y="200" rx="8" ry="8" width="96" height="28" />
          <rect x="118" y="198" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>

        : <>
          <img
            className={styles.favorite}
            onClick={onAddFavoritesClicked}
            src={isFavorite ? "img/icons/heart-liked.svg" : "img/icons/heart-unliked.svg"}
            alt="liked?"
          />

          <img width={150} src={imgUrl} alt={imgAlt} />
          <h5>{title}</h5>

          <div className={styles.cardButtom}>
            <div className={styles.cardButtomPrice}>
              <p>Цена</p>
              <b>{price} руб.</b>
            </div>

            {inCart === "waiting"
              ? <img width={32} height={32} src="img/icons/waiting.svg" alt="Wait" />
              : <img
                className={styles.plusButton}
                onClick={onCartAddClicked}
                src={inCart === true ? "img/icons/added.svg" : "img/icons/plus.svg"}
                alt="Plus"
              />
            }
          </div>
        </>
      }
    </div>
  )
}
