import { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './Favorites-Orders.module.scss'
import Card from './Card';
import AppContext from '..';


export default function Orders() {

  const { orders=[] } = useContext(AppContext);

  return (
    <>
      {orders.length 
      ? <>  
          <div className={styles.contentHeader}>
            <Link to={`/sneakers-shop/`}>
              <img src="/img/icons/back-cube.svg" alt="To main" />
            </Link>
            <h1>Заказы</h1>
          </div>

          {orders.map((order, index) => 
            <div key={`Order-${index}`}>
              <h2 className={styles.orderTitle}>Заказ {index+1}</h2>
              <div className={styles.cards}>
                  {order.map((item) =>
                    <Card
                      key={`${index}-${item.sku}`}
                      {...item}
                    />
                  )}
              </div>
            </div>
          )}
        </>

      : <div className={styles.emptyContent}>
          <img className={styles.cryImg} src="/img/icons/cry-smile.png" alt="Cry smile" />
          <h2>У вас еще нет заказов!</h2>
          <p>Закажите любимые товары</p>
          <Link to={`/sneakers-shop/`}>
            <button className={styles.cartBackward} >К товарам
              <img className={styles.cartSBackwardArrow} src="/img/icons/arrow-backward.svg" alt="Go"/>
            </button>
          </Link>
        </div>
      }
    </>
  )
}
