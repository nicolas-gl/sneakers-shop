import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.scss'
import Card from './Components/Card';
import Cart from './Components/Cart';
import Header from './Components/Header';


export default function App() {

  const [cardOpened, setCardOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  useEffect( () => {
    axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/items')
      .then( res => {setItems(res.data)} );
    axios.get('https://63da6dca2af48a60a7cd9696.mockapi.io/cart')
      .then( res => {setCartItems(res.data)} );  
  }, [] );


  const onAddToCart = (obj) => {
    axios.post('https://63da6dca2af48a60a7cd9696.mockapi.io/cart', obj);
    console.log('Добавлен', obj)
    setCartItems(prev => [...prev, obj]);
  };

  const onDelFromCard = (id) => {
    console.log(id);
    axios.delete(`https://63da6dca2af48a60a7cd9696.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id ));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue (event.target.value);
  };


  return (
    <div className={styles.wrapper}>

      {cardOpened ? <Cart closeCard={() => {setCardOpened(false)}} deleteItem={onDelFromCard} cartItems={cartItems} /> : null}
      <Header openCard={() => {setCardOpened(true)}} />

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
              onFavorite = {() => console.log('Added to favorites')}
              onPlus = {(obj) => onAddToCart(obj)}
            />)}
        </div>

      </div>
      
    </div>
  );
};
