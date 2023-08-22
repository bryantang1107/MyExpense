import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

export default class SparkLine extends React.PureComponent {
  render() {
    const { id, type, height, width, data, currentColor, color } = this.props;
    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          format: "x-axis : ${x} , y-axis : ${yval}",
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x" //must match the tooltip format + data prop
        yName="yval" //must match the tooltip format + data prop
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}
