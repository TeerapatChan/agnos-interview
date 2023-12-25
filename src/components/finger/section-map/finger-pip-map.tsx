import FingerMap from "../finger-map";

type props = {
  setImageVisible: (imageVisible: string) => void;
  setFingerClicked: (fingerClicked: string) => void;
  fingerClicked: string;
  imageVisible: string;
};

export default function FingerPipMap(props: props) {
  return (
    <>
      <FingerMap
        x={199}
        y={297}
        width={50}
        height={50}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="pip"
        imageVisible={props.imageVisible}
      />
      <FingerMap
        x={275}
        y={221}
        width={60}
        height={50}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="pip"
        imageVisible={props.imageVisible}
      />
      <FingerMap
        x={363}
        y={188}
        width={59}
        height={50}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="pip"
        imageVisible={props.imageVisible}
      />
      <FingerMap
        x={456}
        y={199}
        width={63}
        height={50}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="pip"
        imageVisible={props.imageVisible}
      />
      <FingerMap
        x={633}
        y={397}
        width={50}
        height={50}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="pip"
        imageVisible={props.imageVisible}
      />
    </>
  );
}
