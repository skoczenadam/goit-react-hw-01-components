import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';

const imgSrc = "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";

const Product = props => (
  <div>
    <img
      src={imgSrc}
      alt="Tacos With Lime"
      width="640"
    />
    <h2>Tacos With Lime</h2>
    <p>Price: 10.99$</p>
    <button type="button">Add to cart</button>
  </div>
);

// Chcąc wykorzystać nasz komponent zapisujemy go jako tag JSX
ReactDOM.createRoot(document.getElementById("root")).render(<Product />);