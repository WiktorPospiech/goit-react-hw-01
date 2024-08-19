import friends from "./friendsList.json";
import styles from "./friendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={styles.list}>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p>{friend.name}</p>
            {friend.isOnline == true ? (
              <p className={styles.isonLine}>Online</p>
            ) : (
              <p className={styles.offline}>Offline</p>
            )}
          </li>
        );
      })}
    </>
  );
};

export default function Friend() {
  return (
    <ul className={styles.wrapper}>
      <FriendList friends={friends} />
    </ul>
  );
}
