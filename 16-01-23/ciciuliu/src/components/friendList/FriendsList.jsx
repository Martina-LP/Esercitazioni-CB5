import { useState, useEffect } from 'react';
import { GET } from '../../utils/http';
import SingleFriend from '../singleFriend';
import './index.css';

const FriendsList = () => {
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    GET('users').then((data) => setFriendsList(data.users));
  }, []);

  return (
    <div className="FriendsList">
      {friendsList.map((friend) => (
        <SingleFriend data={friend} key={friend.id} />
      ))}
    </div>
  );
};

export default FriendsList;
