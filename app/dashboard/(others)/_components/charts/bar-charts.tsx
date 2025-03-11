"use client";

import {Bar, BarChart, CartesianGrid, LabelList, XAxis} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Loader from "@/components/loader/loader";
import {useGetBookingPerWeek} from "@/api/booking/get-booking-per-week";

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
  const {data: chartData, isPending} = useGetBookingPerWeek();

  if (isPending) {
    return (
      <div className="h-[300px] overflow-hidden grid place-content-center border border-grey-300/10 bg-grey-300/5">
        <Loader />
      </div>
    );
  }

  if (!chartData || chartData.data.length === 0) {
    return (
      <div className="h-[300px] overflow-hidden grid place-content-center">
        <p className="text-center italic">No data found</p>
      </div>
    );
  }

  return (
    <div className="pt-10 border border-grey-300/10 bg-grey-300/5">
      <ChartContainer config={chartConfig}>
        <BarChart
          accessibilityLayer
          data={chartData.data}
          margin={{
            top: 20,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            axisLine={false}
            dataKey="week"
            tickFormatter={(value) => value}
            tickLine={false}
            tickMargin={10}
          />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
          <Bar dataKey="totalAmount" fill="var(--color-earning)" radius={8}>
            <LabelList className="fill-foreground" fontSize={12} offset={12} position="top" />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
