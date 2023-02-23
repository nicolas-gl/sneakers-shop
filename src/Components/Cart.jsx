import { useState } from 'react'
import axios from 'axios';
import styles from './Cart.module.scss'
import Info from './Info';


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, 1000));

export default function Cart({closeCart, onCartDel, cartItems=[], setCartItems }) {

  const [isOrdered, setIsOrdered] = useState(false);

  const onMakeOrder = async () => {
    setIsOrdered(true);
    setCartItems([]);
    for (let item of cartItems) {
      const id = item.id;
      try {
        // crutch for Mockapi. Because 
        await axios.delete(`https://63da6dca2af48a60a7cd9696.mockapi.io/cart/${id}`);
        await delay(100);  
      } catch (error) {
        console.log("не удалось удалить", error)
      }
    }
  }


  const cartTotal = cartItems.reduce((sum, obj) => obj.price + sum, 0);


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
                <div key={item.sku} id={item.id} className={styles.cartItem}>
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
                  <b>{cartTotal} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(cartTotal*0.05).toFixed(2)} руб.</b>
                </li>
              </ul>
              <button className={styles.cartSubbmit} onClick={onMakeOrder}>Оформить заказ 
                <img className={styles.cartSubbmitArrow} src="/img/icons/arrow-forward.svg" alt="Go"/>
              </button>
            </> 
          
          : isOrdered
            ? <Info
                closeCart = {closeCart}
                imgPath = "/img/icons/ordered.png"
                h = 'Заказ оформлен'
                p = 'Ваш заказ скоро будет передан курьерской доставке'
              />
            : <Info
                closeCart = {closeCart}
                imgPath = "/img/icons/empty-cart.png"
                h = 'Корзина пуста'
                p = 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'
              />
        }

      </aside>
    </div>
  )
}
