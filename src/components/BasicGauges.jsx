import * as React from "react";
import Stack from "@mui/material/Stack";
import {
  GaugeContainer,
  Gauge,
  GaugeReferenceArc,
  GaugeValueArc,
  useGaugeState,
} from "@mui/x-charts/Gauge";

/**
 * Custom component to render text inside the Gauge with different font sizes.
 */
function CustomGaugeText() {
  const { value, valueMax, cx, cy } = useGaugeState();

  if (value === null) {
    return null;
  }

  // Define font sizes and vertical offset for positioning
  const bigFontSize = 40;
  const smallFontSize = 10;
  const verticalOffset = 25; // Adjust this value to control spacing between the two text lines

  return (
    <g>
      {/* Text for the main value (e.g., "75") */}
      <text
        x={cx}
        y={cy - verticalOffset / 2} // Position slightly above the center
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: `${bigFontSize}px`,
          fontWeight: "bold",
          fill: "currentColor", // Inherit text color
        }}
      >
        {value}
      </text>
      {/* Text for "out of max" (e.g., "out of 150") */}
      <text
        x={cx}
        y={cy + verticalOffset / 2} // Position slightly below the center
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: `${smallFontSize}px`,
          fill: "#6B7280", // Inherit text color
        }}
      >
        {`OUT OF ${valueMax}`}
      </text>
    </g>
  );
}

export default function BasicGauges() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 1, md: 3 }}
      sx={{ p: 3 }}
    >
      {/* Second Gauge with custom text */}
      <GaugeContainer
        width={150}
        height={150}
        value={20} // Example value
        startAngle={-95}
        endAngle={95}
        innerRadius="68%"
        outerRadius="100%"
        cornerRadius={15}
        valueMax={40} // Example max value
        valueMin={-50}
      >
        {/* Render the default arcs */}
        <GaugeReferenceArc />
        <GaugeValueArc />
        {/* Render the custom text component */}
        <CustomGaugeText />
      </GaugeContainer>
    </Stack>
  );
}
