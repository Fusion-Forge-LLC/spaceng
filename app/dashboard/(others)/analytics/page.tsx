import React from "react";
import {TrendingUp} from "lucide-react";

import {ClientsLocation} from "../_components/charts/pie-charts";
import Views from "../_components/analytics/views";
import Booking from "../_components/analytics/booking";
import BookingHabit from "../_components/analytics/booking-habit";

const chartData = [
  {location: "Lagos", percentage: 60, fill: "#205BF3"},
  {location: "Abuja", percentage: 20, fill: "#434343"},
  {location: "Port Hacourt", percentage: 10, fill: "#FABB05"},
  {location: "Other", percentage: 10, fill: "#707070"},
];

function Page() {
  return (
    <div className="px-4 md:px-3 text-grey-200 space-y-8 pb-20 md:pb-4 pt-5">
      <section className="space-y-3">
        <h2 className="text-grey text-lg font-medium">Property Performance Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-[1200px]:gap-20">
          <div className="space-y-1">
            <h3 className="font-medium">Property Views</h3>
            <Views />
          </div>
          <div className="space-y-1">
            <h3 className="font-medium">Bookings</h3>
            <Booking />
          </div>
        </div>
      </section>

      <section className="md:space-y-3">
        <h2 className="text-grey text-lg font-medium">Guest Demographics Breakdown</h2>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
          <div className="space-y-5 col-span-12 lg:col-span-6 pt-3 hidden">
            <h3 className="font-medium text-lg">Age Group</h3>
            <ul className="p-3 space-y-1.5 rounded-xl border border-blue bg-grey-300/5">
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
          <div className="space-y-3 md:space-y-5 col-span-12 lg:col-span-6  pt-3">
            <h3 className="font-medium">Booking Habits</h3>
            <BookingHabit />
          </div>
          <div className="p-3 rounded-xl border pb-0 border-grey-300/10 bg-grey-300/5 col-span-12 lg:col-span-6">
            <h3 className="font-medium text-lg">Locations</h3>
            <ClientsLocation chartData={chartData} />
          </div>
        </div>
      </section>

      <section className="space-y-3 hidden">
        <h2 className="text-grey text-xl font-medium flex items-center gap-3">
          Market Trends <TrendingUp />
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 min-[1200px]:flex gap-5 min-[1200px]:gap-10 justify-between max-xl:text-sm">
          <div className="space-y-3">
            <h3 className="font-medium text-lg">Pricing Trends</h3>
            <ul className="p-3 space-y-1.5 rounded-xl border border-blue bg-grey-300/5 ">
              <li>Average Nightly Rate in Lagos: N50,000</li>
              <li>Competitor Pricing Range: N45,000 - N55,000</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Occupancy Rate</h3>
            <ul className="p-3 space-y-1.5 rounded-xl border border-blue bg-grey-300/5">
              <li>Current Property: 80%</li>
              <li>Market Average: 75%</li>
            </ul>
          </div>
          <div className="space-y-4 sm:col-span-2">
            <h3 className="font-medium text-lg">Local Competition</h3>
            <ul className="p-3 space-y-1.5 rounded-xl border border-blue bg-grey-300/5">
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
