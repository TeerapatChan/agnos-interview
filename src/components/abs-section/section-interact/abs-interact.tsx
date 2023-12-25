import { absImages, absCoords } from "../../../utils/abs.config";
import AbsMap from "../abs-map";

type absSections =
  | "epigastrium"
  | "llq"
  | "luq"
  | "rlq"
  | "ruq"
  | "suprapubic"
  | "umbilicus";
type props = {
  setImageVisible: (imageVisible: string) => void;
  setAbsClicked: (fingerClicked: string) => void;
  absClicked: string;
  imageVisible: string;
  section: absSections;
  circle?: boolean;
};

export default function AbsInteract(props: props) {
  return (
    <>
      <image
        href={absImages[`${props.section}Highlight`]}
        className={`${
          props.imageVisible === props.section ||
          props.imageVisible === "allOver"
            ? "visible pointer-events-none transition-opacity duration-400 ease-in-out"
            : "collapse opacity-0 ease-out duration-400"
        }`}
      />
      <image
        href={absImages[`${props.section}Active`]}
        className={`${
          props.imageVisible === props.section
            ? "visible pointer-events-none transition-opacity duration-400 ease-in-out"
            : "collapse opacity-0 ease-out duration-400"
        }`}
      />
      <AbsMap
        coords={absCoords[props.section]}
        absSection={props.section}
        absClicked={props.absClicked}
        setImageVisible={props.setImageVisible}
        setAbsClicked={props.setAbsClicked}
        circle={props.circle}
      />
    </>
  );
}
