import PropTypes from 'prop-types'
import css from 'components/Friends/FriendListItem.module.css'

export const FriendListItem = (({ avatar, name, isOnline, id }) => {
    let FriendStatus;
    if (isOnline) {
        FriendStatus = "statusOn";
    }
    else {
        FriendStatus = "statusOff";
    }
    return (
    <li key={id.toString()} className={css.item}>
        <span className={`${css.status} ${css[FriendStatus]}`}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>)
})
      

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool
}