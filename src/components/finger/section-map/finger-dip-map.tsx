import FingerMap from "../finger-map";

type props = {
  setImageVisible: (imageVisible: string) => void;
  setFingerClicked: (fingerClicked: string) => void;
  fingerClicked: string;
  imageVisible: string;
};

export default function FingerDipMap(props: props) {
  return (
    <>
      <FingerMap
        x={170}
        y={228}
        width={50}
        height={45}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="dip"
        imageVisible={props.imageVisible}
      />
      <FingerMap
        x={272}
        y={122}
        width={50}
        height={47}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="dip"
        imageVisible={props.imageVisible}
      />
      <FingerMap
        x={357}
        y={79}
        width={56}
        height={48}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="dip"
        imageVisible={props.imageVisible}
      />
      <FingerMap
        x={459}
        y={105}
        width={57}
        height={47}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="dip"
        imageVisible={props.imageVisible}
      />
    </>
  );
}
