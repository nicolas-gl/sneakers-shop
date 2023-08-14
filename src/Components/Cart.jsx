import { useState } from 'react'
import axios from 'axios';
import styles from './Cart.module.scss'
import Info from './Info';
import useOutsideClick from '../useOutsideClick';


export default function Cart({ opened, closeCart, onCartDel, cartItems = [], setCartItems, addToOrders }) {

  const ref = useOutsideClick(opened, closeCart);
  const [isOrdered, setIsOrdered] = useState(false);

  const onMakeOrder = async () => {
    addToOrders(cartItems);
    setIsOrdered(true);
    setCartItems([]);
    try {
      axios.put(`https://63da6dca2af48a60a7cd9696.mockapi.io/additional/${"sneakers"}`, { "cart": [] });
    } catch (error) {
      console.log("не удалось очистить корзину", error)
    };
  }

  const onCartCloseClick = () => {
    closeCart();
    setIsOrdered(false);
  }

  const cartTotal = cartItems.reduce((sum, obj) => obj.price + sum, 0);


  return (

    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ``}`}>
      <aside ref={ref} className={styles.popup}>

        <h2>Корзина
          <img className={styles.itemRemove} onClick={onCartCloseClick} src="img/icons/del-close.svg" alt="Close Card" />
        </h2>

        {cartItems.length > 0
          ? <>
            <div className={styles.items}>
              {cartItems.map(item => (
                <div key={item.sku} id={item.id} className={styles.item}>
                  <img width={70} height={70} src={item.imgUrl} alt={item.imgAlt} />
                  <div className={styles.itemPrice}>
                    <p>{item.title}</p>
                    <b>{item.price} руб.</b>
                  </div>
                  <img className={styles.itemRemove} onClick={() => onCartDel(item)} src="img/icons/del-close.svg" alt="DeleteItem" />
                </div>
              ))}
            </div>
            <ul className={styles.total}>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>{cartTotal} руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>{(cartTotal * 0.05).toFixed(2)} руб.</b>
              </li>
            </ul>
            <button className={styles.subbmit} onClick={onMakeOrder}>Оформить заказ
              <img className={styles.subbmitArrow} src="img/icons/arrow-forward.svg" alt="Go" />
            </button>
          </>

          : isOrdered
            ? <Info
              closeCart={onCartCloseClick}
              imgPath="img/icons/ordered.png"
              h='Заказ оформлен'
              p='Ваш заказ скоро будет передан курьерской доставке'
            />
            : <Info
              closeCart={onCartCloseClick}
              imgPath="img/icons/empty-cart.png"
              h='Корзина пуста'
              p='Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ'
            />
        }

      </aside>
    </div>

  )
}
