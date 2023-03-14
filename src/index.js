import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'components/profile/Profile';
import user from "./user.json";
// import clsx from "clsx";
// import PropTypes from "prop-types";

const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};

// Chcąc wykorzystać nasz komponent zapisujemy go jako tag JSX
ReactDOM.createRoot(document.getElementById("root")).render(<App />);