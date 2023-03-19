import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td className={index%2 && css.even}>{item.type}</td>
            <td className={index%2 && css.even}>{item.amount}</td>
            <td className={index%2 && css.even}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
};