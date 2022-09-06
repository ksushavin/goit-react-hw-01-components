import css from 'components/Profile/Profile.module.css';

export const Profile = ({
    name,
    tag,
    location,
    avatar = "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
    followers,
    views,
    likes
}) => {

  return (
<div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt={name}
        className={css.avatar}
      />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.stats__item}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.stats__item}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.stats__item}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
</div>)
}