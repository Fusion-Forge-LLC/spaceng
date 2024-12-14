import Image from "next/image";
import Link from "next/link";
import React from "react";

import {BookingResponse} from "@/api/booking/get-booking";

function BookingDetails({booking}: {booking: BookingResponse["booking"]}) {
  const dateString = (date: string) => {
    return new Date(date).toLocaleDateString("en-us", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="text-sm font-medium space-y-3">
      <h4 className="text-base font-semibold">Guest Information</h4>
      <div className="flex items-center gap-5">
        <span className="mr-20">Name</span>

        <div className="h-10 w-10 rounded-full overflow-hidden relative">
          <Image fill alt="Avatar" src={"/avatar.png"} />
        </div>

        <span>{booking.client_id.fullname}</span>
      </div>

      <div>
        <h4 className="text-base font-semibold text-grey">Contact Information</h4>
        <ul className="pt-1 space-y-1">
          <li className="flex gap-20">
            <span>Phone Number</span>
            <span>+234 803 123 4567</span>
          </li>
          <li className="flex gap-20">
            <span>Email</span>
            <span>{booking.client_id.email}</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-base font-semibold text-grey">Number of Guests</h4>
        <ul className="pt-1 space-y-1">
          <li className="flex gap-20">4(2 Adults, 2 Children)</li>
        </ul>
      </div>

      <div>
        <h4 className="text-base font-semibold text-grey">Special Requirements</h4>
        <ul className="pt-1 space-y-1 list-disc pl-1.5 list-inside">
          <li>Early Check-in (requested for 11:00 AM)</li>
          <li>Crib of the infant in the master bedroom</li>
        </ul>
      </div>

      <div>
        <h4 className="text-base font-semibold text-grey">Payment Status</h4>
        <ul className="pt-1 space-y-1 list-disc pl-1.5 list-inside">
          <li>Total Amount: ₦{booking.amount_paid.toLocaleString()}</li>
          <li>Payment Method: Credit Card (Visa)</li>
          <li>Payment Status: Paid in Full</li>
          <li>Transaction ID: {booking.transaction_id}</li>
        </ul>
      </div>

      <div>
        <h4 className="text-base font-semibold text-grey">Booking Notes</h4>
        <ul className="pt-1 space-y-1 list-disc pl-1.5 list-inside">
          <li>Check-in Date: {dateString(booking.checkin)} </li>
          <li>Check-out Date: {dateString(booking.checkout)}</li>
          <li>Check-in Time: 12:00 PM</li>
          <li>Check-out Time: 12:00 PM</li>
          <li>Security Deposit: ₦100,000 (to be refunded after check-out inspection)</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 max-lg:pb-20 max-lg:pt-8 sm:gap-2 text-center">
        <Link
          className="bg-blue border border-blue font-medium rounded-lg px-2 py-2 text-white"
          href={""}
        >
          Edit Booking
        </Link>
        <Link
          className="border border-blue text-blue font-medium rounded-lg px-2 py-2 hover:bg-blue hover:text-white"
          href={""}
        >
          Contact Guest
        </Link>
        <Link
          className="border border-blue text-blue font-medium rounded-lg px-2 py-2 hover:bg-blue hover:text-white"
          href={""}
        >
          Cancel Booking
        </Link>
        <Link
          className="border border-blue text-blue font-medium rounded-lg px-2 py-2 hover:bg-blue hover:text-white"
          href={""}
        >
          Previous Stays
        </Link>
      </div>
    </div>
  );
}

export default BookingDetails;
