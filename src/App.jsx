import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.scss'
import Cart from './Components/Cart';
import Header from './Components/Header';
import Main from './Components/Main';
import { Outlet } from 'react-router-dom';


let render = 0

export default function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  useEffect( () => {
    try {
      axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/items')
        .then( res => {setItems(res.data)} );
      axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/cart')
        .then( res => {setCartItems(res.data)} ); 
    } catch (error) {
      console.log("не удалось загрузить товары или корзину", error)
    }
  }, [] );

  const addToCart = async (obj) => {
    try {
      const { data } = await axios.post('https://63da6dca2af48a60a7cd9696.mockapi.io/cart', obj);
      setCartItems(prev => [...prev, data]);
    } catch {
      console.log("не удалось добавить в корзину")
    }
  };

  const delFromCart = (id) => {
    try {
      axios.delete(`https://63da6dca2af48a60a7cd9696.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id ));
    } catch {
      console.log("не удалось удалить")
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue (event.target.value);
  };

  const onAddToFavorites = (obj) => {
    setFavorites(prev => [...prev, obj]);
  }


  console.log(++render);


  return (
    <div className={styles.wrapper}>

      {cartOpened ? <Cart closeCart={() => {setCartOpened(false)}} onCartDel={delFromCart} cartItems={cartItems} /> : null}
      <Header openCart={() => {setCartOpened(true)}} />


      <Outlet />
      
      <Main 
        items = {items}
        onAddToFavorites = {onAddToFavorites}
        addToCart = {addToCart}
        delFromCart = {delFromCart}
        cartItems = {cartItems}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        onChangeSearchInput = {onChangeSearchInput}
      />


      
      {/* <div>

        <div className={styles.contentHeader}>
          <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'} </h1>
          <div className={styles.searchBlock}>

            {searchValue
              ? <img width={16} height={16} onClick={() => setSearchValue('')} src="/img/icons/x.svg" alt="reset"  />
              : <img src="/img/icons/search.svg" alt="search" />
            }

            <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
          </div>
        </div>
        
        <div className={styles.cards}>
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => 
            <Card
              key={`card-${item.sku}`}
              // key={item.sku}   не будет ли спорить с key у корзины?
              {...item}
              onFavorite = {(obj) => onAddToFavorites(obj)}
              onCartAdd = {(obj) => addToCart(obj)}
              onCartDel = {delFromCart}
              cartItems = {cartItems}
            />)}
        </div>

      </div> */}
      
    </div>
  );
};

