import React from 'react'
import styles from './Info.module.scss'


export default function Info({ closeCart, imgPath, h, p}) {
  return (
    <div className={styles.emptyCard}>
      <img width={120} src={imgPath} alt="Empty Cart"/>
      <h3>{h}</h3>
      <p>{p}</p>
      <button className={styles.cartBackward} onClick={closeCart}>Вернуться назад
        <img className={styles.cartSBackwardArrow} src="/img/icons/arrow-backward.svg" alt="Go"/>
      </button>
    </div>

  )
}

