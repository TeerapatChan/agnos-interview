import { absCoords } from "../../utils/abs.config";

type props = {
  absClicked: string;
  setImageVisible: (abs: string) => void;
  setAbsClicked: (abs: string) => void;
};

export default function AbsAllMap(props: props) {
  return (
    <rect
      x={absCoords.allOver.x}
      y={absCoords.allOver.y}
      width={absCoords.allOver.width}
      height={absCoords.allOver.height}
      fill="#fff"
      opacity="0"
      className="hover:cursor-pointer"
      onMouseEnter={() => {
        if (props.absClicked === "") props.setImageVisible("allOver");
      }}
      onMouseLeave={() => {
        if (props.absClicked === "") props.setImageVisible("");
      }}
      onClick={() => {
        if (props.absClicked === "") {
          props.setAbsClicked("allOver");
          props.setImageVisible("allOver");
        } else {
          props.setAbsClicked("");
          props.setImageVisible("");
        }
      }}
    />
  );
}
