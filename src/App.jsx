import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.scss'
import Card from './Components/Card';
import Cart from './Components/Cart';
import Header from './Components/Header';


let render = 0

export default function App() {

  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  useEffect( () => {
    axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/items')
      .then( res => {setItems(res.data)} );
  }, [] );

  useEffect( () => {
    axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/cart')
      .then( res => {setCartItems(res.data)} );  
  }, [cartOpened] );


  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
    axios.post('https://63da6dca2af48a60a7cd9696.mockapi.io/cart', obj);
  };

  const onDelFromCart = (id) => {
    axios.delete(`https://63da6dca2af48a60a7cd9696.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id ));
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

      {cartOpened ? <Cart closeCart={() => {setCartOpened(false)}} onCartDel={onDelFromCart} cartItems={cartItems} /> : null}
      <Header openCart={() => {setCartOpened(true)}} />

      <div>

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
              key={`card-${item.id}`}
              // key={item.id}   не будет ли спорить с key у корзины?
              // ref={item.ref}
              id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              imgAlt={item.imgAlt}
              onFavorite = {(obj) => onAddToFavorites(obj)}
              onCartAdd = {(obj) => onAddToCart(obj)}
              onCartDel={onDelFromCart}
            />)}
        </div>

      </div>
      
    </div>
  );
};
