import { useState } from "react";
import AbsInteract from "./section-interact/abs-interact";
import AbsAllInteract from "./section-interact/abs-all-interact";

type props = {
  setAbsClicked: (abs: string) => void;
  absClicked: string;
};

type absSections =
  | "epigastrium"
  | "llq"
  | "luq"
  | "rlq"
  | "ruq"
  | "suprapubic"
  | "umbilicus";

export default function AbsShow(props: props) {
  const [imageVisible, setImageVisible] = useState<string>("");
  const absSections: Array<absSections> = [
    "epigastrium",
    "luq",
    "llq",
    "suprapubic",
    "rlq",
    "ruq",
    "umbilicus",
  ];
  return (
    <>
      <svg viewBox="0 0 828 976" className="h-full z-10 absolute">
        {absSections.map((section: absSections) => (
          <AbsInteract
            setAbsClicked={props.setAbsClicked}
            absClicked={props.absClicked}
            setImageVisible={setImageVisible}
            imageVisible={imageVisible}
            section={section}
            circle={section === "umbilicus" ? true : false}
          />
        ))}
        <AbsAllInteract
          setImageVisible={setImageVisible}
          setAbsClicked={props.setAbsClicked}
          absClicked={props.absClicked}
          imageVisible={imageVisible}
        />
      </svg>
    </>
  );
}
