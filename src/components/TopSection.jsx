import { useContext } from "react";
import { ThemeContext } from "../App";
import CardSection from "./common/CardSection";
import DarkModeSwitch from "./common/DarkModeSwitch";

const TopSection = ({ setIsWhite, topData }) => {
  const isWhite = useContext(ThemeContext);
  {
    console.log(isWhite);
  }
  return (
    <section className="xl:mx-30 relative mx-[5rem] xl:pt-7">
      <div
        className={`bg ${
          isWhite ? "bg-[hsl(225, 100%, 98%)]" : "bg-[hsl(231,39%,13%)]"
        } absolute  left-0 top-0 h-[300px]`}
      ></div>
      <section className="top xl:grid-cols- flex flex-col xl:grid xl:grid-cols-10">
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
          <DarkModeSwitch setIsWhite={setIsWhite} />
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
