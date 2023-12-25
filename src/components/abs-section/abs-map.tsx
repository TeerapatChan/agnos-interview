type props = {
  coords: string;
  absSection: string;
  absClicked: string;
  setImageVisible: (abs: string) => void;
  setAbsClicked: (abs: string) => void;
  circle?: boolean;
};

export default function AbsMap(props: props) {
  if (props.circle) {
    const coords = props.coords.split(", ");
    return (
      <circle
        cx={coords[0]}
        cy={coords[1]}
        r={coords[2]}
        fill="#fff"
        opacity="0"
        className="hover:cursor-pointer"
        onMouseEnter={() => {
          if (props.absClicked === "") props.setImageVisible(props.absSection);
        }}
        onMouseLeave={() => {
          if (props.absClicked === "") props.setImageVisible("");
        }}
        onClick={() => {
          if (props.absClicked === "") {
            props.setAbsClicked(props.absSection);
            props.setImageVisible(props.absSection);
          } else {
            props.setAbsClicked("");
            props.setImageVisible("");
          }
        }}
      />
    );
  }

  return (
    <polygon
      points={props.coords}
      fill="#fff"
      opacity="0"
      className="hover:cursor-pointer"
      onMouseEnter={() => {
        if (props.absClicked === "") props.setImageVisible(props.absSection);
      }}
      onMouseLeave={() => {
        if (props.absClicked === "") props.setImageVisible("");
      }}
      onClick={() => {
        if (props.absClicked === "") {
          props.setAbsClicked(props.absSection);
          props.setImageVisible(props.absSection);
        } else {
          props.setAbsClicked("");
          props.setImageVisible("");
        }
      }}
    />
  );
}
