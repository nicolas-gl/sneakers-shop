function App() {
  return (
    <div className="wrapper">
      
        <div style={{display: "none"}} className="cartOverlay">
          <aside className="cartPopup">


            <h2>Корзина 
              <img className="cartItemRemove" width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
            </h2>
            


            <div className="cartItems">
              <div className="cartItem">
                <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                <div className="cartItemPrice">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="cartItemRemove" width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
              </div>

              <div className="cartItem">
                <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                <div className="cartItemPrice">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="cartItemRemove" width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
              </div>

              <div className="cartItem">
                <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                <div className="cartItemPrice">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="cartItemRemove" width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
              </div>

              <div className="cartItem">
                <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                <div className="cartItemPrice">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="cartItemRemove" width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
              </div>

              <div className="cartItem">
                <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                <div className="cartItemPrice">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="cartItemRemove" width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
              </div>

              <div className="cartItem">
                <img width={70} height={70} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270" />
                <div className="cartItemPrice">
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img className="cartItemRemove" width={32} height={32} src="/img/icons/del-from-cart.svg" alt="DeleteItem" />
              </div>

              
            </div>

            <ul className="cartTotal">
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            

            <button className="cartSubbmit">Оформить заказ 
              <img className="cartSubbmitArrow" src="/img/icons/arrow-forward.svg" alt="Go"/>
            </button>


          </aside>
        </div>



      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/icons/logo.png" alt='logo-icon'/>
          <div>
            <h3>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <img width={20} height={20} src="/img/icons/cart.svg" alt='cart-icon'/>
            <span className="cartPrice">1205 руб.</span>
          </li>
          <li>
            <img width={20} height={20} src="/img/icons/user.svg" alt='user-icon'/>
          </li>
        </ul>
      </header>


      <div>
        <div className="content-header-block">
          <h1 className="content-header">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/icons/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        
        
        <div className={"cards"}>
          <div className="card">
            <img className="favorite" src="/img/icons/heart-unliked.svg" alt="unliked" />
            <img width={133} height={112} src="/img/sneakers/NikeBlazerGreen.jpg" alt="Green Nike Blazer"/>
            <h5>Мужские кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardButtom">
              <div className="cardButtomPrice">
                <p>Цена</p>
                <b>12 999 руб.</b>
              </div>
              <img width={32} height={32} src="/img/icons/plus.svg" alt="Plus" />
            </div>
          </div>

          <div className="card">
            <img className="itemImg" width={133} height={112} src="/img/sneakers/AirMax270.jpg" alt="Nike Air Max 270"/>
            <h5>Мужские Кроссовки Nike Air Max 270</h5>
            <div className="cardButtom">
              <div className="cardButtomPrice">
                <p>Цена</p>
                <b>12 999 руб.</b>
              </div>
              <img width={32} height={32} src="/img/icons/plus.svg" alt="Plus" />
            </div>
          </div>

          <div className="card">
            <img className="itemImg" width={133} height={112} src="/img/sneakers/NikeBlazerWhite.jpg" alt="Nike Blazer Mid Suede"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="cardButtom">
              <div className="cardButtomPrice">
                <p>Цена</p>
                <b>8 499 руб.</b>
              </div>
                <img width={32} height={32} src="/img/icons/plus.svg" alt="Plus" />
            </div>
          </div>

          <div className="card">
            <img className="itemImg" width={133} height={112} src="/img/sneakers/PumaXAkaBokuFutureRider.jpg" alt="Puma X Aka Boku Future Rider"/>
            <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
            <div className="cardButtom">
              <div className="cardButtomPrice">
                <p>Цена</p>
                <b>8 999 руб.</b>
              </div>
                <img width={32} height={32} src="/img/icons/plus.svg" alt="Plus" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
