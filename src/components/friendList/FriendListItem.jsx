import friends from "./friendsList.json";

const FriendList = ({ friends }) => {
  return (
    <>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <img src={friend.avatar} alt="Avatar" width="48" />
            <p>{friend.name}</p>
            {friend.isOnline == true ? <p>Online</p> : <p>Offline</p>}
          </li>
        );
      })}
    </>
  );
};

export default function Friend() {
  return (
    <ul>
      <FriendList friends={friends} />
    </ul>
  );
}
