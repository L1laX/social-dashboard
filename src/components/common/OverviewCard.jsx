import { useContext } from "react";
import { ThemeContext } from "../../App";
const OverviewCard = ({
  item: { title, icon, view, percentage, todayStatus },
}) => {
  const isWhite = useContext(ThemeContext);
  return (
    <section className="my-4 flex w-full flex-col items-center justify-center">
      <div
        className={`bg flex h-[7rem] w-80 flex-col justify-between rounded-2xl p-5 ${
          isWhite ? "bg-[hsl(227,47%,96%)]" : "bg-[hsl(228,28%,20%)]"
        }`}
      >
        <div className="top-content flex items-center justify-between ">
          <h1
            className={`${
              isWhite ? "text-[hsl(228,12%,44%)]" : "text-[hsl(228,34%,66%)]"
            }`}
          >
            {title}
          </h1>
          <img src={icon} alt="" />
        </div>
        <div className="lower-content flex items-center justify-between ">
          <h1
            className={`${
              isWhite ? "text-[hsl(230,17%,14%)]" : "text-[hsl(0,0%,100%)]"
            }`}
          >
            {view}
          </h1>
          <p
            className={`flex items-center justify-center gap-2 ${
              todayStatus === "images/icon-up.svg"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            <img src={todayStatus} alt="" /> {percentage} %
          </p>
        </div>
      </div>
    </section>
  );
};

export default OverviewCard;
