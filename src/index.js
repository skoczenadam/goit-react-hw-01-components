// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Profile } from 'components/profile/Profile';
// import user from "./user.json";
// import clsx from "clsx";
// import PropTypes from "prop-types";

// const App = () => {
//   return (
//     <>
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//     </>
//   );
// };

// // Chcąc wykorzystać nasz komponent zapisujemy go jako tag JSX
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);

import React, { Component } from "react";
import ReactDOM from "react-dom";

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement(evt) {
    console.log("Increment button was clicked!", evt); // działa
    console.log("this.props: ", this.props); // Error: cannot read props of undefined
  }

  handleDecrement(evt) {
    console.log("Decrement button was clicked!", evt); // działa
    console.log("this.props: ", this.props); // Error: cannot read props of undefined
  }

  render() {
    const { step } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter step={5} />, document.getElementById("root"));