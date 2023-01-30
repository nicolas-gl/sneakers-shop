import Card from './Components/Card';
import Cart from './Components/Cart';
import Header from './Components/Header';

const itemsArr = [
  {name: "Мужские кроссовки Nike Blazer Mid Suede", price: 12999, src: "/img/sneakers/NikeBlazerGreen.jpg", alt: "Green Nike Blazer"}, 
  {name: "Мужские Кроссовки Nike Air Max 270", price: 12999, src: "/img/sneakers/AirMax270.jpg", alt: "Nike Air Max 270"}, 
  {name: "Мужские Кроссовки Nike Blazer Mid Suede", price: 8499, src: "/img/sneakers/NikeBlazerWhite.jpg", alt: "Nike Blazer Mid Suede"}, 
  {name: "Кроссовки Puma X Aka Boku Future RiderSuede", price: 8999, src:"/img/sneakers/PumaXAkaBokuFutureRider.jpg", alt: "Puma X Aka Boku Future Rider"}, 
];


function App() {
  return (

    <div className="wrapper">

      <Cart />
      <Header />

      <div>

        <div className="contentHeader">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/icons/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        
        <div className={"cards"}>
          {itemsArr.map(obj => <Card
            name={obj.name}
            price={obj.price}
            src={obj.src}
            alt={obj.alt}
          />)}
        </div>
        
      </div>
    </div>
  );
}

export default App;
