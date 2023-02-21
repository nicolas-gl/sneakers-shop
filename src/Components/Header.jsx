import styles from './Header.module.scss'
import { Link } from "react-router-dom";


export default function Header(props) {

  return (
    <header>
        
      <div className={styles.headerLeft}>
        <Link to={`/`}>
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
          <span onClick={props.openCart} className={styles.headerCartPrice}>1205 руб.</span>
        </li>
        <li className={styles.favorites}>
          <Link to={`/favorites`}>
            <img width={20} height={20} src="/img/icons/heart.svg" alt='Heart'/>
          </Link>
        </li>
        <li>
          <img src="/img/icons/user.svg" alt='User'/>
        </li>
      </ul>
      
    </header>
  )
}
