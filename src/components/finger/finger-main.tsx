import { fingerImages } from "../../utils/finger.config";
import FingerShow from "./finger-show";

type props = {
  setFingerClicked: (finger: string) => void;
  fingerClicked: string;
};

export default function FingerMain(props: props) {
  return (
    <div
      className="xs:h-[70%] md:h-4/5 w-[85%] xs:w-[80%] sm:w-[70%] lg:w-1/2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]
    rounded-md pt-10 pb-3 m-5 text-center flex flex-col gap-5 relative "
    >
      <h1 className="md:text-2xl sm:text-xl xs:text-lg font-normal text-gray-700">
        จุดไหนที่คุณปวดนิ้วมากที่สุด?
      </h1>
      <div className="flex justify-center overflow-auto relative">
        <img
          src={fingerImages.defaultFinger}
          alt="Default Finger"
          className="h-full z-1"
        />
        <FingerShow
          setFingerClicked={props.setFingerClicked}
          fingerClicked={props.fingerClicked}
        />
      </div>
    </div>
  );
}
