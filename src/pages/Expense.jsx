import React from "react";
import { Header } from "../components";

const Expense = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Expense" />
      can do a pie chart, calculate spending category (monthly)
    </div>
  );
};

export default Expense;
