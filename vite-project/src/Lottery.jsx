import { useState } from "react";
import "./Lottery.css";
import { addition, genRandomNum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(genRandomNum(n));
  let isWinning = addition(ticket) === winningSum;

  let buyTicket = () => {
    return setTicket(genRandomNum(n));
  };
  return (
    <div className="lottery">
      <h2> Lottery game begins!</h2>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3> {isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
