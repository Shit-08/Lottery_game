import "./App.css";
import Lottery from "./Lottery";

function App() {
  return (
    <>
      <Lottery n={5} winningSum={15} />
    </>
  );
}

export default App;
