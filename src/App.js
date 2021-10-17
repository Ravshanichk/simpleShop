import './App.css';
import index from './index.scss'
import logo from './assets/logo.png'
import likeButton from './assets/likeButton.png'
import plusButton from './assets/plus.png'
import cart from './assets/cart.png'
import profileButton from './assets/user.svg'
import sneaker1 from './img/sneaker1.jpg'
import sneaker2 from './img/sneaker2.jpg'
import sneaker3 from './img/sneaker3.jpg'
import sneaker4 from './img/sneaker4.jpg'
import search from './assets/search.png'
import favouriteEmpty from './assets/favouriteEmpty.svg'
import favouriteFull from './assets/favouriteFull.svg'
import addedToCard from './assets/addedToCard.svg'


function App() {
  return (
    <div className="wrapper clear" >
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={40} height={40} src={logo}/>
          <div >
            <h3 className="text-uppercase">Sneaker Shop</h3>
            <p className="opacity-5">Покупай налетай</p>
          </div>
        </div>
        <div>
          <ul className="d-flex justify-between">
            <li className="mr-20">
              <img width={18} height={18} src={cart}/>
              <span>100000 тг.</span>
            </li>
            <li className="mr-10">
            <img width={18} height={18}  src={likeButton}/>
            </li>
            <li>
            <img width={18} height={18}  src={profileButton}/>
            </li>
          </ul>
        </div>
      </header>
      <div className="content p-40">
        <div className="d-flex justify-between align-center mb-40">
        <h1>Все товары</h1>
        <div className="search-block">
          <img src={search} alt="Search"/>
            <input placeholder="Поиск..."></input>
        </div>
        </div>
     
          <div className="d-flex">
          <div className='card'>
            <div className="favourite">
            <img src={favouriteEmpty} alt="Unliked"/>
            </div>
              <img width={133} height={112} src={sneaker1} alt=""/>
              <h5 >Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>10 453 тг.</b>
                </div>
                <button className="button">
                  <img width={20} height={20} src={plusButton}/>
                </button>
              </div>
          </div>
          <div className='card'>
              <img width={133} height={112} src={sneaker4} alt=""/>
              <h5 >Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>10 453 тг.</b>
                </div>
                <button className="button">
                  <img width={20} height={20} src={plusButton}/>
                </button>
              </div>
          </div>
          <div className='card'>
              <img width={133} height={112} src={sneaker2} alt=""/>
              <h5 >Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>10 453 тг.</b>
                </div>
                <button className="button">
                  <img width={20} height={20} src={plusButton}/>
                </button>
              </div>
          </div>
          <div className='card'>
              <img width={133} height={112} src={sneaker3} alt=""/>
              <h5 >Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>10 453 тг.</b>
                </div>
                <button className="button">
                  <img width={11} height={11} src={plusButton}/>
                </button>
              </div>
          </div>
          </div>
         
          
      </div>
          
      </div>
      )
}

export default App;
