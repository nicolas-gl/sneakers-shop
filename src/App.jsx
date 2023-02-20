import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.scss'
import Cart from './Components/Cart';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import AppContext from './context.js'


export default function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);

  
  useEffect( () => {
    try {
      axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/items')
        .then( res => {setItems(res.data)} );
      axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/cart')
        .then( res => {
          setCartItems(res.data); 
          setLoading(false);
      } ); 
    } catch (error) {
      console.log("не удалось загрузить товары или корзину", error)
    };
    
  }, [] );

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
      setCartItems(prev => prev.filter(item => item.id !== id ));
    } catch (error) {
      console.log("не удалось удалить", error)
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue (event.target.value);
  };

  const onAddToFavorites = (obj) => {
    setFavorites(prev => [...prev, obj]);
  }


  return (
    <AppContext.Provider 
      value={{
        items, 
        cartItems,
        favorites, 
        searchValue,
        loading,
        addToCart,
        delFromCart,
        onAddToFavorites,
        setSearchValue,
        onChangeSearchInput,
      }}
    >
      <div className={styles.wrapper}>

        {cartOpened ? <Cart closeCart={() => {setCartOpened(false)}} onCartDel={delFromCart} cartItems={cartItems} /> : null}
        <Header openCart={() => {setCartOpened(true)}} />
        <Outlet />

      </div>

    </AppContext.Provider>
  );
};

