import { useState } from 'react'
import styles from './Card.module.scss'


export default function Card( {id, title, imgUrl, imgAlt, price, onFavorite, onPlus} ) { 

  const [isAdded, setIsAdded] = useState(false);

  const onAddClicked = () => {
    onPlus({id, title, imgUrl, imgAlt, price});
    setIsAdded(!isAdded);
  };


  return (
    <div className={styles.card}>

      <img className={styles.favorite} onClick={onFavorite} src="/img/icons/heart-unliked.svg" alt="unliked" />
      <img width={133} height={112} src={imgUrl} alt={imgAlt}/>
      <h5>{title}</h5>

      <div className={styles.cardButtom}>

        <div className={styles.cardButtomPrice}>
          <p>Цена</p>
          <b>{price} руб.</b>
        </div>
        <img className={styles.plusButton} onClick={onAddClicked} src={ isAdded ? "/img/icons/added.svg" : "/img/icons/plus.svg" } alt="Plus" />
      
      </div>

    </div>
  )
}
