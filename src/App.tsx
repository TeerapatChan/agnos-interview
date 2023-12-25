import { useState } from "react";
import FingerMain from "./components/finger/finger-main";
import Button from "./components/button";
import AbsMain from "./components/abs-section/abs-main";

function App() {
  const [fingerClicked, setFingerClicked] = useState("");
  const [absClicked, setAbsClicked] = useState("");
  const [show, setShow] = useState("abs");
  return (
    <div className="font-primary flex flex-col justify-center items-center h-screen Light">
      {show === "abs" ? (
        <AbsMain setAbsClicked={setAbsClicked} absClicked={absClicked} />
      ) : (
        <FingerMain
          setFingerClicked={setFingerClicked}
          fingerClicked={fingerClicked}
        />
      )}
      <Button
        setFingerClicked={setFingerClicked}
        setAbsClicked={setAbsClicked}
        fingerClicked={fingerClicked}
        absClikcked={absClicked}
        setShow={setShow}
      />
    </div>
  );
}

export default App;
