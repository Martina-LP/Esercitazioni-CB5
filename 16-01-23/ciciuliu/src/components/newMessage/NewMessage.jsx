import { useState } from 'react';
import { POST } from '../../utils/http';
import './index.css';

const NewMessage = () => {
  const [messageText, setMessageText] = useState('');

  const onHandleInput = (e) => setMessageText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    POST(`posts/add`, messageText).then(console.log(messageText));
  };

  return (
    <div className="NewMessage">
      {console.log(messageText)}
      <form onSubmit={onSubmit}>
        <input
          value={messageText}
          onChange={onHandleInput}
          type="text"
          placeholder="Hey, what's new?"
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default NewMessage;
