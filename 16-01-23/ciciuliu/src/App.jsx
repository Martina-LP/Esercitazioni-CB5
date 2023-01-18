import { useState } from "react";
import "./App.css";
import FriendList from "./components/friendList/index"
import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messagesList/index";
import Filter from "./components/filter/index";

function App() {
  const [filterState, setFilterState] = useState('');

  return (
    <div className="App">
      <div className="friendsSection">
        <FriendList />
      </div>
      <div className="mainSection">
        <NewMessage />
        <Filter setFilterState={setFilterState} />
        <MessagesList nPost={'full'} filterSearch={filterState} />
      </div>
      <div className="popularSection">
        <MessagesList nPost={5} />
      </div>
    </div>
  );
};

export default App;
