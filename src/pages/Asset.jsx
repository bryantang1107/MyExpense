import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, Button, SparkLine } from "../components/index.jsx";
import { BsBoxSeam, BsCurrencyBitcoin } from "react-icons/bs";
import { SparklineAreaData, ecomPieChartData } from "../data/dummy";
import { useThemeContext } from "../contexts/ThemeProvider";

const Expense = () => {
  const { currentColor } = useThemeContext();

  const calculatePercentage = (budget, expense) => {
    return ((expense / budget) * 100).toFixed(2);
  };

  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">My Portfolio</p>
              <p className="text-2xl tracking-wide">$3,488,123.23</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="View"
              borderRadius="10px"
              size="md"
            ></Button>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
            <button
              type="button"
              style={{
                color: "#03C9D7",
                backgroundColor: "#E5FAFB",
              }}
              className="text-2xl opacity-[0.8] rounded-full p-3 hover:drop-shadow-xl"
            >
              <BsBoxSeam />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">RM1000</span>
              <span className={`text-sm text-[#03C9D7] ml-2`}>5%</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">Stocks</p>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
            <button
              type="button"
              style={{
                color: "rgb(255, 244, 229)",
                backgroundColor: "rgb(254, 201, 15)",
              }}
              className="text-2xl opacity-[0.8] rounded-full p-3 hover:drop-shadow-xl"
            >
              <BsCurrencyBitcoin />
            </button>
            <p className="mt-3">
              <span className="text-lg font-semibold">RM1500</span>
              <span className={`text-sm text-[#03C9D7] ml-2`}>5%</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">Cryptocurrency</p>
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between ">
            <p
              className={`font-semibold text-xl`}
              style={{ color: currentColor }}
            >
              {new Date().toLocaleString("default", { month: "long" })}'s
              Expense
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600  p-2 rounded-full text-center cursor-default">
                <span className="dark:text-white">
                  <GoPrimitiveDot />
                </span>
                <span className="dark:text-white">Expense</span>
              </p>
              <p
                className={`flex items-center gap-1] hover:bg-slate-100 p-2 rounded-full text-center cursor-default`}
                style={{ color: currentColor }}
              >
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,438</span>
                  <span
                    className={`p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white ml-3 text-sm`}
                    style={{ backgroundColor: currentColor }}
                  >
                    {calculatePercentage(93438, 48438)}%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-3xl font-semibold">$48,438</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                  currentColor={currentColor}
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color={currentColor}
                />
              </div>
              <div className="mt-10">
                <Link to="/expense">
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Add Expense"
                    borderRadius="10px"
                  ></Button>
                </Link>
              </div>
            </div>
            <div>
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;
