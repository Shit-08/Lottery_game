import "./App.css";
import Lottery from "./Lottery";
import { addition } from "./helper";

function App() {
  let winConditon = (ticket) => {
    return ticket[0] === 0;
  };
  return (
    <>
      <Lottery n={5} winConditon={winConditon} />
    </>
  );
}

export default App;
