import transactions from "./transactions.json";
import styles from "./transactions.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <>
      {transactions.map((transaction) => {
        return (
          <tbody key={transactions.id}>
            <tr>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </>
  );
};

export default function Transaction() {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <TransactionHistory transactions={transactions} />
    </table>
  );
}
