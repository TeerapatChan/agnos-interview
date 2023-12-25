import { fingerImages } from "../../../utils/finger.config";
import FingerDipMap from "../section-map/finger-dip-map";
import FingerMcpMap from "../section-map/finger-mcp-map";
import FingerPipMap from "../section-map/finger-pip-map";

type props = {
  setImageVisible: (imageVisible: string) => void;
  setFingerClicked: (fingerClicked: string) => void;
  fingerClicked: string;
  imageVisible: string;
  section: "mcp" | "pip" | "dip";
};

export default function FingerInteract(props: props) {
  function finger() {
    if (props.section === "mcp") {
      return (
        <FingerMcpMap
          setImageVisible={props.setImageVisible}
          setFingerClicked={props.setFingerClicked}
          fingerClicked={props.fingerClicked}
          imageVisible={props.imageVisible}
        />
      );
    }
    if (props.section === "pip") {
      return (
        <FingerPipMap
          setImageVisible={props.setImageVisible}
          setFingerClicked={props.setFingerClicked}
          fingerClicked={props.fingerClicked}
          imageVisible={props.imageVisible}
        />
      );
    }
    if (props.section === "dip") {
      return (
        <FingerDipMap
          setImageVisible={props.setImageVisible}
          setFingerClicked={props.setFingerClicked}
          fingerClicked={props.fingerClicked}
          imageVisible={props.imageVisible}
        />
      );
    }
  }
  return (
    <>
      <image
        href={fingerImages[`${props.section}Highlight`]}
        className={`${
          props.imageVisible === props.section
            ? "visible pointer-events-none transition-opacity duration-400 ease-in-out"
            : "collapse opacity-0 ease-out duration-400"
        }`}
      />
      <image
        href={fingerImages[`${props.section}Active`]}
        className={`${
          props.imageVisible === props.section
            ? "visible pointer-events-none transition-opacity duration-400 ease-in-out"
            : "collapse opacity-0 ease-out duration-400"
        }`}
      />
      {finger()}
    </>
  );
}
