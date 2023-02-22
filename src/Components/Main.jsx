import { useContext } from 'react';
import styles from './Main.module.scss'
import Card from './Card';
import AppContext from '../index.js'


export default function Main() {

  const { items, searchValue, setSearchValue, changeSearchInput, addToFavorites, addToCart, itemsLoading } = useContext(AppContext);

  return (
    <>
      <div className={styles.contentHeader}>
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'} </h1>
        <div className={styles.searchBlock}>

          {searchValue
            ? <img width={16} height={16} onClick={() => setSearchValue('')} src="/img/icons/x.svg" alt="reset" />
            : <img src="/img/icons/search.svg" alt="search" />
          }

          <input onChange={changeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
        </div>
      </div>

      <div className={styles.cards}>
        {itemsLoading 
          ? [...Array(12)].map((item, index) => 
            <Card
              key={index}
              itemsLoading = {itemsLoading}
            />)
          : items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) =>
            <Card
              key={item.sku}
              {...item}
              onFavorite={(obj) => addToFavorites(obj)}
              onCartAdd={(obj) => addToCart(obj)}
            />)
        }
      </div>
    </>
  )
}
