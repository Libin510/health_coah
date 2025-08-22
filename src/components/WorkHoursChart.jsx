"use client";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceDot,
} from "recharts";
import { LuClock8 } from "react-icons/lu";

const chartData = [
  { id: 1, day: "Mon", hours: 6, extraHours: 2 },
  { id: 2, day: "Tue", hours: 2, extraHours: 5 },
  { id: 3, day: "Wed", hours: 5, extraHours: 2 },
  { id: 4, day: "Thu", hours: 3, extraHours: 3 },
  { id: 5, day: "Fri", hours: 1, extraHours: 1 },
];

const days = [
  { id: 1, label: "M", full: "Monday" },
  { id: 2, label: "T", full: "Tuesday" },
  { id: 3, label: "W", full: "Wednesday" },
  { id: 4, label: "Th", full: "Thursday" },
  { id: 5, label: "F", full: "Friday" },
];

export default function WorkHoursChart() {
  const [selectedDay, setSelectedDay] = useState(3);
  const selectedData = chartData.find((d) => d.id === selectedDay);
  const selectedLabel = days.find((d) => d.id === selectedDay);

  return (
    <div className="w-full p-2">
      <div className="flex items-center gap-3">
        <div className="bg-[#F1F3F5] rounded-full h-8 w-8 flex items-center justify-center">
          <LuClock8 />
        </div>
        <div>
          <p className="text-[10px] font-normal">Total Work</p>
          <p className="text-xs font-bold">45 Hours - 45 Mins</p>
        </div>
      </div>

      <div className="bg-surface-elevated border-border">
        <div className="relative">
          <div className="h-40 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="day" hide />
                <YAxis hide />

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

                {selectedData && (
                  <>
                    <ReferenceDot
                      x={selectedData.day}
                      y={selectedData.hours}
                      r={5}
                      fill="#2073F9"
                      stroke="white"
                      strokeWidth={2}
                    />

                   
                   
                    <foreignObject
                      x={chartData.findIndex((d) => d.id === selectedDay) * 40}
                      y={120 - selectedData.hours * 10 - 35} 
                      width={100}
                      height={40}
                    >
                      <div className="flex items-center justify-center">
                        <div className="bg-[#2073F9] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                          {selectedLabel?.label} {selectedData.hours}h
                        </div>
                      </div>
                    </foreignObject>
                  </>
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex justify-center gap-4">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setSelectedDay(day.id)}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  selectedDay === day.id
                    ? "bg-[#272F43] text-background text-white"
                    : "text-muted-foreground hover:text-foreground bg-[#F1F3F5]"
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
