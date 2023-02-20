import { useContext } from 'react';
import styles from './Main.module.scss'
import Card from './Card';
import AppContext from '../context.js'


export default function Main() {

  const { items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorites, addToCart, loading } = useContext(AppContext);

  return (
    <>
      <div className={styles.contentHeader}>
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'} </h1>
        <div className={styles.searchBlock}>

          {searchValue
            ? <img width={16} height={16} onClick={() => setSearchValue('')} src="/img/icons/x.svg" alt="reset" />
            : <img src="/img/icons/search.svg" alt="search" />
          }

          <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
        </div>
      </div>

      <div className={styles.cards}>

        
        {loading 
          ? [...Array(8)].map((item, index) => <Card
          key={index}
          loading = {loading}
            />)
          : items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) =>
            <Card
              key={item.sku}
              {...item}
              onFavorite={(obj) => onAddToFavorites(obj)}
              onCartAdd={(obj) => addToCart(obj)}
            />)
        }


        {/* {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) =>
          <Card
            key={item.sku}
            {...item}
            onFavorite={(obj) => onAddToFavorites(obj)}
            onCartAdd={(obj) => addToCart(obj)}
          />)
        } */}

      </div>
    </>
  )
}
