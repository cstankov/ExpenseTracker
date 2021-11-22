import React from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = ({ data, labels, colors }) => {
  return (
    <div>
      <Pie
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

export default PieChart;
