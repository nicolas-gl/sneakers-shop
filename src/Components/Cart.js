import styles from './Cart.module.scss'

export default function Cart() {
  return (
    <div style={{display: "none"}} className={styles.cartOverlay}>
        <aside className={styles.cartPopup}>
            <h2>Корзина 
                <img className={styles.cartItemRemove} width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
            </h2>
            
            <div className={styles.cartItems}>
                <div className={styles.cartItem}>
                    <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                    <div className={styles.cartItemPrice}>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className={styles.cartItemRemove} width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
                </div>

                <div className={styles.cartItem}>
                    <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                    <div className={styles.cartItemPrice}>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className={styles.cartItemRemove} width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
                </div>

                <div className={styles.cartItem}>
                    <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                    <div className={styles.cartItemPrice}>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className={styles.cartItemRemove} width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
                </div>

                <div className={styles.cartItem}>
                    <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                    <div className={styles.cartItemPrice}>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className={styles.cartItemRemove} width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
                </div>

                <div className={styles.cartItem}>
                    <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                    <div className={styles.cartItemPrice}>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className={styles.cartItemRemove} width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
                </div>

                <div className={styles.cartItem}>
                    <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                    <div className={styles.cartItemPrice}>
                        <p>Мужские Кроссовки Nike Air Max 270</p>
                        <b>12 999 руб.</b>
                    </div>
                    <img className={styles.cartItemRemove} width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
                </div>
            </div>

            <ul className={styles.cartTotal}>
            <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
            </li>
            <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
            </li>
            </ul>
        

            <button className={styles.cartSubbmit}>Оформить заказ 
                <img className={styles.cartSubbmitArrow} src="/img/icons/arrow-forward.svg" alt="Go"/>
            </button>
        </aside>
    </div>
  )
}
