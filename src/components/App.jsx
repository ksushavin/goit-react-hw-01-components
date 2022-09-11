
import user from 'user.json';
import data from 'data.json';
import friends from "friends.json";
import transactions from 'transactions.json'
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friends/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
      <Profile
        name={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

