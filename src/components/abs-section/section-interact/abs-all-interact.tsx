import { absImages } from "../../../utils/abs.config";
import AbsAllMap from "../abs-all-map";

type props = {
  setImageVisible: (imageVisible: string) => void;
  setAbsClicked: (fingerClicked: string) => void;
  absClicked: string;
  imageVisible: string;
};

export default function AbsAllInteract(props: props) {
  return (
    <>
      <image
        href={absImages.allOverHighlight}
        className={`${
          props.imageVisible === "allOver"
            ? "visible pointer-events-none transition-opacity duration-400 ease-in-out"
            : "collapse opacity-0 ease-out duration-400"
        }`}
      />
      <AbsAllMap
        setImageVisible={props.setImageVisible}
        setAbsClicked={props.setAbsClicked}
        absClicked={props.absClicked}
      />
    </>
  );
}
