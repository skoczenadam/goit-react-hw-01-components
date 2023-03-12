import React from 'react';
import ReactDOM from 'react-dom/client';
import clsx from "clsx";
// import { App } from 'components/App';
import './index.css';
// import PropTypes from "prop-types";

import css from "./Style.module.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  return <p className={clsx(
    css[variant], {
      [css.isOutlined]: outlined,
      [css.isElevated]: elevated
  })
  }>{children}</p>;
};

const App = () => {
  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error" outlined>
        There was an error during your last transaction
      </Alert>
      <Alert variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert>
    </>
  );
};

// Chcąc wykorzystać nasz komponent zapisujemy go jako tag JSX
ReactDOM.createRoot(document.getElementById("root")).render(<App />);