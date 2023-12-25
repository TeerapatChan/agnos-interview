import { useState } from "react";
import FingerInteract from "./section-interact/finger-interact";
import FingerOthersInteract from "./section-interact/finger-others-interact";

type FingerShowProps = {
  setFingerClicked: (finger: string) => void;
  fingerClicked: string;
};

export default function FingerShow(props: FingerShowProps) {
  const [imageVisible, setImageVisible] = useState<string>("");
  return (
    <>
      <svg viewBox="0 0 828 976" className="h-full z-10 absolute">
        <FingerInteract
          setImageVisible={setImageVisible}
          setFingerClicked={props.setFingerClicked}
          fingerClicked={props.fingerClicked}
          imageVisible={imageVisible}
          section="mcp"
        />
        <FingerInteract
          setImageVisible={setImageVisible}
          setFingerClicked={props.setFingerClicked}
          fingerClicked={props.fingerClicked}
          imageVisible={imageVisible}
          section="pip"
        />
        <FingerInteract
          setImageVisible={setImageVisible}
          setFingerClicked={props.setFingerClicked}
          fingerClicked={props.fingerClicked}
          imageVisible={imageVisible}
          section="dip"
        />
        <FingerOthersInteract
          setImageVisible={setImageVisible}
          setFingerClicked={props.setFingerClicked}
          fingerClicked={props.fingerClicked}
          imageVisible={imageVisible}
        />
      </svg>
    </>
  );
}
