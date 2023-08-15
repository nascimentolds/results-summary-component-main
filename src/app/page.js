import { Hanken_Grotesk } from "next/font/google";
import Status from "./components/Status";

import reaction from "../../assets/images/icon-reaction.svg";
import memory from "../../assets/images/icon-memory.svg";
import verbal from "../../assets/images/icon-verbal.svg";
import visual from "../../assets/images/icon-visual.svg";

const hanken = Hanken_Grotesk({
  weight: ["500", "700", "800"],
  style: "normal",
  subsets: ["latin"],
});

const cores = {
  red: "text-lightRed",
  yellow: "text-orangeYellow",
  green: "text-greenTeal",
  blue: "text-cobaltBlue",
  redBg: "bg-lightRedBg",
  yellowBg: "bg-orangeYellowBg",
  greenBg: "bg-greenTealBg",
  blueBg: "bg-cobaltBlueBg",
};

export default function Home() {
  return (
    <main
      className={`${hanken.className} flex sm:min-h-screen sm:flex-row items-center justify-center text-[15px]`}
    >
      <div className="flex sm:flex-row flex-col rounded-3xl sm:shadow-2xl">
        <div className="flex flex-col justify-center items-center rounded-b-[30px] sm:rounded-3xl p-8 pt-4 sm:max-w-[315px] text-white bg-gradient-to-t from-lightRoyalBlueBackground to-lightSlateBlueBackground">
          <h2 className="text-xl font-medium text-center mb-7 text-paleBlue">
            Your Result
          </h2>
          <div className="flex flex-col rounded-full p-2 w-[160px] aspect-square text-center justify-center align-middle bg-gradient-to-t from-persianBlueCircle to-violetBlueCircle">
            <span className="font-bold text-6xl">76</span>
            <span className="text-lightLavender mt-2">of 100</span>
          </div>
          <h1 className="p-5 text-2xl">Great</h1>
          <p className="text-lightLavender text-lg sm:text-base text-center sm:mx-3 mb-4">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="p-8 text-darkGrayBlue">
          <h2 className="text-xl font-bold mb-5">Summary</h2>
          <Status
            status={"Reaction"}
            img={reaction}
            cor={cores.red}
            bg={cores.redBg}
            value={"80"}
          />
          <Status
            status={"Memory"}
            img={memory}
            cor={cores.yellow}
            bg={cores.yellowBg}
            value={"92"}
          />
          <Status
            status={"Verbal"}
            img={verbal}
            cor={cores.green}
            bg={cores.greenBg}
            value={"61"}
          />
          <Status
            status={"Visual"}
            img={visual}
            cor={cores.blue}
            bg={cores.blueBg}
            value={"72"}
          />
          <button className="bg-darkGrayBlue w-full text-white rounded-full p-4 sm:p-3 my-5 hover:bg-gradient-to-t from-lightRoyalBlueBackground to-lightSlateBlueBackground">
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
