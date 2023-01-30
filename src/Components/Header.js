import styles from './Header.module.scss'


export default function Header(props) {

  return (
    <header>

      <div className={styles.headerLeft}>
        <img width={40} height={40} src="/img/icons/logo.png" alt='logo-icon'/>
        <div>
        <h3>React Sneakers</h3>
        <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className={styles.headerRight}>
        <li>
        <img width={20} height={20} src="/img/icons/cart.svg" alt='cart-icon'/>
        <span className={styles.headerCartPrice}>1205 руб.</span>
        </li>
        <li>
        <img width={20} height={20} src="/img/icons/user.svg" alt='user-icon'/>
        </li>
      </ul>
      
    </header>
  )
}
