import { useContext } from "react";
import { ThemeContext } from "../../App";
const CardSection = ({
  item: { icon, name, followers, todayFollowers, todayStatus, borderTop },
}) => {
  const isWhite = useContext(ThemeContext);
  return (
    <section
      className={`card-section m-5  w-80 items-center justify-center  rounded-2xl   ${
        isWhite ? "bg-[hsl(227,47%,96%)]" : "bg-[hsl(228,28%,20%)]"
      }`}
    >
      <div className={`h-3 w-full rounded-t-2xl ${borderTop}`}></div>
      <div
        className={`content flex h-full flex-col items-center  justify-center gap-3 py-5`}
      >
        <div className="header-content flex items-center justify-center gap-2">
          <img src={icon} alt="" width={25} />
          <p
            className={`${
              isWhite ? "text-[hsl(228,12%,44%)]" : "text-[hsl(228,34%,66%)]"
            }`}
          >
            {name}
          </p>
        </div>
        <div className="folowers flex flex-col items-center justify-center">
          <h1
            className={`text-6xl ${
              isWhite ? "text-[hsl(230,17%,14%)]" : "text-[hsl(0,0%,100%)]"
            }`}
          >
            {followers}
          </h1>
          <p
            className={`pt-1 ${
              isWhite ? "text-[hsl(228,12%,44%)]" : "text-[hsl(228,34%,66%)]"
            }`}
          >
            F O L L O W E R S
          </p>
        </div>
        <div className="update flex items-center justify-center gap-3">
          <img src={todayStatus} width={12} height={12} />
          <h1
            className={`${
              todayStatus === "images/icon-up.svg"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {todayFollowers} Today
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
