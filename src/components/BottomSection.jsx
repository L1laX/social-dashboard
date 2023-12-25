import OverviewCard from "./common/OverviewCard";
import { useContext } from "react";
import { ThemeContext } from "../App";
const BottomSection = ({ overviewData }) => {
  const isWhite = useContext(ThemeContext)[0];
  return (
    <section className=" flex flex-col">
      <h1
        className={`m-5 ml-[5rem] text-3xl ${
          isWhite ? "text-[hsl(230,17%,14%) ]" : "text-[hsl(0,0%,100%)]"
        }`}
      >
        Overview-Today
      </h1>
      <section className="dash-board xl:grid xl:grid-cols-4">
        {overviewData.map((item, index) => {
          return <OverviewCard key={index} item={item} />;
        })}
      </section>
    </section>
  );
};

export default BottomSection;
