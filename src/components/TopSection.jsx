import { useContext } from "react";
import { ThemeContext } from "../App";
import CardSection from "./common/CardSection";
import DarkModeSwitch from "./common/DarkModeSwitch";

const TopSection = ({ topData }) => {
  const isWhite = useContext(ThemeContext)[0];
  return (
    <section className="xl:mx-30 mx-[2rem] xl:pt-7">
      <section className="top xl:grid-cols- flex flex-col px-5 xl:grid xl:grid-cols-10">
        <div
          className={`top-content border-b-2 pb-2 xl:col-span-9 xl:border-0 ${
            isWhite ? "border-[hsl(228,34%,66%)]" : "border-[hsl(228,28%,20%)]"
          }`}
        >
          <h1
            className={`py-2 text-3xl ${
              isWhite ? "text-[hsl(230,17%,14%) ]" : "text-[hsl(0,0%,100%)]"
            }`}
          >
            Social Media DashBoard
          </h1>
          <p
            className={` text-sm ${
              isWhite ? "text-[hsl(230,17%,14%) ]" : "text-[hsl(0,0%,100%)]"
            }`}
          >
            Total Followes: 23,004
          </p>
        </div>

        <section className="dark-mode-section mt-2 flex items-center justify-between">
          <h1
            className={` text-sm ${
              isWhite ? "text-[hsl(230,17%,14%) ]" : "text-[hsl(0,0%,100%)]"
            }`}
          >
            Dark Mode
          </h1>
          <DarkModeSwitch />
        </section>
      </section>
      <section className="card-section flex flex-col items-center xl:grid xl:grid-cols-4">
        {topData.map((item, index) => {
          return <CardSection key={index} item={item} />;
        })}
      </section>
    </section>
  );
};

export default TopSection;
