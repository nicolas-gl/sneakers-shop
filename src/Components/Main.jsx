import { useContext, useState } from 'react';
import styles from './Main.module.scss'
import Card from './Card';
import AppContext from '..'


export default function Main() {

  const changeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const [searchValue, setSearchValue] = useState('');
  const { items, itemsLoading } = useContext(AppContext);

  return (
    <>
      <div className={styles.contentHeader}>
        <h1>{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'} </h1>
        <div className={styles.searchBlock}>

          {searchValue
            ? <img width={16} height={16} onClick={() => setSearchValue('')} src="img/icons/x.svg" alt="reset" />
            : <img src="img/icons/search.svg" alt="search" />
          }

          <input onChange={changeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
        </div>
      </div>

      <div className={styles.cards}>
        {itemsLoading
          ? [...Array(12)].map((item, index) =>
            <Card
              key={index}
            />)
          : items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) =>
            <Card
              key={item.sku}
              {...item}
            />)
        }
      </div>
    </>
  )
}
