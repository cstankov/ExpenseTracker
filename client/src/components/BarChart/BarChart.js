import React from "react";
import { Bar } from "react-chartjs-2";

export const BarChart = ({ data, labels, colors }) => {
  return (
    <div>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Cost",
              data: data,
              backgroundColor: colors,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
