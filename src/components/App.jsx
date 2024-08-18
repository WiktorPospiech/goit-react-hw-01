import User from "./profile/Profile";
import Friend from "./friendList/FriendList";
import Transaction from "./transactions/TransactionHistory";

export default function App() {
  return (
    <>
      <User />
      <Friend />
      <Transaction />
    </>
  );
}
