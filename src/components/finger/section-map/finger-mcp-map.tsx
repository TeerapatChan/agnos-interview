import FingerMap from "../finger-map";

type props = {
  setImageVisible: (imageVisible: string) => void;
  setFingerClicked: (fingerClicked: string) => void;
  fingerClicked: string;
  imageVisible: string;
};

export default function FingerMcpMap(props: props) {
  return (
    <>
      <FingerMap
        x={230}
        y={392}
        width={64}
        height={54}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="mcp"
        imageVisible={props.imageVisible}
      />
      <FingerMap
        x={298}
        y={358}
        width={67}
        height={56}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="mcp"
        imageVisible={props.imageVisible}
      />
      <FingerMap
        x={369}
        y={338}
        width={70}
        height={50}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="mcp"
        imageVisible={props.imageVisible}
      />
      <FingerMap
        x={446}
        y={339}
        width={73}
        height={50}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="mcp"
        imageVisible={props.imageVisible}
      />
      <FingerMap
        x={561}
        y={505}
        width={61}
        height={58}
        setImageVisible={props.setImageVisible}
        setFingerClicked={props.setFingerClicked}
        fingerClicked={props.fingerClicked}
        fingerSection="mcp"
        imageVisible={props.imageVisible}
      />
    </>
  );
}
