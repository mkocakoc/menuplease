import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {

  return (
    <div className="App">
      <div className='container'>
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}
function Header() {
  return (
    <header>
      <h1>QR Menu Company Name </h1>
    </header>
  );
}
function Menu() {
  return (
    <div className='menu'>
      <h2>OUR MENU</h2>
   
    
      <div className='menuFlex'>
        {pizzaData.map((pizza, index) => (
          <div className={pizza.soldOut ? 'menuFlexItem sold-out' : 'menuFlexItem'} key={index}>
            <img src={pizza.photoName} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <div className='line'>
              <p>{pizza.price} €</p>
              {pizza.soldOut && <p className='soldout'>Sold Out</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>

      <h1>Time: {new Date().toLocaleTimeString()}</h1>
      <h2>All rights reserved</h2>
    </footer>
  );
  //return React.createElement("footer", null, "All rights reserved");
}

function Pizza() {
  return (
    <div>
      <img src='pizzas/focaccia.jpg' alt='Focaccia' />
      <h2>Focaccia</h2>
      <p>Bread with italian olive oil and rosemary</p>
    </div>);
}

function Pizza2() {
  return (
    <div>
      <img src='pizzas/margherita.jpg' alt='Margherita' />
      <h2>Margherita</h2>
      <p>Tomato and mozarella</p>
    </div>);
}
function Pizza3() {
  return (
    <div>
      <img src='pizzas/spinaci.jpg' alt='Spinaci' />
      <h2>Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>);
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

