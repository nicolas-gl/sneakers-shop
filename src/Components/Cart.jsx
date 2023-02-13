import styles from './Cart.module.scss'

export default function Cart({closeCart, onCartDel, cartItems=[]}) {
  return (
    <div className={styles.cartOverlay}>
      <aside className={styles.cartPopup}>
        <h2>Корзина 
          <img className={styles.cartItemRemove} onClick={closeCart} src="/img/icons/del-close.svg" alt="Close Card" />
        </h2>

        {cartItems.length > 0 

          ? <> 
            <div className={styles.cartItems}>
            {cartItems.map(item => (
              <div key={item.id} id={item.id} className={styles.cartItem}>
                <img width={70} height={70} src={item.imgUrl} alt={item.imgAlt} />
                <div className={styles.cartItemPrice}>
                  <p>{item.title}</p>
                  <b>{item.price} руб.</b>
                </div>
                <img className={styles.cartItemRemove} onClick={() => onCartDel(item.id)} src="/img/icons/del-close.svg" alt="DeleteItem" />
              </div>
            ))}
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
          </> 
          
          : <div className={styles.emptyCard}>
              <img width={120} src="/img/icons/empty-cart.png" alt="Empty Cart"/>
              <h3>Корзина пуста</h3>
              <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ</p>
              <button className={styles.cartBackward} onClick={closeCart}>Вернуться назад
                <img className={styles.cartSBackwardArrow} src="/img/icons/arrow-backward.svg" alt="Go"/>
              </button>
            </div>
        }




      </aside>
    </div>
  )
}
