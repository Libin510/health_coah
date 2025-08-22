"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import {
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

function CustomGaugeText() {
  const { value, valueMax, cx, cy } = useGaugeState();

  if (value === null) {
    return null;
  }

  const bigFontSize = 40;
  const smallFontSize = 10;
  const verticalOffset = 25;

  return (
    <g>
      <text
        x={cx}
        y={cy - verticalOffset / 2}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: `${bigFontSize}px`,
          fontWeight: "bold",
          fill: "#212121",
        }}
      >
        {value}
      </text>
      <text
        x={cx}
        y={cy + verticalOffset / 2}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: `${smallFontSize}px`,
          fill: "#757575",
        }}
      >
        {`OUT OF ${valueMax}`}
      </text>
    </g>
  );
}

export default function BasicGauges() {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 3 }} sx={{ p: 3 }}>
      <GaugeContainer
        width={150}
        height={150}
        value={20}
        startAngle={-95}
        endAngle={95}
        innerRadius="68%"
        outerRadius="100%"
        cornerRadius={15}
        valueMax={40}
        valueMin={-50}
      >
        <GaugeReferenceArc sx={{ fill: "#E0E0E0" }} />
        <GaugeValueArc sx={{ fill: "#2075FF" }} />
        <CustomGaugeText />
      </GaugeContainer>
    </Stack>
  );
}
