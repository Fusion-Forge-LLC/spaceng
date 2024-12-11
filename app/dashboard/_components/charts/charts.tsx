"use client";

import React, {FC} from "react";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";

import {useGetBookingPerMonth} from "@/api/booking/get-booking-per-month";
import Loader from "@/components/loader/loader";

const Chart: FC = () => {
  const {data: chartData, isPending} = useGetBookingPerMonth();

  if (isPending) {
    return (
      <div className="h-[300px] overflow-hidden grid place-content-center">
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
    <div className="h-[300px] overflow-hidden">
      <ResponsiveContainer height="100%" width="100%">
        <AreaChart
          data={chartData.data}
          height={400}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
          width={500}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area dataKey="totalAmount" fill="#205BF3" stroke="#205BF3" type="monotone" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
