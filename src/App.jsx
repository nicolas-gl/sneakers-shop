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
  const [searchValue, setSearchValue] = useState('');
  const [itemsLoading, setItemsLoading] = useState(true);
  const [orders, setOrders] = useState ([]);


  useEffect(() => {
    try {
      axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/items')
        .then(res => { setItems(res.data) });
      axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/cart')
        .then(res => {
          setCartItems(res.data);
          setItemsLoading(false);
        });
    } catch (error) {
      console.log("не удалось загрузить товары или корзину", error)
    };
  }, []);

  const addToCart = async (obj) => {
    try {
      const { data } = await axios.post('https://63da6dca2af48a60a7cd9696.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, data]);
    } catch (error) {
      console.log("не удалось добавить в корзину", error)
    }
  };

  const delFromCart = (id) => {
    try {
      axios.delete(`https://63da6dca2af48a60a7cd9696.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.log("не удалось удалить", error)
    }
  };

  const changeSearchInput = (event) => {
    setSearchValue(event.target.value);
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
        searchValue,
        setSearchValue,
        changeSearchInput,
        orders,
      }}
    >

      <div className={styles.wrapper}>

        {/* {cartOpened 
          ? <Cart 
              closeCart={() => { setCartOpened(false) }}
              onCartDel={delFromCart}                           // убрать отсюда... или нет...
              cartItems={cartItems} 
              setCartItems={setCartItems}
              addToOrders={addToOrders}
            />
          : null
        } */}

        <Cart 
          opened={cartOpened}
          closeCart={() => { setCartOpened(false) }}
          onCartDel={delFromCart}                           // убрать отсюда... или нет...
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
