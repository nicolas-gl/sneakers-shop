import styles from './Header.module.scss'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import AppContext from '..';



export default function Header(props) {

  const { cartItems } = useContext(AppContext);

  const cartTotal = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header>
        
      <div className={styles.headerLeft}>
        <Link to={`/sneakers-shop/`}>
          <img width={40} height={40} src="/img/icons/logo.png" alt='logo-icon'/>
        </Link>
        <div>
        <h3>First Sneakers Shop</h3>
        <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className={styles.headerRight}>
        <li>
          <img onClick={props.openCart} src="/img/icons/cart.svg" alt='Cart'/>
          <span onClick={props.openCart} className={styles.headerCartPrice}>{cartTotal} руб.</span>
        </li>
        <li className={styles.favorites}>
          <Link to={`/sneakers-shop/favorites`}>
            <img width={20} height={20} src="/img/icons/heart.svg" alt='Heart'/>
          </Link>
        </li>
        <li>
          <Link to={`/sneakers-shop/orders`}>
            <img src="/img/icons/user.svg" alt='User'/>
          </Link>
        </li>
      </ul>
      
    </header>
  )
}
