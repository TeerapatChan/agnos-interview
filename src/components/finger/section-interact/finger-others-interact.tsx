import { fingerImages } from "../../../utils/finger.config";
import FingerOthersMap from "../section-map/finger-others-map";

type props = {
  setImageVisible: (imageVisible: string) => void;
  setFingerClicked: (fingerClicked: string) => void;
  fingerClicked: string;
  imageVisible: string;
};

export default function FingerOthersInteract(props: props) {
  return (
    <>
      <image
        href={fingerImages.othersHighlight}
        className={`${
          props.imageVisible === "others"
            ? "visible pointer-events-none transition-opacity duration-400 ease-in-out"
            : "collapse opacity-0 ease-out duration-400"
        }`}
      />
      <FingerOthersMap
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        imageVisible={props.imageVisible}
      />
    </>
  );
}
