type props = {
  setFingerClicked: (fingerClicked: string) => void;
  setAbsClicked: (absClicked: string) => void;
  fingerClicked: string;
  absClikcked: string;
  setShow: (show: string) => void;
};

export default function Button(props: props) {
  return (
    <button
      className={`py-2 px-4 rounded-xl w-[85%] xs:w-[80%] sm:w-[70%] lg:w-1/2 h-10 md:h-12
      transition duration-400 ease-in-out  font-medium md:text-lg 
      sm:text-sm xs:text-xs text-xs ${
        props.fingerClicked || props.absClikcked
          ? "bg-primary hover:bg-secondary text-white"
          : "bg-gray-200 text-gray-600 hover:cursor-default"
      }  `}
      onClick={() => {
        if (props.fingerClicked) {
          props.setShow("abs");
          props.setFingerClicked("");
        } else if (props.absClikcked) {
          props.setShow("finger");
          props.setAbsClicked("");
        }
      }}
    >
      ต่อไป
    </button>
  );
}
