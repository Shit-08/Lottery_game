import { useState } from "react";
import "./Lottery.css";
import { addition, genRandomNum } from "./helper";

export default function Lottery() {
  let [ticket, setTicket] = useState(genRandomNum(3));
  let isWinning = addition(ticket) === 15;

  let buyTicket = () => {
    return setTicket(genRandomNum(3));
  };
  return (
    <div className="lottery">
      <h2> Lottery game begins!</h2>
      <div className="ticket">
        <span> {ticket[0]} </span>
        <span> {ticket[1]} </span>
        <span> {ticket[2]} </span>
      </div>
      <br></br>
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3> {isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
