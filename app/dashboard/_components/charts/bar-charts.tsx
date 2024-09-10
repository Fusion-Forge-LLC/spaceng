"use client";

import {Bar, BarChart, CartesianGrid, LabelList, XAxis} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart with a label";

const chartData = [
  {month: "January", earning: 1200000},
  {month: "February", earning: 980000},
  {month: "March", earning: 1150000},
  {month: "April", earning: 890000},
];

const chartConfig = {
  earning: {
    label: "Earning",
    color: "#205BF3",
  },
} satisfies ChartConfig;

export function BarCharts() {
  return (
    <div className="pt-10">
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData}
          margin={{
            top: 20,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            axisLine={false}
            dataKey="month"
            tickFormatter={(value) => value.slice(0, 3)}
            tickLine={false}
            tickMargin={10}
          />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
          <Bar dataKey="earning" fill="var(--color-earning)" radius={8}>
            <LabelList className="fill-foreground" fontSize={12} offset={12} position="top" />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
