import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  SplineAreaSeries,
  Inject,
  DateTime,
  Legend,
} from "@syncfusion/ej2-react-charts";
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { Header } from "../../components";

import { useThemeContext } from "../../contexts/ThemeProvider";
const Area = () => {
  const { currentMode } = useThemeContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Area" title="Inflation Rate in %" />
      <ChartComponent
        id="line-chart"
        height="420px"
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { widht: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === "dark" ? "#33373E" : "#FFF"}
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => {
            return <SeriesDirective key={index} {...item} />;
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
