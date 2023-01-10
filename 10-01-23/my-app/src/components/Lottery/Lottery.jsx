import { useState } from "react";
import { LotteryButton } from "../LotteryButton/LotteryButton";

export function Lottery(props) {
  const [number, setNumber] = useState([]);

  const lotteryButtonClick = () => {
    const newNumber = Math.round(Math.random() * 91);
    setNumber([...number, newNumber]);
  };

  return (
    <div>
      <h1>Welcome to the National Lottery!</h1>
      <h2>Drawn numbers:</h2>
      <ul>
        {number.map((num, index) => {
          return <li key = {index}>{num}</li>;
        })}
      </ul>
      <LotteryButton
        clickHandler = {lotteryButtonClick}
        {...(number.length >= 6 ? { isDisabled: true } : { isDisabled: false })}
      />
    </div>
  );
};
