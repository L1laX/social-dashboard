import { useContext } from "react";
import { ThemeContext } from "../../App";
const DarkModeSwitch = ({ setIsWhite }) => {
  const isWhite = useContext(ThemeContext);
  return (
    <div>
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value={isWhite}
          className="peer sr-only"
          onChange={() => setIsWhite(!isWhite)}
        />
        <div
          className={`peer h-6 w-11 rounded-full after:absolute  after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full hover:bg-gradient-to-r ${
            isWhite
              ? "bg-[hsl(230,22%,74%)] after:bg-white"
              : "bg-gradient-to-r from-[#378fe6] to-[#3eda82] after:bg-black"
          } after:transition-all after:content-[''] peer-checked:bg-[hsl(230,22%,74%)] peer-checked:after:translate-x-full  rtl:peer-checked:after:-translate-x-full rtl:peer-checked:after:bg-white dark:bg-gray-200 `}
        ></div>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
