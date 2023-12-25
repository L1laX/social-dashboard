import "./App.css";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";
import { topData } from "./assets/data";
import { overviewData } from "./assets/data";
import { useState, createContext } from "react";

export const ThemeContext = createContext();
function App() {
  const [isWhite, setIsWhite] = useState(false);
  return (
    <ThemeContext.Provider value={[isWhite, setIsWhite]}>
      <section
        className={`main-background relative z-50 h-full font-inter xl:h-screen ${
          isWhite ? "bg-[hsl(0,0%,100%)]" : "bg-[hsl(230,17%,14%)]"
        }`}
      >
        <div
          className={`bg absolute -z-20 ${
            isWhite ? "bg-[hsl(225,100%,98%)]" : "bg-[hsl(231,39%,13%)]"
          } absolute z-50 h-[250px] w-full rounded-b-2xl`}
        ></div>
        <div className="render-section z-50">
          <TopSection topData={topData} />
          <BottomSection overviewData={overviewData} />
        </div>
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
