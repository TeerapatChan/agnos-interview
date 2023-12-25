type props = {
  setImageVisible: (value: string) => void;
  setFingerClicked: (value: string) => void;
  imageVisible: string;
  fingerClicked: string;
  fingerSection: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export default function FingerMap(props: props) {
  return (
    <rect
      x={props.x}
      y={props.y}
      fill="#fff"
      opacity="0"
      width={props.width}
      height={props.height}
      className="hover:cursor-pointer"
      onMouseEnter={() => {
        if (props.fingerClicked === "")
          props.setImageVisible(props.fingerSection);
      }}
      onMouseLeave={() => {
        if (props.fingerClicked === "") props.setImageVisible("");
      }}
      onClick={() => {
        if (props.fingerClicked === "") {
          props.setFingerClicked(props.fingerSection);
          props.setImageVisible(props.fingerSection);
        } else {
          props.setFingerClicked("");
          props.setImageVisible("");
        }
      }}
    ></rect>
  );
}
