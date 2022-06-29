import "./App.css";
import Display from "./component/Display/Display";
import Button from "./component/Button/Button";
import { useState } from "react";
import { calculate } from "./Logic/Operatios";
import { evaluate } from "mathjs";

function App() {
  const [displayInfo, setDisplayInfo] = useState("");

  const handleClickOperation = (e) => {
    setDisplayInfo(displayInfo + e.target.value);
  };

  const handleClickEqualOperation = (e) => {
    setDisplayInfo(evaluate(displayInfo));
  };

  const handleClickClearDisplay = (e) => {
    setDisplayInfo("");
  };

  return (
    <div className="App">
      <h1>Calaculadora</h1>
      <div className="container-frame">
        <div className="container-display">
          <Display value={displayInfo}></Display>
        </div>
        <div className="container-buttons">
          <Button value={7} event={handleClickOperation}></Button>
          <Button value={8} event={handleClickOperation}></Button>
          <Button value={9} event={handleClickOperation}></Button>
          <Button value={"/"} event={handleClickOperation}></Button>
          <Button value={4} event={handleClickOperation}></Button>
          <Button value={5} event={handleClickOperation}></Button>
          <Button value={6} event={handleClickOperation}></Button>
          <Button value={"*"} event={handleClickOperation}></Button>
          <Button value={1} event={handleClickOperation}></Button>
          <Button value={2} event={handleClickOperation}></Button>
          <Button value={3} event={handleClickOperation}></Button>
          <Button value={"*"} event={handleClickOperation}></Button>
          <Button value={"0"} event={handleClickOperation}></Button>
          <Button value={"."} event={handleClickOperation}></Button>
          <Button value={"="} event={handleClickEqualOperation}></Button>
          <Button value={"+"} event={handleClickOperation}></Button>
          <Button value={"Clear"} event={handleClickClearDisplay}></Button>
        </div>
      </div>
    </div>
  );
}

export default App;
