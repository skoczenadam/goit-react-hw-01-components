import React from 'react';
import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
import './index.css';
// import PropTypes from "prop-types";

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const BookList = ({ books }) => (
  <ul>
    {books.map((book, index) => (
      <li key={index}>{book.name}</li>
    ))}
  </ul>
);

const App = () => {
  return (
    <div>
      <BookList books={favouriteBooks} />
    </div>
  );
};

// Chcąc wykorzystać nasz komponent zapisujemy go jako tag JSX
ReactDOM.createRoot(document.getElementById("root")).render(<App />);