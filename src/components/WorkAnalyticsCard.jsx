"use client";

import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";

// Weekday labels
const weekdays = ["M", "T", "W", "T", "F"];

// Example hours worked
const blueData = [2, 4, 2, 5.5, 3]; // Blue line
const redData = [7, 6, 7.5, 8, 6.5];  // Red line

export default function WorkAnalyticsCard() {
  return (
    <div className="">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        {/* <AccessTimeIcon className="text-gray-500" fontSize="small" /> */}
        <span className="text-sm text-gray-600">Total Work</span>
      </div>
      <div className="text-lg font-semibold text-gray-900 mb-4">
        45 Hours - 45 Mins
      </div>

      {/* Line Chart */}
      <LineChart
        xAxis={[
          {
            data: weekdays,
            scaleType: "point",
          },
        ]}
        series={[
          {
            data: blueData,
            color: "#2563EB", // Tailwind blue-600
            curve: "natural",
            label: "Work Hours",
          },
          {
            data: redData,
            color: "#EF4444", // Tailwind red-500
            curve: "natural",
            label: "Target Hours",
          },
        ]}
        height={200}
        margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
        grid={{ vertical: false, horizontal: true }}
        slotProps={{
          legend: { hidden: true },
          tooltip: {
            trigger: "axis",
            render: (params) => {
              // Highlight Wednesday
              const point = params[0];
              if (point.dataIndex === 2) {
                return (
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium font-manrope">
                    W. {blueData[2]}h
                  </div>
                );
              }
              return null;
            },
          },
        }}
      />
    </div>
  );
}
