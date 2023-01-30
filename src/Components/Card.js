import styles from './Card.module.scss'


export default function Card(props) { 

  const makeAlert = () => {
    alert('pushed');
  };

  return (
    <div className={styles.card}>
      <img className={styles.favorite} src="/img/icons/heart-unliked.svg" alt="unliked" />
        <img width={133} height={112} src={props.src} alt={props.alt}/>
        <h5>{props.name}</h5>
        <div className={styles.cardButtom}>
          <div className={styles.cardButtomPrice}>
              <p>Цена</p>
              <b>{props.price}</b>
          </div>
            <img className={styles.plusButton} width={32} height={32} onClick={makeAlert}  src="/img/icons/plus.svg" alt="Plus" />
        </div>
    </div>
  )
}
