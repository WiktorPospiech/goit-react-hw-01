import userData from "./userData.json";
import styles from "./profile.module.css";

export const User = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={userData.avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{userData.username}</p>
        <p className={styles.tag}>{userData.tag}</p>
        <p className={styles.location}>{userData.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.statsItems}>
          <span>Followers</span>
          <span>{userData.stats.followers}</span>
        </li>
        <li className={styles.statsItems}>
          <span>Views</span>
          <span>{userData.stats.views}</span>
        </li>
        <li className={styles.statsItems}>
          <span>Likes</span>
          <span>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default User;
