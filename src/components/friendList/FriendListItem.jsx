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

export default function FriendListItem() {
  return (
    <ul>
      <FriendList friends={friends} />
    </ul>
  );
}

FriendListItem;

// export const FriendListItem = () => {
//   return (
//     <>
//       <img src={friendList.avatar} alt="Avatar" width="48" />
//       <p>{friendList.name}</p>
//       <p>{friendList.name} is</p>
//       {friendList.isOnline == true ? <p>on line</p> : <p>off line</p>}

//       <FriendListItem friends={friendList} />
//     </>
//   );
// };

// export default FriendListItem;
