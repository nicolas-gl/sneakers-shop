import { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './Favorites.module.scss'
import Card from './Card';
import AppContext from '..';


export default function Favorites() {

  const { favorites, addToFavorites, addToCart } = useContext(AppContext);

  return (
    <>

      {favorites.length 
      ? <>
          <div className={styles.contentHeader}>
            <Link to={`/`}>
              <img src="/img/icons/back-cube.svg" alt="To main" />
            </Link>
            <h1>Избранное</h1>
          </div>

          <div className={styles.cards}>

            {favorites.length 
              ? favorites.map((item) =>
                <Card
                  key={item.sku}
                  {...item}
                  onFavorite={(obj) => addToFavorites(obj)}
                  onCartAdd={(obj) => addToCart(obj)}
                />)
              : <>
                  <img src="/img/icons/cry-smile.png" alt="" />
                </>
            }
          </div>
        </>
      : <div className={styles.emptyContent}>
          <img className={styles.cryImg} src="/img/icons/cry-smile.png" alt="" />
          <h2>Избранного нет :&#40;</h2>
          <p>Отметьте понравившиеся товары в избранное </p>
          <Link to={`/`}>
            <button className={styles.cartBackward} >К товарам
              <img className={styles.cartSBackwardArrow} src="/img/icons/arrow-backward.svg" alt="Go"/>
            </button>
          </Link>
        </div>}
    </>
  )
}
