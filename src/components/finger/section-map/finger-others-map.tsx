import FingerMap from "../finger-map";

type props = {
  setImageVisible: (imageVisible: string) => void;
  setFingerClicked: (fingerClicked: string) => void;
  fingerClicked: string;
  imageVisible: string;
};

export default function FingerOthersMap(props: props) {
  return (
    <FingerMap
      x={115}
      y={876}
      width={577}
      height={87}
      setImageVisible={props.setImageVisible}
      setFingerClicked={props.setFingerClicked}
      fingerClicked={props.fingerClicked}
      fingerSection="others"
      imageVisible={props.imageVisible}
    />
  );
}
