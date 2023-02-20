import { useContext } from 'react';
import styles from './Favorites.module.scss'
import Card from './Card';
import AppContext from '../context.js'
import { Link } from "react-router-dom";


export default function Favorites() {

  const { favorites, addToFavorites, addToCart } = useContext(AppContext);

  return (
    <>
      <div className={styles.contentHeader}>
        <Link to={`/`}>
          <img src="/img/icons/back-cube.svg" alt="To main" />
        </Link>
        <h1>Избранное</h1>
      </div>

      <div className={styles.cards}>
        {favorites.map((item) =>
          <Card
            key={item.sku}
            {...item}
            onFavorite={(obj) => addToFavorites(obj)}
            onCartAdd={(obj) => addToCart(obj)}
          />)
        }
      </div>
    </>
  )
}
