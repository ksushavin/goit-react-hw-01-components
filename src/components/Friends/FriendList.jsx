import PropTypes from 'prop-types'
import { FriendListItem } from 'components/Friends/FriendListItem'
import css from 'components/Friends/FriendList.module.css'

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (<FriendListItem
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id}
                />)
            })}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool
        })
    )  
}

