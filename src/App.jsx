import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.scss'
import Cart from './Components/Cart';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import AppContext from '.'


export default function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [itemsLoading, setItemsLoading] = useState(true);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    try {
      axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/items')
        .then(res => { setItems(res.data[0].sneakers.items) });
      axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/additional/sneakers')
        .then(res => {
          setCartItems(res.data.cart);
          setItemsLoading(false);
        });
    } catch (error) {
      console.log("не удалось загрузить товары или корзину", error)
    };
  }, []);

  const addToCart = async (obj) => {
    try {
      setCartItems([...cartItems, obj]);
      await axios.put(`https://63da6dca2af48a60a7cd9696.mockapi.io/additional/${"sneakers"}`, { "cart": [...cartItems, obj] });
    } catch (error) {
      console.log(`не удалось добавить в корзину ${obj.title}`, error)
    };
  };

  const delFromCart = async (obj) => {
    try {
      var now = [...cartItems.filter(item => item.sku !== obj.sku)];
      setCartItems(now);
      await axios.put(`https://63da6dca2af48a60a7cd9696.mockapi.io/additional/${"sneakers"}`, { "cart": now });
    } catch (error) {
      console.log(`не удалось удалить из корзины ${obj.title}`, error);
      alert(`не удалось удалить из корзины ${obj.title}`, error);
    };
  };

  const addToFavorites = (obj) => {
    setFavorites(prev => [...prev, obj]);
  };

  const delFromFavorites = (sku) => {
    setFavorites(prev => prev.filter(item => item.sku !== sku));
  };

  const addToOrders = (obj) => {
    setOrders(prev => [...prev, obj]);
  }


  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        addToCart,
        delFromCart,
        favorites,
        addToFavorites,
        delFromFavorites,
        itemsLoading,
        orders,
      }}
    >

      <div className={styles.wrapper}>
        <button onClick={() => { console.log(cartItems) }}>ЖМИ</button>

        <Cart
          opened={cartOpened}
          closeCart={() => { setCartOpened(false) }}
          onCartDel={delFromCart}
          cartItems={cartItems}
          setCartItems={setCartItems}
          addToOrders={addToOrders}
        />


        <Header openCart={() => { setCartOpened(true) }} />

        <Outlet />

      </div>

    </AppContext.Provider>
  );
};
