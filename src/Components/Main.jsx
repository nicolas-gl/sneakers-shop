import React from 'react' // оставить ли?
import Card from './Card';

import styles from '../App.module.scss'


export default function Main({items, onAddToFavorites, addToCart, delFromCart, cartItems, searchValue, setSearchValue, onChangeSearchInput}) {
  return (
    <>
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
            key={item.sku}
            {...item}
            onFavorite = {(obj) => onAddToFavorites(obj)}
            onCartAdd = {(obj) => addToCart(obj)}
            onCartDel = {delFromCart}
            cartItems = {cartItems}
          />)}
      </div>
    </>
  )
}
