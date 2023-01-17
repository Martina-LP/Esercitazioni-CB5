import './index.css';

const SingleFriend = ({ data }) => {
  const { image, firstName, lastName, address } = data;

  return (
    <div className="SingleFriend">
      <img src={image} alt={lastName} />
      <div className="SingleFriend_text">
        <h3>{`${firstName} ${lastName}`}</h3>
        <h4>{address.city}</h4>
      </div>
    </div>
  );
};

export default SingleFriend;
