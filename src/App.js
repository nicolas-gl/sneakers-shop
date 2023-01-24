function App() {
  return (
    <div className="wrapper">
      <header>

        <div className="headerLeft">
          <img width={40} height={40} src="/img/logo.png" alt='logo-icon'/>
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <img width={20} height={20} src="/img/cart.svg" alt='cart-icon'/>
            <span className="cartPrice">1205 руб.</span>
          </li>
          <li>
          <img width={20} height={20} src="/img/user.svg" alt='user-icon'/>
          </li>
        </ul>
      </header>


      <div className="content">
        <h1>Все кроссовки</h1>
        
        <div className={"cards"}>
          <div className="card">
            <img className="itemImg" width={133} height={112} src="/img/sneakers/NikeBlazerGreen.jpg" alt="Green Nike Blazer"/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardButtom">
              <div className="cardButtomPrice">
                <span>Цена</span>
                <b>12 999 руб.</b>
              </div>
              <button className="cardPlusButton">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img className="itemImg" width={133} height={112} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270"/>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="cardButtom">
              <div className="cardButtomPrice">
                <span>Цена</span>
                <b>12 999 руб.</b>
              </div>
              <button className="cardPlusButton">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img className="itemImg" width={133} height={112} src="/img/sneakers/NikeBlazerWhite.jpg" alt="Nike Blazer Mid Suede"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardButtom">
              <div className="cardButtomPrice">
                <span>Цена</span>
                <b>8 499 руб.</b>
              </div>
              <button className="cardPlusButton">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img className="itemImg" width={133} height={112} src="/img/sneakers/PumaXAkaBokuFutureRider.jpg" alt="Puma X Aka Boku Future Rider"/>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="cardButtom">
              <div className="cardButtomPrice">
                <span>Цена</span>
                <b>8 999 руб.</b>
              </div>
              <button className="cardPlusButton">
                  <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
