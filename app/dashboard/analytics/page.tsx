import React from "react";
import {TrendingUp} from "lucide-react";

import {PieChartComponent} from "../_components/charts/pie-charts";

const chartData = [
  {location: "Lagos", percentage: 60, fill: "#205BF3"},
  {location: "Abuja", percentage: 20, fill: "#434343"},
  {location: "Port Hacourt", percentage: 10, fill: "#FABB05"},
  {location: "Other", percentage: 10, fill: "#707070"},
];

function Page() {
  return (
    <div className="px-4 md:px-3 text-grey-200 space-y-8 pb-20 md:pb-4 max-lg:pt-5">
      <section className="space-y-3">
        <h2 className="text-grey text-xl font-medium">Property Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-[1200px]:gap-20">
          <div className="space-y-3">
            <h3 className="font-medium text-lg">Property Views</h3>
            <ul className="p-3 space-y-1.5 rounded-xl border border-blue">
              <li className="flex justify-between">
                <span>Total Views</span>
                <span>1,200</span>
              </li>
              <li className="flex justify-between">
                <span>Monthly Change</span>
                <span>+15%</span>
              </li>
              <li className="flex justify-between">
                <span>Top-Performing period</span>
                <span>August 1-7, 2024 (450 views)</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Bookings</h3>
            <ul className="p-3 space-y-1.5 rounded-xl border border-blue">
              <li className="flex justify-between">
                <span>Total Bookings</span>
                <span>35</span>
              </li>
              <li className="flex justify-between">
                <span>Conversion rate</span>
                <span>2.9%</span>
              </li>
              <li className="flex justify-between">
                <span>Booking Peak</span>
                <span>August 2024 (12 Bookings)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-grey text-xl font-medium">Guest Demographics Breakdown</h2>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
          <div className="space-y-5 sm:col-span-6 min-[879px]:col-span-3 pt-3">
            <h3 className="font-medium text-lg">Age Group</h3>
            <ul className="p-3 space-y-1.5 rounded-xl border border-blue">
              <li className="flex justify-between">
                <span>18 - 24 Years</span>
                <span>30%</span>
              </li>
              <li className="flex justify-between">
                <span>25 - 34 Years</span>
                <span>45%</span>
              </li>
              <li className="flex justify-between">
                <span>35 - 44 Years</span>
                <span>20%</span>
              </li>
              <li className="flex justify-between">
                <span>45+ Years</span>
                <span>5%</span>
              </li>
            </ul>
          </div>
          <div className="space-y-5 sm:col-span-6 min-[879px]:col-span-4 pt-3">
            <h3 className="font-medium text-lg">Booking Habits</h3>
            <ul className="p-3 space-y-1.5 rounded-xl border border-blue">
              <li className="flex justify-between">
                <span>Average Stay Duration</span>
                <span>3 Nights</span>
              </li>
              <li className="flex justify-between">
                <span>Booking Lead Time</span>
                <span>10 Days</span>
              </li>
              <li className="flex justify-between">
                <span>Repeat Guests</span>
                <span>20</span>
              </li>
              <li className="flex justify-between">
                <span>Locations</span>
                <span>5</span>
              </li>
            </ul>
          </div>
          <div className="p-3 rounded-xl border pb-0 border-blue sm:col-span-12 min-[879px]:col-span-5">
            <h3 className="font-medium text-lg">Locations</h3>
            <div className="flex items-center">
              <div className="flex-1 max-w-[180px]">
                <PieChartComponent chartData={chartData} />
              </div>
              <ul className="text-sm">
                {chartData.map((item, index) => {
                  return (
                    <li key={index} className="flex gap-4 items-center py-1">
                      <span
                        className="block h-2 sm:h-3 w-6 sm:w-12 rounded-full"
                        style={{backgroundColor: item.fill}}
                      />
                      <span>{item.location}</span>
                      <span className="ml-auto max-xl:text-xs">{item.percentage}%</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-grey text-xl font-medium flex items-center gap-3">
          Market Trends <TrendingUp />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1200px]:flex gap-5 min-[1200px]:gap-10 justify-between max-xl:text-sm">
          <div className="space-y-3">
            <h3 className="font-medium text-lg">Pricing Trends</h3>
            <ul className="p-3 space-y-1.5 rounded-xl border border-blue">
              <li>Average Nightly Rate in Lagos: N50,000</li>
              <li>Competitor Pricing Range: N45,000 - N55,000</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Occupancy Rate</h3>
            <ul className="p-3 space-y-1.5 rounded-xl border border-blue">
              <li>Current Property: 80%</li>
              <li>Market Average: 75%</li>
            </ul>
          </div>
          <div className="space-y-4 sm:col-span-2">
            <h3 className="font-medium text-lg">Local Competition</h3>
            <ul className="p-3 space-y-1.5 rounded-xl border border-blue">
              <li>Top Competitor: Lagos Lagoon View Apartments</li>
              <li>Average Review Rating: 4.7/5</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
