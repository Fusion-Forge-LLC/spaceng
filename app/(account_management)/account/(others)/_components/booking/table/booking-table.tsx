"use client";

import {ChevronDown} from "lucide-react";
import {useEffect, useState} from "react";

import {useGetClientBookings} from "@/api/booking/get-client-bookings";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {BookingType} from "@/@types/types";
import Loader from "@/components/loader/loader";

import Card from "../card/card";

function BookingTable() {
  const {mutateAsync, isPending} = useGetClientBookings();
  const [display, setDisplay] = useState("pending");
  const [bookings, setBookings] = useState<BookingType[]>([]);

  useEffect(() => {
    mutateAsync(display).then((data) => {
      setBookings(data.data);
    });
  }, [display]);

  if (isPending) {
    return (
      <div className="min-h-screen grid place-content-center">
        <Loader />
      </div>
    );
  }

  return (
    <section>
      <div className="py-2">
        <div className=" flex gap-6 items-center mb-5">
          <button
            className={`${display == "pending" && "text-blue"} flex items-center gap-2 font-medium`}
            onClick={() => setDisplay("pending")}
          >
            Pending Bookings
            <ChevronDown size={24} />
          </button>
          <button
            className={`${display == "active" && "text-blue"} flex items-center gap-2 font-medium`}
            onClick={() => setDisplay("active")}
          >
            Active Booking
            <ChevronDown size={24} />
          </button>
          <button
            className={`${display == "completed" && "text-blue"} flex items-center gap-2 font-medium`}
            onClick={() => setDisplay("completed")}
          >
            Completed Booking
            <ChevronDown size={24} />
          </button>
        </div>
        <Table>
          <TableCaption>A list of your recent bookings.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Thumbnail</TableHead>
              <TableHead>Checkin/Checkout</TableHead>
              <TableHead>Property Details</TableHead>
              <TableHead className="text-center">Property Type</TableHead>
              <TableHead className="text-center">Duration</TableHead>
              <TableHead className="text-center">Total Paid</TableHead>
              <TableHead className="text-center">Location</TableHead>
              <TableHead>Status</TableHead>
              {display === "completed" && <TableHead>Review</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings.map((item) => (
              <Card
                key={item.id}
                address="Don't ask me please"
                bedroom={3}
                checkin={new Date(item.checkin)}
                checkout={new Date(item.checkout)}
                duration={item.duration}
                image={item.property_id.gallery[0]}
                location={item.property_id.property_address.location}
                property_id={item.property_id._id}
                property_type={item.property_id.type}
                status={item.status}
                title={item.property_id.property_title}
                total_paid={item.amount_paid}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export default BookingTable;
