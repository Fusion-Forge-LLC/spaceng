"use client";

import * as React from "react";
import {Label, Pie, PieChart} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface ChartData {
  location: string;
  percentage: number;
  fill: string;
}

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function PieChartComponent({chartData}: {chartData: ChartData[]}) {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.percentage, 0);
  }, []);

  return (
    <ChartContainer
      className="mx-auto aspect-square max-h-[200px] max-w-[200px]"
      config={chartConfig}
    >
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
        <Pie
          data={chartData}
          dataKey="percentage"
          innerRadius={60}
          nameKey="location"
          strokeWidth={5}
        >
          <Label
            content={({viewBox}) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text dominantBaseline="middle" textAnchor="middle" x={viewBox.cx} y={viewBox.cy}>
                    <tspan className="fill-grey text-2xl font-bold" x={viewBox.cx} y={viewBox.cy}>
                      {totalVisitors.toLocaleString()}%
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
