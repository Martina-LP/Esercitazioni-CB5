import "./App.css";
import FriendList from "./components/friendList/index"
import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messagesList/index";

function App() {
  return (
    <div className="App">
      <FriendList />
      <NewMessage />
      <MessagesList />
    </div>
  );
};

export default App;
