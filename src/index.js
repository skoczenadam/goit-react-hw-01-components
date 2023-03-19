import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { Profile } from 'components/profile/Profile';
import { Statistics } from 'components/statistics/Statistics';
import { FriendList } from 'components/friendList/FriendList';
import { TransactionHistory } from 'components/transaction/TransactionHistory';
import user from "./components/json/user.json";
import data from "./components/json/data.json";
import friends from "./components/json/friends.json";
import transactions from "./components/json/transactions.json";
// import clsx from "clsx";

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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

// Chcąc wykorzystać nasz komponent zapisujemy go jako tag JSX
ReactDOM.createRoot(document.getElementById("root")).render(<App />);