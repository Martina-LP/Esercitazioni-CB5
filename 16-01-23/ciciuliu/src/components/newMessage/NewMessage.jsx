import { useState, useEffect } from 'react';
import { POST } from '../../utils/http';
import './index.css';

const NewMessage = () => {
  const [messageText, setMessageText] = useState('');
  const [authorText, setAuthorText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [urlText, setUrlText] = useState("");
  const [messagePost, setMessagePost] = useState({});

  const onHandleMessageText = (e) => setMessageText(e.target.value);
  const onHandleAuthorText = (e) => setAuthorText(e.target.value);
  const onHandleTitleText = (e) => setTitleText(e.target.value);
  const onHandleUrlText = (e) => setUrlText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setMessagePost({
      id: 1,
      userId: 8,
      image: urlText,
      firstName: authorText,
      title: titleText,
      body: messageText,
    });
  };

  useEffect(() => {
    if (messagePost.firstName && messagePost.title)
      POST("posts/add", messagePost);
  }, [messagePost]);

  return (
    <div className="NewMessage">
      <form onSubmit={onSubmit}>
        <input
          value={authorText}
          onChange={onHandleAuthorText}
          type="text"
          placeholder="Author"
          required
        />
        <input
          value={authorText}
          onChange={onHandleTitleText}
          type="text"
          placeholder="Title"
          required
        />
        <input
          value={authorText}
          onChange={onHandleMessageText}
          type="text"
          placeholder="Insert message here..."
          required
        />
        <input
          value={authorText}
          onChange={onHandleUrlText}
          type="text"
          placeholder="Img url"
          required
        />
        <input className="Sub" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default NewMessage;
