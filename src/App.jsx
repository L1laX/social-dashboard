import "./App.css";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";
import { topData } from "./assets/data";
import { overviewData } from "./assets/data";
import { useState, createContext } from "react";

export const ThemeContext = createContext();
function App() {
  const [isWhite, setIsWhite] = useState(false);
  console.log(isWhite);
  return (
    <ThemeContext.Provider value={isWhite}>
      <section
        className={`main-background font-inter h-full xl:h-screen ${
          isWhite ? "bg-[hsl(0,0%,100%)]" : "bg-[hsl(230,17%,14%)]"
        }`}
      >
        <TopSection topData={topData} setIsWhite={setIsWhite} />
        <BottomSection overviewData={overviewData} />
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
