import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Pão com azeite de oliva e alecrim",
    price: 26,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomate e mozarella",
    price: 20,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomate, mozarella, espinafre e queijo ricota",
    price: 22,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomate, mozarella, cogumelos e cebola",
    price: 32,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomate, mozarella e pepperoni",
    price: 35,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomate, mozarella, presunto, rúcula e queijo burrata",
    price: 28,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Nosso Menu</h2>
      {pizzaData !== undefined && pizzaData.length > 0 ? (
        <>
          <p>
            Autêntica cozinha italiana. Pizzas clássicas para todos os gostoso.
            Todas preparadas em forno à lenha, orgânicas e deliciosas.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza key={pizza.name} pizzaObject={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p styles={{ color: "red" }}>Ainda estamos criando nosso menu.</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObject }) {

  return (
    <li className={`pizza ${pizzaObject.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut ? "FORA DE ESTOQUE" : ('R$' + pizzaObject.price)}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            Estamos abertos até {closeHour}:00. Venha nos visitar ou solicite
            delivery.
          </p>
          <button className="btn">Delivery</button>
        </div>
      ) : (
        <p>
          Estaremos felizes em recebê-lo entre entre {openHour}:00 e {closeHour}
          :00.
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
