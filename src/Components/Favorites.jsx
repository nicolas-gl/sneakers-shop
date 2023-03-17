import { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './Favorites-Orders.module.scss'
import Card from './Card';
import AppContext from '..';


export default function Favorites() {

  const { favorites = [] } = useContext(AppContext);

  return (
    <>

      {favorites.length
        ? <>
          <div className={styles.contentHeader}>
            <Link to={`/sneakers-shop/`}>
              <img src="img/icons/back-cube.svg" alt="To main" />
            </Link>
            <h1>Избранное</h1>
          </div>

          <div className={styles.cards}>
            {favorites.map((item) =>
              <Card
                key={"Favorites" + item.sku}
                {...item}
              />
            )}
          </div>
        </>
        : <div className={styles.emptyContent}>
          <img className={styles.cryImg} src="img/icons/sad-smile.png" alt="Sad smile" />
          <h2>Избранного нет :&#40;</h2>
          <p>Отметьте понравившиеся товары в избранное</p>
          <Link to={`/sneakers-shop/`}>
            <button className={styles.cartBackward} >К товарам
              <img className={styles.cartSBackwardArrow} src="img/icons/arrow-backward.svg" alt="Go" />
            </button>
          </Link>
        </div>
      }
    </>
  )
}
