"use client";

import * as React from "react";
import {Label, Pie, PieChart} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {useGetClientLocation} from "@/api/booking/get-clients-location";
import Loader from "@/components/loader/loader";
import {getRandomHexColor} from "@/lib/utils";

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

export function ClientsLocation({chartData}: {chartData: ChartData[]}) {
  const {data, isPending} = useGetClientLocation();
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.percentage, 0);
  }, []);

  if (isPending) {
    return (
      <div className="h-[300px] overflow-hidden grid place-content-center">
        <Loader />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-[300px] overflow-hidden grid place-content-center">
        <p className="text-center italic">No data found</p>
      </div>
    );
  }

  const chart_data = data.data.locations.map((item) => {
    return {...item, fill: getRandomHexColor()};
  });

  // console.log(data);

  return (
    <div className="flex items-center">
      <div className="flex-1 max-w-[180px]">
        <ChartContainer
          className="mx-auto aspect-square max-h-[200px] max-w-[200px]"
          config={chartConfig}
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} cursor={false} />
            <Pie
              data={chart_data}
              dataKey="percentage"
              innerRadius={60}
              nameKey="city"
              strokeWidth={5}
            >
              <Label
                content={({viewBox}) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        dominantBaseline="middle"
                        textAnchor="middle"
                        x={viewBox.cx}
                        y={viewBox.cy}
                      >
                        <tspan
                          className="fill-grey text-2xl font-bold"
                          x={viewBox.cx}
                          y={viewBox.cy}
                        >
                          {data.data.total.toLocaleString()}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
      <ul className="text-sm">
        {chart_data.map((item, index) => {
          return (
            <li key={index} className="flex gap-4 items-center py-1">
              <span
                className="block h-2 sm:h-3 w-6 sm:w-12 rounded-full"
                style={{backgroundColor: item.fill}}
              />
              <span>{item.city}</span>
              <span className="ml-auto max-xl:text-xs">{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
