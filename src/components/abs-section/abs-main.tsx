import { absImages } from "../../utils/abs.config";
import AbsShow from "./abs-show";

type props = {
  setAbsClicked: (finger: string) => void;
  absClicked: string;
};

export default function AbsMain(props: props) {
  return (
    <div
      className="xs:h-[70%] md:h-4/5 w-[85%] xs:w-[80%] sm:w-[70%] lg:w-1/2 shadow-[0_3px_12px_rgb(0,0,0,0.2)]
    rounded-md pt-10 pb-3 m-5 text-center flex flex-col gap-5 relative "
    >
      <h1 className="md:text-2xl sm:text-xl xs:text-lg font-normal text-gray-700">
        ปวดท้องที่บริเวณใดมากที่สุด?
      </h1>
      <div className="flex justify-center overflow-auto relative">
        <img
          src={absImages.defaultAbs}
          alt="Default Abs"
          className="h-full z-1"
        />
        <AbsShow
          setAbsClicked={props.setAbsClicked}
          absClicked={props.absClicked}
        />
        <img
          src={absImages.allOverHighlight}
          alt="Button highlight"
          className="h-full z-10 absolute hidden"
        />
      </div>
    </div>
  );
}
