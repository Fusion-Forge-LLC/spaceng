import Image from "next/image";
import React from "react";
import {useRouter} from "next/navigation";

import {BookingResponse} from "@/api/booking/get-booking";
import {useGetChatRoom} from "@/api/chat/get-room";
import {useUser} from "@/context/user";
import Loader from "@/components/loader/loader";

function BookingDetails({booking}: {booking: BookingResponse["booking"]}) {
  const {mutateAsync, isPending} = useGetChatRoom();
  const {User} = useUser();
  const router = useRouter();

  const dateString = (date: string) => {
    return new Date(date).toLocaleDateString("en-us", {
      month: "long",
      day: "2-digit",
      year: "numeric",
    });
  };

  const openChat = async () => {
    const result = await mutateAsync({
      clientId: booking.client._id,
      vendorId: User?._id!,
    });

    router.push(`/dashboard/communication/${result.data._id}`);
  };

  return (
    <div className="text-sm font-medium space-y-3">
      <h4 className="text-base font-semibold">Guest Information</h4>
      <div className="flex items-center gap-5">
        <span className="mr-20">Name</span>

        <div className="h-10 w-10 rounded-full overflow-hidden relative">
          <Image fill alt="Avatar" src={booking.profile.profile_image} />
        </div>

        <span className="capitalize">{booking.client.fullname}</span>
      </div>

      <div>
        <h4 className="text-base font-semibold text-grey">Contact Information</h4>
        <ul className="pt-1 space-y-1">
          <li className="flex gap-20">
            <span>Phone Number</span>
            <span>{booking.client.phone}</span>
          </li>
          <li className="flex gap-20">
            <span>Email</span>
            <span>{booking.client.email}</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="text-base font-semibold text-grey">Number of Guests</h4>
        <ul className="pt-1 space-y-1">
          <li className="flex gap-20">{booking.no_of_guest}</li>
        </ul>
      </div>

      <div>
        <h4 className="text-base font-semibold text-grey">Payment Status</h4>
        <ul className="pt-1 space-y-1 list-disc pl-1.5 list-inside">
          <li>Total Amount: ₦{booking.amount_paid.toLocaleString()}</li>
          <li>Payment Method: {booking.payment_method}</li>
          <li>Payment Status: Paid in Full</li>
          <li>Transaction ID: {booking.transaction_id}</li>
        </ul>
      </div>

      <div>
        <h4 className="text-base font-semibold text-grey">Booking Notes</h4>
        <ul className="pt-1 space-y-1 list-disc pl-1.5 list-inside">
          <li>Check-in Date: {dateString(booking.checkin)} </li>
          <li>Check-out Date: {dateString(booking.checkout)}</li>
          <li>
            Duration: {booking.duration} Day{booking.duration > 1 && "s"}
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 max-lg:pb-20 max-lg:pt-8 sm:gap-2 text-center">
        {/* <Link
          className="bg-blue border border-blue font-medium rounded-lg px-2 py-2 text-white"
          href={""}
        >
          Edit Booking
        </Link> */}
        <button
          className="border border-blue text-blue font-medium rounded-lg px-2 py-2 hover:bg-blue hover:text-white"
          onClick={openChat}
        >
          {isPending ? <Loader /> : "Contact Guest"}
        </button>
        {/* <Link
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
        </Link> */}
      </div>
    </div>
  );
}

export default BookingDetails;
