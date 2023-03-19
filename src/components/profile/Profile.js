import css from "./Profile.module.css";
import PropTypes from "prop-types";

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          width="300"
          height="300"
          src={avatar}
          alt="User avatar"
          className={css.avatar}
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers.toLocaleString("en-US")}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views.toLocaleString("en-US")}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes.toLocaleString("en-US")}</span>
        </li>
      </ul>
    </div>
  );
};

  Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object.isRequired
  };