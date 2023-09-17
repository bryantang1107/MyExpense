import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import "./App.css";
import {
  Asset,
  Expense,
  WatchLists,
  Calendar,
  Stocks,
  Crypto,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  Editor,
} from "./pages";
import { useStateContext } from "./contexts/ContextProvider";
import { useThemeContext } from "./contexts/ThemeProvider";

const App = () => {
  const { activeMenu } = useStateContext(); //custom hook that useContext that pulls value from the context provider
  const { themeSettings, setThemeSettings, currentColor, currentMode } =
    useThemeContext();
  //we destructure the object value
  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl text-white rounded-full"
                style={{ background: currentColor }}
                onClick={() => {
                  setThemeSettings(true);
                }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* each element is a page component on its own */}
                {/* dashboard  */}
                <Route path="/" element={<Asset />} />
                <Route path="/dashboard" element={<Asset />} />

                {/* pages  */}
                <Route path="/watchlists" element={<WatchLists />} />
                <Route path="/stocks" element={<Stocks />} />
                <Route path="/cryptocurrency" element={<Crypto />} />
                <Route path="/expense" element={<Expense />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/inflation rate" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/financial" element={<Financial />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
