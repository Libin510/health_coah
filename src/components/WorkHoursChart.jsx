import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { LuClock8 } from "react-icons/lu";

const chartData = [
  { day: "Mon", hours: 6, extraHours: 2 },
  { day: "Tue", hours: 7, extraHours: 5 },
  { day: "Wed", hours: 8, extraHours: 2 },
  { day: "Thu", hours: 6, extraHours: 3 },
  { day: "Fri", hours: 9, extraHours: 1 },
];

const days = ["M", "T", "W", "T", "F"];

export default function WorkHoursChart() {
  const [selectedDay, setSelectedDay] = useState("W");
  const selectedData = chartData[days.indexOf(selectedDay)];

  return (
    <div className="w-full p-2">
      {/* Header Stats */}
      <div className="flex items-center gap-3">
        <div className="bg-[#F1F3F5] rounded-full h-8 w-8 flex items-center justify-center">
          <LuClock8 />
        </div>
        <div>
          <p className="text-[10px] font-normal">Total Work</p>
          <p className="text-xs font-bold">45 Hours - 45 Mins</p>
        </div>
      </div>

      {/* Chart Container */}
      <div className="bg-surface-elevated border-border">
        <div className="relative">
          {/* Chart */}
          <div className="h-32 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="day" hide />
                <YAxis hide />

                {/* Horizontal dotted line at y=8 */}
                <ReferenceLine y={1} stroke="gray" strokeDasharray="4 4" />
                <ReferenceLine y={5} stroke="gray" strokeDasharray="4 4" />
                <ReferenceLine y={9} stroke="gray" strokeDasharray="4 4" />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#206AFF"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="extraHours"
                  stroke="#DA5557"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Selected Day Indicator */}
          {selectedData && (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-[#2073F9] rounded-full">
              <div className="bg-chart-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                {selectedDay} {selectedData.hours}h
              </div>
            </div>
          )}

          {/* Day Selector */}
          <div className="flex justify-center gap-4 ">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  selectedDay === day
                    ? "bg-[#272F43] text-background text-white"
                    : "text-muted-foreground hover:text-foreground bg-[#F1F3F5]"
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
